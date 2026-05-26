import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const runRef = useRef(false);

  useEffect(() => {
    const invoice = searchParams.get("invoice");
    if (!invoice || runRef.current) return;
    runRef.current = true;

    let cancelled = false;

    void (async () => {
      for (let attempt = 0; attempt < 6 && !cancelled; attempt++) {
        try {
          const res = await fetch("/api/paynet/verify-paid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ invoice }),
          });
          const j = (await res.json()) as {
            ok?: boolean;
            reason?: string;
            duplicate?: boolean;
          };
          if (j.ok === true || j.duplicate === true) {
            clearCart();
            break;
          }
          if (j.reason === "not_paid" && attempt < 5) {
            await new Promise((r) => setTimeout(r, 2500));
            continue;
          }
          break;
        } catch {
          break;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [searchParams, clearCart]);

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
