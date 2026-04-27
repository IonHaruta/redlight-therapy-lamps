import type { Locale } from "@/data/masks";
import type { CartLine } from "@/context/CartContext";

const ORDER_EMAIL = "info@redlighttherapy.md";

export function orderMailtoHref(
  lines: CartLine[],
  subtotal: number,
  locale: Locale,
): string {
  const money = new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "ru-RU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const subtotalLabel = locale === "ro" ? "Subtotal" : "Итого";
  const subject =
    locale === "ro" ? "Comandă — Red Light Therapy" : "Заказ — Red Light Therapy";

  const linesText = lines
    .map((l) => `${l.name} × ${l.qty} — ${l.price}`)
    .join("\n");

  const body = `${linesText}\n\n${subtotalLabel}: ${money}`;

  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
