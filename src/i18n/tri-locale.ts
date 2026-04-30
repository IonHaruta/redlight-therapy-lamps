import type { Locale } from "@/data/masks";

/** `en` folosește temporar aceeași copie ca `ro` până la traducere completă. */
export function triLocale<T>(ro: T, ru: T): Record<Locale, T> {
  return { ro, ru, en: ro };
}
