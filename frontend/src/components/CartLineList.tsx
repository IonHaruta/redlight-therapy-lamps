import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { getSiteCopy } from "@/i18n/site";
import { useLocale } from "@/context/LocaleContext";
import { publicAssetUrl } from "@/lib/public-asset-url";
import { cartLineHref } from "@/lib/cart-href";

function lineThumbSrc(
  line: { kind: string; thumb?: string },
  thumb?: string,
) {
  if (!thumb) return undefined;
  if (line.kind === "mask" || line.kind === "accessory" || line.kind === "bed")
    return publicAssetUrl(thumb);
  if (thumb.startsWith("http") || thumb.includes("/assets/")) return thumb;
  return publicAssetUrl(thumb);
}

type CartLineListProps = {
  /** Dimensiune miniatură: drawer vs pagină coș */
  size?: "sm" | "md";
  onProductNavigate?: () => void;
};

export function CartLineList({ size = "sm", onProductNavigate }: CartLineListProps) {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const { lines, setQty, removeLine } = useCart();

  const thumbBox = size === "md" ? "h-28 w-28" : "h-20 w-20";

  return (
    <ul className="flex flex-col gap-4 py-4">
      {lines.map((line) => {
        const src = lineThumbSrc(line, line.thumb);
        const href = cartLineHref(line);
        return (
          <li
            key={line.id}
            className="flex gap-3 rounded-lg border border-border bg-card p-3"
          >
            <Link
              to={href}
              onClick={onProductNavigate}
              className={`relative shrink-0 overflow-hidden rounded-md bg-secondary ${thumbBox}`}
            >
              {src ? (
                <img src={src} alt="" className="h-full w-full object-cover" />
              ) : (
                <span className="flex h-full items-center justify-center text-xs text-muted-foreground">
                  —
                </span>
              )}
            </Link>
            <div className="min-w-0 flex-1">
              <Link
                to={href}
                onClick={onProductNavigate}
                className="font-display text-sm font-semibold leading-snug text-foreground hover:text-primary"
              >
                {line.name}
              </Link>
              <p className="mt-0.5 text-xs text-muted-foreground">{line.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center rounded-full border border-border">
                  <button
                    type="button"
                    aria-label="−"
                    className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    onClick={() => setQty(line.id, line.qty - 1)}
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="min-w-[1.5rem] text-center font-display text-sm">
                    {line.qty}
                  </span>
                  <button
                    type="button"
                    aria-label="+"
                    className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    onClick={() => setQty(line.id, line.qty + 1)}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => removeLine(line.id)}
                  aria-label={t.cart.remove}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
