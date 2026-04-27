import type { Locale } from "@/data/masks";
import { maskProducts } from "@/data/masks";
import { products } from "@/data/products";

export type CatalogSearchItem = {
  kind: "mask" | "lamp";
  slug: string;
  /** Rută relativă pentru Link */
  to: string;
  title: string;
  subtitle: string;
  price: string;
  /** Text normalizat pentru căutare */
  haystack: string;
};

function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function getCatalogSearchItems(locale: Locale): CatalogSearchItem[] {
  const masks: CatalogSearchItem[] = maskProducts.map((m) => {
    const tr = m.translations[locale];
    const haystack = [
      m.name,
      tr.title,
      tr.modelShort,
      tr.subtitle,
      m.slug,
      "mask",
      "masca",
      "маска",
    ]
      .map(norm)
      .join(" ");
    return {
      kind: "mask",
      slug: m.slug,
      to: `/masti/${m.slug}`,
      title: tr.title,
      subtitle: tr.modelShort,
      price: m.price,
      haystack,
    };
  });

  const lamps: CatalogSearchItem[] = products.map((p) => {
    const haystack = [p.name, p.subtitle, p.description, p.slug, "lampa", "панель", "bio"]
      .map(norm)
      .join(" ");
    return {
      kind: "lamp",
      slug: p.slug,
      to: `/produs/${p.slug}`,
      title: p.name,
      subtitle: p.subtitle,
      price: p.price,
      haystack,
    };
  });

  return [...masks, ...lamps];
}

export function searchCatalog(locale: Locale, query: string, limit = 8): CatalogSearchItem[] {
  const q = norm(query.trim());
  if (!q) return [];
  const items = getCatalogSearchItems(locale);
  return items.filter((item) => item.haystack.includes(q)).slice(0, limit);
}
