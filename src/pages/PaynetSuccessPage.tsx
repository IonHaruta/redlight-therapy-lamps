import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { getSiteCopy } from "@/i18n/site";

const PaynetSuccessPage = () => {
  const { locale } = useLocale();
  const { clearCart } = useCart();
  const t = getSiteCopy(locale);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-lg px-4 pb-16 pt-28">
        <h1 className="font-display text-3xl font-bold text-foreground">{t.paynetReturn.successTitle}</h1>
        <p className="mt-4 text-muted-foreground">{t.paynetReturn.successBody}</p>
        <Button asChild className="mt-8 h-12 rounded-full px-8">
          <Link to="/">{t.legal.backHome}</Link>
        </Button>
      </main>
      <FooterSection />
    </div>
  );
};

export default PaynetSuccessPage;
