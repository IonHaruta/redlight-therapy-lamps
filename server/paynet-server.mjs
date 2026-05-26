/**
 * Paynet acquiring — OAuth token + Payments/Send (JSON), redirect fields,
 * PaymentGet verification after success, Telegram notify, IPN webhook.
 */
import crypto from "node:crypto";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = Number(process.env.PAYNET_SERVER_PORT || 3001);

/** @typedef {{ firstName: string; lastName: string; email: string; phone: string; linesSummary: string; subtotal: number; locale: string; storedAt: number }} PendingOrder */

/** @type {Map<number, PendingOrder>} */
const pendingOrders = new Map();
const notifiedInvoices = new Set();

const PENDING_TTL_MS = 48 * 3600 * 1000;

function prunePendingOrders() {
  const now = Date.now();
  for (const [k, v] of pendingOrders) {
    if (now - v.storedAt > PENDING_TTL_MS) pendingOrders.delete(k);
  }
}

/** Turns undici/node fetch failures into actionable messages (DNS, TLS, timeout). */
function formatNetworkError(url, err) {
  if (!(err instanceof Error)) return `Request failed (${url}): ${String(err)}`;
  const parts = [`${url}: ${err.message}`];
  const c = err.cause;
  if (c instanceof Error) parts.push(c.message);
  else if (c && typeof c === "object" && "code" in c) parts.push(String(c.code));
  else if (c != null) parts.push(String(c));
  return parts.join(" — ");
}

const TEST_API_ORIGIN = "https://api-merchant.test.paynet.md";
const TEST_CHECKOUT_URL = "https://test.paynet.md/acquiring/getecom";

const DEMO = {
  PAYNET_MERCHANT_CODE: "975860",
  PAYNET_SALE_AREA_CODE: "GeneralTest",
  PAYNET_MERCHANT_USER: "601274",
  PAYNET_MERCHANT_USER_PASS: "lQUBtknO",
};

function loadRuntimeConfig() {
  const debug = process.env.PAYNET_DEBUG_HARDCODED === "1";
  const base = debug
    ? {
        merchantCode: DEMO.PAYNET_MERCHANT_CODE,
        saleAreaCode: DEMO.PAYNET_SALE_AREA_CODE,
        merchantUser: DEMO.PAYNET_MERCHANT_USER,
        merchantUserPass: DEMO.PAYNET_MERCHANT_USER_PASS,
        apiOrigin: process.env.PAYNET_API_ORIGIN || TEST_API_ORIGIN,
        checkoutPostUrl: process.env.PAYNET_CHECKOUT_POST_URL || TEST_CHECKOUT_URL,
      }
    : {
        merchantCode: process.env.PAYNET_MERCHANT_CODE || "",
        saleAreaCode: process.env.PAYNET_SALE_AREA_CODE || "",
        merchantUser: process.env.PAYNET_MERCHANT_USER || "",
        merchantUserPass: process.env.PAYNET_MERCHANT_USER_PASS || "",
        apiOrigin: process.env.PAYNET_API_ORIGIN || TEST_API_ORIGIN,
        checkoutPostUrl: process.env.PAYNET_CHECKOUT_POST_URL || TEST_CHECKOUT_URL,
      };

  return {
    ...base,
    serviceName: process.env.PAYNET_SERVICE_NAME || "Order",
    currency: Number(process.env.PAYNET_CURRENCY || "978"),
    returnSuccess: process.env.PAYNET_RETURN_SUCCESS || "",
    returnCancel: process.env.PAYNET_RETURN_CANCEL || "",
  };
}

function paynetAvailable(cfg) {
  const debug = process.env.PAYNET_DEBUG_HARDCODED === "1";
  const flagOn = process.env.CARD_PAYMENT_ENABLED === "true";
  if (!flagOn && !debug) return false;
  if (debug) return true;
  return Boolean(
    cfg.merchantCode &&
      cfg.merchantUser &&
      cfg.merchantUserPass &&
      cfg.returnSuccess &&
      cfg.returnCancel,
  );
}

function validateCustomer(body) {
  const firstName = String(body?.customerFirstName ?? "").trim();
  const lastName = String(body?.customerLastName ?? "").trim();
  const email = String(body?.customerEmail ?? "").trim();
  const rawPhone = String(body?.customerPhone ?? "").trim();
  if (!firstName || firstName.length > 80) throw new Error("Prenume lipsă sau invalid.");
  if (!lastName || lastName.length > 80) throw new Error("Nume lipsă sau invalid.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) throw new Error("E-mail invalid.");
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 20) throw new Error("Telefon invalid (minim 8 cifre).");
  return { firstName, lastName, email, phone: digits };
}

function genInvoiceId() {
  return crypto.randomInt(1_000_000_000_000, 9_999_999_999_999);
}

async function sendTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    console.warn("[telegram] Lipsește TELEGRAM_BOT_TOKEN sau TELEGRAM_CHAT_ID în .env");
    return false;
  }
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const message = text.length > 4000 ? `${text.slice(0, 3990)}…` : text;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.ok === false) {
      console.error("[telegram] sendMessage:", data);
      return false;
    }
    return true;
  } catch (e) {
    console.error("[telegram]", e);
    return false;
  }
}

function formatTelegramOrder(pending) {
  const lines =
    pending.linesSummary.length > 1500
      ? `${pending.linesSummary.slice(0, 1490)}…`
      : pending.linesSummary;
  return [
    "✅ Plată Paynet confirmată",
    `Nume: ${pending.lastName} ${pending.firstName}`,
    `E-mail: ${pending.email}`,
    `Telefon: ${pending.phone}`,
    `Subtotal: ${pending.subtotal} EUR`,
    "— Produse —",
    lines,
  ].join("\n");
}

/** Extrage primul rând de plată din răspunsul PaymentGet (array gol sau { Data: [...] }). */
function normalizePaymentRecord(raw) {
  if (raw == null) return null;
  if (Array.isArray(raw)) {
    const row = raw[0];
    return row && typeof row === "object" ? row : null;
  }
  if (typeof raw !== "object") return null;
  if (raw.Code !== undefined && Number(raw.Code) !== 0) return null;
  const inner = raw.Data !== undefined ? raw.Data : raw;
  if (Array.isArray(inner)) {
    const row = inner[0];
    return row && typeof row === "object" ? row : null;
  }
  if (inner && typeof inner === "object") {
    if (inner.Code !== undefined && Number(inner.Code) !== 0) return null;
    return inner;
  }
  return null;
}

function paymentRecordLooksPaid(raw) {
  const p = normalizePaymentRecord(raw);
  if (!p || typeof p !== "object") return false;

  if (p.IsPaid === true || p.Paid === true || p.PaymentCompleted === true) return true;
  if (p.Success === true || p.Success === "true") return true;

  const canceled = p.Canceled ?? p.Cancelled;
  const confirmed = p.Confirmed ?? p.Processed;

  const stNum = Number(p.Status);
  /** Paynet (observat live): Status = 4 + Confirmed set = plată finalizată */
  if (stNum === 4) return true;

  const statusStr = String(p.Status ?? p.State ?? p.PaymentStatus ?? "").toLowerCase();
  if (/(paid|complete|success|executed|confirmed|settled)/.test(statusStr)) return true;

  if (
    canceled == null &&
    confirmed != null &&
    String(confirmed).trim() !== ""
  ) {
    const mi = p.MoneyInfo;
    if (typeof mi === "string" && /BANK_APROVE|APPROVE_CODE|RRN/i.test(mi)) return true;
  }

  const paidAmt = p.PaidAmount ?? p.AmountPaid ?? p.PayedAmount;
  if (paidAmt != null && Number(paidAmt) > 0) return true;

  return false;
}

function fmtPaynetDate(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function appendInvoiceParam(url, invoice) {
  try {
    const u = new URL(url);
    u.searchParams.set("invoice", String(invoice));
    return u.toString();
  } catch {
    return url;
  }
}

async function tokenGet(cfg) {
  const body = new URLSearchParams({
    grant_type: "password",
    username: cfg.merchantUser,
    password: cfg.merchantUserPass,
  });
  if (cfg.merchantCode) body.set("merchantcode", cfg.merchantCode);
  if (cfg.saleAreaCode) body.set("salearea", cfg.saleAreaCode);

  const url = `${cfg.apiOrigin.replace(/\/$/, "")}/auth`;
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Language": "ro-RO",
      },
      body,
    });
  } catch (err) {
    throw new Error(formatNetworkError(url, err));
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data.error_description || data.error || data.Message || res.statusText;
    let hint = "";
    if (data.error === "invalid_grant") {
      hint =
        " Verifică parola utilizatorului Paynet, PAYNET_MERCHANT_CODE, PAYNET_SALE_AREA_CODE și că PAYNET_API_ORIGIN corespunde mediului (test vs producție) unde e înregistrat merchant-ul.";
    }
    throw new Error(`Paynet auth failed: ${detail}${hint}`);
  }
  if (!data.access_token) {
    throw new Error("Paynet auth: missing access_token");
  }
  return data.access_token;
}

function validateLines(body) {
  const lines = body?.lines;
  if (!Array.isArray(lines) || lines.length === 0) {
    throw new Error("Invalid cart");
  }
  const clientSubtotal = Number(body?.subtotal);
  if (!Number.isFinite(clientSubtotal) || clientSubtotal <= 0) {
    throw new Error("Invalid subtotal");
  }
  let computedMinor = 0;
  const normalized = [];
  for (const raw of lines) {
    const qty = Math.max(0, Math.floor(Number(raw.qty)));
    const priceValue = Number(raw.priceValue);
    const name = String(raw.name || "").trim();
    const id = String(raw.id || "").trim();
    if (!id || !name || qty < 1 || !Number.isFinite(priceValue) || priceValue < 0) {
      throw new Error("Invalid line item");
    }
    const unitMinor = Math.round(priceValue * 100);
    computedMinor += unitMinor * qty;
    normalized.push({ id, name, priceValue, qty });
  }
  const clientMinor = Math.round(clientSubtotal * 100);
  if (Math.abs(computedMinor - clientMinor) > 1) {
    throw new Error("Subtotal mismatch");
  }
  return normalized;
}

function buildPaymentPayload(cfg, invoice, lines, lang, customer) {
  const externalDate = fmtPaynetDate(new Date());
  const expiryDate = fmtPaynetDate(new Date(Date.now() + 4 * 3600 * 1000));

  const products = lines.map((line, idx) => {
    const unitMinor = Math.round(line.priceValue * 100);
    const qtyHundredths = Math.round(line.qty * 100);
    const totalAmount = Math.round((qtyHundredths / 100) * unitMinor);
    const safeCode = String(line.id).replace(/[^\w-]/g, "_").slice(0, 64) || `line_${idx + 1}`;
    return {
      GroupName: null,
      QualitiesConcat: null,
      LineNo: idx + 1,
      GroupId: null,
      Code: safeCode,
      Barcode: 1000 + idx,
      Name: line.name.slice(0, 200),
      Description: line.name.slice(0, 500),
      UnitPrice: unitMinor,
      UnitProduct: null,
      Quantity: qtyHundredths,
      Amount: null,
      Dimensions: null,
      Qualities: null,
      TotalAmount: totalAmount,
    };
  });

  const serviceAmount = products.reduce((sum, p) => sum + p.TotalAmount, 0);
  const displayName = `${customer.firstName} ${customer.lastName}`.slice(0, 120);

  const payload = {
    Invoice: invoice,
    MerchantCode: cfg.merchantCode,
    LinkUrlSuccess: appendInvoiceParam(cfg.returnSuccess, invoice),
    LinkUrlCancel: appendInvoiceParam(cfg.returnCancel, invoice),
    Signature: null,
    SignVersion: "v01",
    Customer: {
      Code: customer.email.slice(0, 120),
      Name: displayName,
      NameFirst: customer.firstName.slice(0, 80),
      NameLast: customer.lastName.slice(0, 80),
      email: customer.email,
      Country: "Moldova",
      City: "Chisinau",
      Address: "Online order",
      PhoneNumber: customer.phone,
    },
    Payer: null,
    Currency: cfg.currency,
    ExternalDate: externalDate,
    ExpiryDate: expiryDate,
    Services: [
      {
        Name: cfg.serviceName.slice(0, 200),
        Description: cfg.serviceName.slice(0, 500),
        Amount: serviceAmount,
        Products: products,
      },
    ],
    MoneyType: null,
  };

  const paynetLang = lang === "ru" || lang === "en" || lang === "ro" ? lang : "ro";

  return { payload, expiryDate, paynetLang };
}

async function paymentSend(cfg, accessToken, payload) {
  const url = `${cfg.apiOrigin.replace(/\/$/, "")}/api/Payments/Send`;
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new Error(formatNetworkError(url, err));
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data.Message || data.message || JSON.stringify(data);
    throw new Error(`Payments/Send HTTP ${res.status}: ${msg}`);
  }
  return data;
}

async function paymentGet(cfg, accessToken, externalId) {
  const qs = new URLSearchParams({ ExternalID: String(externalId) });
  const url = `${cfg.apiOrigin.replace(/\/$/, "")}/api/Payments?${qs}`;
  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
    });
  } catch (err) {
    throw new Error(formatNetworkError(url, err));
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data.Message || data.message || JSON.stringify(data);
    throw new Error(`Payments/Get HTTP ${res.status}: ${msg}`);
  }
  return data;
}

async function notifyPaidAfterVerification(invoiceNum) {
  prunePendingOrders();
  const inv = Number(invoiceNum);
  if (!Number.isFinite(inv)) return { ok: false, reason: "bad_invoice" };
  if (notifiedInvoices.has(inv)) return { ok: true, duplicate: true };
  const pending = pendingOrders.get(inv);
  if (!pending) return { ok: false, reason: "unknown_order" };

  const cfg = loadRuntimeConfig();
  if (!paynetAvailable(cfg)) return { ok: false, reason: "paynet_off" };

  const token = await tokenGet(cfg);
  const pg = await paymentGet(cfg, token, inv);
  if (!paymentRecordLooksPaid(pg)) {
    console.info("[paynet] PaymentGet nu indică plată încă:", JSON.stringify(pg).slice(0, 1200));
    return { ok: false, reason: "not_paid" };
  }

  notifiedInvoices.add(inv);
  await sendTelegram(formatTelegramOrder(pending));
  return { ok: true };
}

function parseNotifyPayload(buf) {
  if (!Buffer.isBuffer(buf) || buf.length === 0) return {};
  const s = buf.toString("utf8").trim();
  try {
    return JSON.parse(s);
  } catch {
    const obj = {};
    try {
      const sp = new URLSearchParams(s);
      for (const [k, v] of sp) obj[k] = v;
    } catch {
      return {};
    }
    return obj;
  }
}

async function notifyHandler(req, res) {
  try {
    const payload = parseNotifyPayload(req.body);
    const invoice = Number(
      payload.Invoice ?? payload.invoice ?? payload.ExternalID ?? payload.externalId ?? payload.OrderId,
    );
    if (Number.isFinite(invoice)) {
      const result = await notifyPaidAfterVerification(invoice);
      console.info("[paynet notify]", invoice, result);
    } else {
      console.info("[paynet notify] payload fără invoice:", JSON.stringify(payload).slice(0, 400));
    }
  } catch (e) {
    console.error("[paynet notify]", e);
  }
  res.json({ ok: true });
}

const app = express();
app.use(cors({ origin: true }));

app.post("/api/paynet/notify", express.raw({ type: "*/*", limit: "512kb" }), notifyHandler);

app.use(express.json({ limit: "256kb" }));

app.get("/api/paynet/status", (_req, res) => {
  const cfg = loadRuntimeConfig();
  res.json({
    enabled: paynetAvailable(cfg),
    checkoutPostUrl: paynetAvailable(cfg) ? cfg.checkoutPostUrl : null,
  });
});

app.post("/api/paynet/verify-paid", async (req, res) => {
  try {
    const invoice = Number(req.body?.invoice);
    const result = await notifyPaidAfterVerification(invoice);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, reason: "server_error" });
  }
});

app.post("/api/paynet/register", async (req, res) => {
  try {
    const cfg = loadRuntimeConfig();
    if (!paynetAvailable(cfg)) {
      return res.status(503).json({ error: "Paynet checkout is not configured" });
    }

    const lang = req.body?.locale === "ru" || req.body?.locale === "en" ? req.body.locale : "ro";
    const customer = validateCustomer(req.body);
    const lines = validateLines(req.body);

    let invoice = Number(req.body?.invoice);
    if (!Number.isFinite(invoice) || invoice <= 0) invoice = genInvoiceId();

    const { payload, expiryDate, paynetLang } = buildPaymentPayload(
      cfg,
      invoice,
      lines,
      lang,
      customer,
    );

    const token = await tokenGet(cfg);
    const data = await paymentSend(cfg, token, payload);

    const paymentId = data.PaymentId ?? data.paymentId;
    const signature = data.Signature ?? data.signature;

    if (data.Code !== undefined && Number(data.Code) !== 0) {
      return res.status(400).json({
        error: data.Message || "Paynet refused payment registration",
        code: data.Code,
      });
    }

    if (!paymentId || !signature) {
      console.error("Unexpected Paynet response:", JSON.stringify(data));
      return res.status(502).json({ error: "Invalid Paynet response (missing PaymentId/Signature)" });
    }

    pendingOrders.set(invoice, {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      linesSummary: lines.map((l) => `${l.name} ×${l.qty}`).join("\n"),
      subtotal: Number(req.body.subtotal),
      locale: lang,
      storedAt: Date.now(),
    });

    res.json({
      checkoutPostUrl: cfg.checkoutPostUrl,
      fields: {
        operation: String(paymentId),
        LinkUrlSucces: payload.LinkUrlSuccess,
        LinkUrlCancel: payload.LinkUrlCancel,
        ExpiryDate: expiryDate,
        Signature: String(signature),
        Lang: paynetLang,
      },
      invoice,
    });
  } catch (e) {
    console.error(e);
    const msg = e instanceof Error ? e.message : "Paynet error";
    const upstream =
      msg.includes(": https://") ||
      msg.includes("fetch failed") ||
      msg.includes("Payments/Send HTTP") ||
      msg.includes("Payments/Get HTTP") ||
      msg.includes("Paynet auth failed");
    res.status(upstream ? 502 : 400).json({ error: msg });
  }
});

app.listen(PORT, () => {
  console.info(`Paynet API listening on http://127.0.0.1:${PORT}`);
});
