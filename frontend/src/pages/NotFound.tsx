import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const NotFound = () => {
  const location = useLocation();
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 pt-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t.notFound.code}</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t.notFound.message}</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            {t.notFound.home}
          </Link>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFound;
