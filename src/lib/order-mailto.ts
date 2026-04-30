import type { Locale } from "@/data/masks";
import type { CartLine } from "@/context/CartContext";
import { intlLocaleTag } from "@/i18n/locale-format";

const ORDER_EMAIL = "info@redlighttherapy.md";

export function orderMailtoHref(
  lines: CartLine[],
  subtotal: number,
  locale: Locale,
): string {
  const money = new Intl.NumberFormat(intlLocaleTag(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const subtotalLabel =
    locale === "ro" ? "Subtotal" : locale === "ru" ? "Итого" : "Subtotal";
  const subject =
    locale === "ro"
      ? "Comandă — Red Light Therapy"
      : locale === "ru"
        ? "Заказ — Red Light Therapy"
        : "Order — Red Light Therapy";

  const linesText = lines
    .map((l) => `${l.name} × ${l.qty} — ${l.price}`)
    .join("\n");

  const body = `${linesText}\n\n${subtotalLabel}: ${money}`;

  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
