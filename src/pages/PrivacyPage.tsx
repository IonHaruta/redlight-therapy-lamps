import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const PrivacyPage = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.legal.backHome}
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.legal.privacyTitle}
          </h1>
          <div className="max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>{t.legal.privacyP1}</p>
            <h2
              id="module-cookies"
              className="text-foreground text-base font-semibold scroll-mt-28 pt-2"
            >
              {t.legal.cookiesTitle}
            </h2>
            <p>{t.legal.cookiesP}</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPage;
