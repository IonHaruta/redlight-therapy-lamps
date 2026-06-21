import type { Locale, MaskMedia } from "@/data/masks";

/** Path for the active locale; falls back to `media.path` when no locale map exists. */
export function resolveMediaPath(media: MaskMedia, locale: Locale): string {
  return media.paths?.[locale] ?? media.path;
}
