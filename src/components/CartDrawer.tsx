import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartLineList } from "@/components/CartLineList";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const { lines, subtotal } = useCart();

  const money = new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "ru-RU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col gap-0 overflow-y-auto sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4 text-left">
          <SheetTitle className="font-display">{t.cart.title}</SheetTitle>
        </SheetHeader>

        {lines.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">{t.cart.empty}</p>
        ) : (
          <CartLineList
            size="sm"
            onProductNavigate={() => onOpenChange(false)}
          />
        )}

        {lines.length > 0 ? (
          <div className="mt-auto border-t border-border pt-4">
            <div className="mb-4 flex items-center justify-between font-display text-sm">
              <span className="text-muted-foreground">{t.cart.subtotal}</span>
              <span className="text-lg font-bold text-foreground">{money}</span>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                asChild
                className="w-full rounded-full gradient-red font-display uppercase tracking-wider text-primary-foreground hover:opacity-90"
              >
                <Link to="/cos" onClick={() => onOpenChange(false)}>
                  {t.cart.viewCart}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link to="/" onClick={() => onOpenChange(false)}>
                  {t.cart.continueShopping}
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
