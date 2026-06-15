import type { Locale } from "@/data/masks";
import type { CartLine } from "@/context/CartContext";
import { formatCartTotal } from "@/i18n/locale-format";
import { STORE_EMAIL } from "@/lib/contact";

export function orderMailtoHref(
  lines: CartLine[],
  subtotal: number,
  locale: Locale,
): string {
  const money = formatCartTotal(subtotal, locale);

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

  return `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
