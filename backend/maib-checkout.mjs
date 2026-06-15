/**
 * MAIB e-Commerce Checkout — OAuth token, session creation, callback verify.
 * Docs: https://docs.maibmerchants.md/checkout
 */
import crypto from "node:crypto";
import express from "express";

const SANDBOX_API = "https://sandbox.maibmerchants.md";
const PROD_API = "https://api.maibmerchants.md";

/** @typedef {{ firstName: string; lastName: string; email: string; phone: string; linesSummary: string; subtotal: number; locale: string; storedAt: number }} PendingOrder */

/** @type {Map<string, PendingOrder>} checkoutId → order */
const pendingOrders = new Map();
const notifiedCheckouts = new Set();
const PENDING_TTL_MS = 48 * 3600 * 1000;

function prunePending() {
  const now = Date.now();
  for (const [k, v] of pendingOrders) {
    if (now - v.storedAt > PENDING_TTL_MS) pendingOrders.delete(k);
  }
}

function loadMaibConfig() {
  const sandbox = process.env.MAIB_SANDBOX !== "0";
  return {
    clientId: process.env.MAIB_CLIENT_ID || "",
    clientSecret: process.env.MAIB_CLIENT_SECRET || "",
    signatureKey: process.env.MAIB_SIGNATURE_KEY || "",
    apiOrigin: process.env.MAIB_API_ORIGIN || (sandbox ? SANDBOX_API : PROD_API),
    returnSuccess: process.env.MAIB_RETURN_SUCCESS || "",
    returnCancel: process.env.MAIB_RETURN_CANCEL || "",
    callbackUrl: process.env.MAIB_CALLBACK_URL || "",
  };
}

export function maibAvailable(cfg) {
  const flagOn = process.env.CARD_PAYMENT_ENABLED === "true";
  if (!flagOn) return false;
  return Boolean(cfg.clientId && cfg.clientSecret && cfg.returnSuccess && cfg.returnCancel);
}

function genOrderId() {
  return `RLT-${Date.now()}`;
}

async function maibFetch(cfg, path, { method = "GET", token, body } = {}) {
  const url = `${cfg.apiOrigin.replace(/\/$/, "")}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { "Content-Type": "application/json" } : {}),
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const msg = data.errors?.[0]?.errorMessage || JSON.stringify(data);
    throw new Error(`MAIB ${method} ${path}: ${msg}`);
  }
  return data;
}

async function getToken(cfg) {
  const data = await maibFetch(cfg, "/v2/auth/token", {
    method: "POST",
    body: { clientId: cfg.clientId, clientSecret: cfg.clientSecret },
  });
  return data.result.accessToken;
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

function validateLines(body) {
  const lines = body?.lines;
  if (!Array.isArray(lines) || lines.length === 0) throw new Error("Invalid cart");
  const clientSubtotal = Number(body?.subtotal);
  if (!Number.isFinite(clientSubtotal) || clientSubtotal <= 0) throw new Error("Invalid subtotal");
  let computed = 0;
  const normalized = [];
  for (const raw of lines) {
    const qty = Math.max(0, Math.floor(Number(raw.qty)));
    const priceValue = Number(raw.priceValue);
    const name = String(raw.name || "").trim();
    const id = String(raw.id || "").trim();
    if (!id || !name || qty < 1 || !Number.isFinite(priceValue) || priceValue < 0) {
      throw new Error("Invalid line item");
    }
    computed += priceValue * qty;
    normalized.push({ id, name, priceValue, qty });
  }
  if (Math.abs(computed - clientSubtotal) > 0.01) throw new Error("Subtotal mismatch");
  return normalized;
}

function verifyCallbackSignature(cfg, rawBody, headers) {
  if (!cfg.signatureKey) return true;
  const sigHeader = headers["x-signature"] || headers["X-Signature"];
  const tsHeader = headers["x-signature-timestamp"] || headers["X-Signature-Timestamp"];
  if (!sigHeader || !tsHeader) return false;
  const received = String(sigHeader).startsWith("sha256=") ? String(sigHeader).slice(7) : String(sigHeader);
  const hmac = crypto.createHmac("sha256", cfg.signatureKey);
  hmac.update(String(tsHeader));
  const computed = hmac.digest("base64");
  try {
    return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(received));
  } catch {
    return false;
  }
}

export function createMaibRouter({ sendTelegram, formatTelegramOrder }) {
  const router = express.Router();

  router.get("/status", (_req, res) => {
    const cfg = loadMaibConfig();
    res.json({ enabled: maibAvailable(cfg) });
  });

  router.post("/register", async (req, res) => {
    try {
      const cfg = loadMaibConfig();
      if (!maibAvailable(cfg)) {
        return res.status(503).json({ error: "MAIB checkout is not configured" });
      }

      const lang = req.body?.locale === "ru" || req.body?.locale === "en" ? req.body.locale : "ro";
      const customer = validateCustomer(req.body);
      const lines = validateLines(req.body);
      const subtotal = Number(req.body.subtotal);
      const orderId = genOrderId();

      const token = await getToken(cfg);
      const payload = {
        amount: subtotal,
        currency: "MDL",
        orderInfo: {
          id: orderId,
          description: `Comandă Red Light Therapy — ${lines.map((l) => l.name).join(", ").slice(0, 200)}`,
          date: new Date().toISOString(),
          items: lines.map((line, idx) => ({
            externalId: line.id.slice(0, 64),
            title: line.name.slice(0, 125),
            amount: line.priceValue,
            currency: "MDL",
            quantity: line.qty,
            displayOrder: idx,
          })),
        },
        payerInfo: {
          name: `${customer.firstName} ${customer.lastName}`.slice(0, 120),
          email: customer.email,
          phone: customer.phone.startsWith("+") ? customer.phone : `+373${customer.phone.replace(/^0/, "")}`,
        },
        language: lang,
        successUrl: cfg.returnSuccess,
        failUrl: cfg.returnCancel,
        ...(cfg.callbackUrl ? { callbackUrl: cfg.callbackUrl } : {}),
      };

      const data = await maibFetch(cfg, "/v2/checkouts", { method: "POST", token, body: payload });
      const { checkoutId, checkoutUrl } = data.result;

      pendingOrders.set(checkoutId, {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        linesSummary: lines.map((l) => `${l.name} ×${l.qty}`).join("\n"),
        subtotal,
        locale: lang,
        storedAt: Date.now(),
      });

      res.json({ checkoutId, checkoutUrl, orderId });
    } catch (e) {
      console.error("[maib register]", e);
      const msg = e instanceof Error ? e.message : "MAIB error";
      res.status(msg.includes("MAIB") ? 502 : 400).json({ error: msg });
    }
  });

  router.post("/verify-paid", async (req, res) => {
    try {
      prunePending();
      const checkoutId = String(req.body?.checkoutId || "");
      if (!checkoutId) return res.status(400).json({ ok: false, reason: "bad_checkout" });
      if (notifiedCheckouts.has(checkoutId)) return res.json({ ok: true, duplicate: true });

      const pending = pendingOrders.get(checkoutId);
      if (!pending) return res.json({ ok: false, reason: "unknown_order" });

      const cfg = loadMaibConfig();
      if (!maibAvailable(cfg)) return res.json({ ok: false, reason: "maib_off" });

      const token = await getToken(cfg);
      const data = await maibFetch(cfg, `/v2/checkouts/${checkoutId}`, { token });
      if (data.result?.status !== "Completed") {
        return res.json({ ok: false, reason: "not_paid" });
      }

      notifiedCheckouts.add(checkoutId);
      if (sendTelegram) await sendTelegram(formatTelegramOrder(pending, "MAIB"));
      return res.json({ ok: true });
    } catch (e) {
      console.error("[maib verify]", e);
      res.status(500).json({ ok: false, reason: "server_error" });
    }
  });

  return router;
}

export function createMaibCallbackHandler({ sendTelegram, formatTelegramOrder }) {
  return async (req, res) => {
    try {
      const cfg = loadMaibConfig();
      const raw = req.body?.toString?.("utf8") || "";
      if (!verifyCallbackSignature(cfg, raw, req.headers)) {
        console.warn("[maib callback] invalid signature");
        return res.status(401).json({ ok: false });
      }
      const payload = JSON.parse(raw || "{}");
      const checkoutId = payload.checkoutId || payload.id;
      if (checkoutId && payload.status === "Completed" && !notifiedCheckouts.has(checkoutId)) {
        const pending = pendingOrders.get(checkoutId);
        if (pending && sendTelegram) {
          notifiedCheckouts.add(checkoutId);
          await sendTelegram(formatTelegramOrder(pending, "MAIB"));
        }
      }
      res.json({ ok: true });
    } catch (e) {
      console.error("[maib callback]", e);
      res.json({ ok: true });
    }
  };
}
