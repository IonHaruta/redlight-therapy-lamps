import type { Locale } from "@/data/masks";

/** BCP 47 tag for `Intl` formatters (currency, dates). */
export function intlLocaleTag(locale: Locale): string {
  if (locale === "ro") return "ro-RO";
  if (locale === "ru") return "ru-RU";
  return "en-US";
}
