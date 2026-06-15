export type MaibRegisterResponse = {
  checkoutId: string;
  checkoutUrl: string;
  orderId: string;
};

/** Redirect customer to MAIB hosted checkout page. */
export function redirectToMaibCheckout(data: MaibRegisterResponse): void {
  sessionStorage.setItem("maib-checkout-id", data.checkoutId);
  window.location.href = data.checkoutUrl;
}
