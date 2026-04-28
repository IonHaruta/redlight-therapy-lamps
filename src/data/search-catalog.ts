import type { Locale } from "@/data/masks";
import { maskProducts } from "@/data/masks";
import { products } from "@/data/products";
import { lampProducts } from "@/data/lamps";
import { accessoryProducts } from "@/data/accessories";

export type CatalogSearchItem = {
  kind: "mask" | "lamp" | "lampPanel" | "accessory";
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

  const lampPanels: CatalogSearchItem[] = products.map((p) => {
    const haystack = [p.name, p.subtitle, p.description, p.slug, "lampa", "панель", "bio"]
      .map(norm)
      .join(" ");
    return {
      kind: "lampPanel",
      slug: p.slug,
      to: `/produs/${p.slug}`,
      title: p.name,
      subtitle: p.subtitle,
      price: p.price,
      haystack,
    };
  });

  const lampsFs7: CatalogSearchItem[] = lampProducts.map((l) => {
    const tr = l.translations[locale];
    const haystack = [
      l.name,
      tr.title,
      tr.modelShort,
      tr.subtitle,
      l.slug,
      "lampa",
      "lampi",
      "fs7",
      "rd pro",
      "панель",
      "ламп",
    ]
      .map(norm)
      .join(" ");
    return {
      kind: "lamp",
      slug: l.slug,
      to: `/lampi/${l.slug}`,
      title: tr.title,
      subtitle: tr.modelShort,
      price: l.price,
      haystack,
    };
  });

  const accessories: CatalogSearchItem[] = accessoryProducts.map((a) => {
    const tr = a.translations[locale];
    const haystack = [a.name, tr.title, tr.modelShort, tr.subtitle, a.slug, "accesoriu", "аксессуар"]
      .map(norm)
      .join(" ");
    return {
      kind: "accessory",
      slug: a.slug,
      to: `/accesorii/${a.slug}`,
      title: tr.title,
      subtitle: tr.modelShort,
      price: a.price,
      haystack,
    };
  });

  return [...masks, ...lampPanels, ...lampsFs7, ...accessories];
}

export function searchCatalog(locale: Locale, query: string, limit = 8): CatalogSearchItem[] {
  const q = norm(query.trim());
  if (!q) return [];
  const items = getCatalogSearchItems(locale);
  return items.filter((item) => item.haystack.includes(q)).slice(0, limit);
}
