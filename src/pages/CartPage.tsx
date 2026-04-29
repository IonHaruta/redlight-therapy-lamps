import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { CartLineList } from "@/components/CartLineList";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import { orderMailtoHref } from "@/lib/order-mailto";

const CartPage = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const { lines, subtotal } = useCart();

  const money = new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "ru-RU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const mailHref = lines.length ? orderMailtoHref(lines, subtotal, locale) : "#";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-2xl px-4 pb-16 pt-24">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          {t.cart.title}
        </h1>

        {lines.length === 0 ? (
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">{t.cart.empty}</p>
            <Button asChild className="mt-6 h-12 rounded-full px-6">
              <Link to="/">{t.cart.continueShopping}</Link>
            </Button>
          </div>
        ) : (
          <>
            <CartLineList size="md" />

            <div className="mt-2 rounded-lg border border-border bg-card p-6">
              <div className="mb-6 flex items-center justify-between font-display">
                <span className="text-muted-foreground">{t.cart.subtotal}</span>
                <span className="text-2xl font-bold text-foreground">{money}</span>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{t.cart.checkoutHint}</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="h-12 flex-1 rounded-full gradient-red font-display uppercase tracking-wider text-primary-foreground hover:opacity-90 sm:flex-none sm:px-10"
                >
                  <a href={mailHref}>{t.cart.checkout}</a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full px-6 sm:flex-none">
                  <Link to={{ pathname: "/", hash: "contact" }}>{t.cart.contactInstead}</Link>
                </Button>
              </div>

              <Button asChild variant="ghost" className="mt-4 h-12 w-full rounded-full text-muted-foreground">
                <Link to="/">{t.cart.continueShopping}</Link>
              </Button>
            </div>
          </>
        )}
      </main>

      <FooterSection />
    </div>
  );
};

export default CartPage;
