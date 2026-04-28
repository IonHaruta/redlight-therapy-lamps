import type { CartLine } from "@/context/CartContext";
import { getLampBySlug } from "@/data/lamps";

export function cartLineHref(line: Pick<CartLine, "kind" | "slug">): string {
  if (line.kind === "mask") return `/masti/${line.slug}`;
  if (line.kind === "accessory") return `/accesorii/${line.slug}`;
  if (line.kind === "lamp" && getLampBySlug(line.slug)) return `/lampi/${line.slug}`;
  return `/produs/${line.slug}`;
}
