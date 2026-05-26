import type { Locale } from "@/data/masks";

/** BCP 47 tag for `Intl` formatters (currency, dates). */
export function intlLocaleTag(locale: Locale): string {
  if (locale === "ro") return "ro-RO";
  if (locale === "ru") return "ru-RU";
  return "en-US";
}

/** Product catalog label, e.g. `6 900 lei`. */
export function formatPriceLei(amount: number): string {
  const digits = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${digits} lei`;
}

/** Cart subtotal and checkout totals. */
export function formatCartTotal(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocaleTag(locale), {
    style: "currency",
    currency: "MDL",
    maximumFractionDigits: 0,
  }).format(amount);
}
