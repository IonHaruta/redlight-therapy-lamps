import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const PaynetCancelPage = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-lg px-4 pb-16 pt-28">
        <h1 className="font-display text-3xl font-bold text-foreground">{t.paynetReturn.cancelTitle}</h1>
        <p className="mt-4 text-muted-foreground">{t.paynetReturn.cancelBody}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full px-8">
            <Link to="/cos">{t.cart.title}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-8">
            <Link to="/">{t.legal.backHome}</Link>
          </Button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PaynetCancelPage;
