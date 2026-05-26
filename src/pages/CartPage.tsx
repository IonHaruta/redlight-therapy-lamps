import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartLineList } from "@/components/CartLineList";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import { formatCartTotal } from "@/i18n/locale-format";

const CartPage = () => {
  const navigate = useNavigate();
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const { lines, subtotal, clearCart } = useCart();
  const [checkoutBusy, setCheckoutBusy] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const money = formatCartTotal(subtotal, locale);

  const checkoutFieldsValid = () => {
    const fn = customerFirstName.trim();
    const ln = customerLastName.trim();
    const em = customerEmail.trim();
    const ph = customerPhone.replace(/\D/g, "");
    if (!fn || !ln || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) || ph.length < 8) {
      toast.error(t.cart.paynetFieldsRequired);
      return false;
    }
    return true;
  };

  const handleCheckout = () => {
    if (!checkoutFieldsValid()) return;
    if (!termsAccepted) {
      toast.error(t.cart.paynetTermsRequired);
      return;
    }
    setCheckoutBusy(true);
    clearCart();
    navigate("/comanda/success");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-2xl px-4 pb-16 pt-24">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">{t.cart.title}</h1>

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

              <p className="mb-4 text-sm text-muted-foreground">{t.cart.payWithCardHint}</p>

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="checkout-fn" className="text-muted-foreground">
                    {t.cart.paynetFirstNameLabel}{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="checkout-fn"
                    autoComplete="given-name"
                    placeholder={t.cart.paynetFirstNamePlaceholder}
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout-ln" className="text-muted-foreground">
                    {t.cart.paynetLastNameLabel}{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="checkout-ln"
                    autoComplete="family-name"
                    placeholder={t.cart.paynetLastNamePlaceholder}
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="checkout-email" className="text-muted-foreground">
                    {t.cart.paynetEmailLabel}{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="checkout-email"
                    type="email"
                    autoComplete="email"
                    placeholder={t.cart.paynetEmailPlaceholder}
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="checkout-phone" className="text-muted-foreground">
                    {t.cart.paynetPhoneLabel}{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="checkout-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t.cart.paynetPhonePlaceholder}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-3">
                <Checkbox
                  id="checkout-terms"
                  checked={termsAccepted}
                  onCheckedChange={(v) => setTermsAccepted(v === true)}
                  aria-required
                />
                <label htmlFor="checkout-terms" className="cursor-pointer text-sm leading-snug text-muted-foreground">
                  {t.cart.paynetTermsBefore}
                  <Link to="/termeni-si-conditii" className="text-primary underline underline-offset-2">
                    {t.footer.terms}
                  </Link>
                  {t.cart.paynetTermsBetween}
                  <Link to="/politica-de-confidentialitate" className="text-primary underline underline-offset-2">
                    {t.footer.privacy}
                  </Link>
                  {t.cart.paynetTermsAfter}
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  type="button"
                  disabled={checkoutBusy || !termsAccepted}
                  className="h-12 flex-1 rounded-full gradient-red font-display uppercase tracking-wider text-primary-foreground hover:opacity-90 disabled:opacity-50 sm:flex-none sm:px-10"
                  onClick={handleCheckout}
                >
                  {checkoutBusy ? t.cart.paynetBusy : t.cart.checkout}
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full px-6 sm:flex-none">
                  <Link to={{ pathname: "/", hash: "contact" }}>{t.cart.contactInstead}</Link>
                </Button>
              </div>

              <Button asChild variant="ghost" className="mt-6 h-12 w-full rounded-full text-muted-foreground">
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
