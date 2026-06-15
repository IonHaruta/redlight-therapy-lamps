/**
 * MAIB Checkout sandbox test: create session → pay with test card → refund.
 * Usage (from backend/): node --env-file=.env scripts/maib-test-payment.mjs
 */
import { chromium } from "playwright";
import dotenv from "dotenv";

dotenv.config();

const API = process.env.MAIB_API_ORIGIN || "https://sandbox.maibmerchants.md";
const CREDS = {
  clientId: process.env.MAIB_CLIENT_ID,
  clientSecret: process.env.MAIB_CLIENT_SECRET,
};

const TEST_CARD = {
  holder: "Test Test",
  number: "5102180060101124",
  exp: "06/28",
  cvv: "760",
};

async function api(path, { method = "GET", token, body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    throw new Error(`${method} ${path} failed: ${JSON.stringify(data)}`);
  }
  return data;
}

async function getToken() {
  const res = await fetch(`${API}/v2/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(CREDS),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.result.accessToken;
}

async function createCheckout(token) {
  const orderId = `RLT-${Date.now()}`;
  return api("/v2/checkouts", {
    method: "POST",
    token,
    body: {
      amount: 10.0,
      currency: "MDL",
      orderInfo: {
        id: orderId,
        description: "Red Light Therapy - test plată MAIB",
        date: new Date().toISOString(),
        items: [
          {
            externalId: "rlt-test",
            title: "Test lamp order",
            amount: 10.0,
            currency: "MDL",
            quantity: 1,
          },
        ],
      },
      payerInfo: {
        name: "Test Test",
        email: "test@redlighttherapy.md",
        phone: "+37368123456",
      },
      language: "ro",
      successUrl: "http://localhost:8080/maib/success",
      failUrl: "http://localhost:8080/maib/cancel",
    },
  });
}

async function payWithCard(checkoutUrl) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.setDefaultTimeout(60000);

  console.log("Opening checkout:", checkoutUrl);
  await page.goto(checkoutUrl, { waitUntil: "networkidle" });

  await page.locator('button:has-text("Card")').click();
  await page.waitForURL(/ecomm\/ClientHandler|checkout-sandbox/, { timeout: 30000 });

  await page.locator("#cardname").fill(TEST_CARD.holder);
  await page.locator("#cardnr").fill(TEST_CARD.number);
  await page.locator("#expiryDate").fill(TEST_CARD.exp);
  await page.locator("#cvc2").fill(TEST_CARD.cvv);

  await page.locator('button:has-text("Achită")').click();

  await page.waitForTimeout(8000);
  const finalUrl = page.url();
  const bodyText = await page.locator("body").innerText().catch(() => "");
  await browser.close();

  return { finalUrl, bodyText: bodyText.slice(0, 500) };
}

async function waitForPayment(token, checkoutId, maxAttempts = 12) {
  for (let i = 0; i < maxAttempts; i++) {
    const data = await api(`/v2/checkouts/${checkoutId}`, { token });
    const status = data.result?.status;
    console.log(`Checkout status (attempt ${i + 1}):`, status);
    if (status === "Completed" && data.result?.payment?.paymentId) {
      return data.result;
    }
    if (status === "Failed" || status === "Cancelled") {
      throw new Error(`Checkout ended with status: ${status}`);
    }
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error("Payment not completed in time");
}

async function refundPayment(token, paymentId, amount) {
  return api(`/v2/payments/${paymentId}/refund`, {
    method: "POST",
    token,
    body: { amount, reason: "Test refund - Red Light Therapy MAIB integration" },
  });
}

async function getRefundStatus(token, refundId) {
  return api(`/v2/payments/refunds/${refundId}`, { token });
}

async function main() {
  if (!CREDS.clientId || !CREDS.clientSecret) {
    throw new Error("Set MAIB_CLIENT_ID and MAIB_CLIENT_SECRET in .env");
  }
  console.log("=== MAIB Checkout Test (redlighttherapy) ===\n");

  const token = await getToken();
  console.log("✓ Auth token obtained");

  const checkout = await createCheckout(token);
  const { checkoutId, checkoutUrl } = checkout.result;
  console.log("✓ Checkout created:", checkoutId);
  console.log("  URL:", checkoutUrl);

  const payResult = await payWithCard(checkoutUrl);
  console.log("✓ Browser flow finished");
  console.log("  Final URL:", payResult.finalUrl);

  const completed = await waitForPayment(token, checkoutId);
  const paymentId = completed.payment.paymentId;
  console.log("✓ Payment completed:", paymentId);
  console.log("  Amount:", completed.payment.amount, completed.payment.currency);
  console.log("  Status:", completed.payment.status);
  console.log("  Reference:", completed.payment.referenceNumber);
  console.log("  Approval:", completed.payment.approvalCode);

  const refund = await refundPayment(token, paymentId, completed.payment.amount);
  const refundId = refund.result.refundId;
  console.log("✓ Refund initiated:", refundId, "status:", refund.result.status);

  await new Promise((r) => setTimeout(r, 3000));
  const refundDetails = await getRefundStatus(token, refundId);
  console.log("✓ Refund details:", JSON.stringify(refundDetails.result, null, 2));

  const paymentAfter = await api(`/v2/payments/${paymentId}`, { token });
  console.log("✓ Payment after refund:", paymentAfter.result.status);
  console.log("  refundedAmount:", paymentAfter.result.refundedAmount);

  console.log("\n=== TEST COMPLETE ===");
}

main().catch((err) => {
  console.error("FAILED:", err.message);
  process.exit(1);
});
