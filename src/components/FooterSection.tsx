import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const base = import.meta.env.BASE_URL;

const FooterSection = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <footer
      id="contact"
      className="bg-background border-t border-border scroll-mt-20"
    >
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="max-w-md md:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex flex-wrap items-baseline gap-0 font-display text-xl md:text-2xl font-bold tracking-wide mb-4 hover:opacity-90 transition-opacity"
            >
              <span className="text-primary">REDLIGHT</span>
              <span className="text-foreground">THERAPY</span>
              <span className="text-muted-foreground text-base md:text-lg font-semibold">
                .md
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors shrink-0"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors shrink-0"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <img
                src={`${base}visa.png`}
                alt="Visa"
                className="h-7 w-auto max-w-[64px] object-contain shrink-0 opacity-90"
              />
              <img
                src={`${base}paynet.png`}
                alt="Paynet"
                className="h-7 w-auto max-w-[90px] object-contain shrink-0 opacity-90"
              />
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  to={{ pathname: "/", hash: "produse" }}
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.products}
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/", hash: "beneficii" }}
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.benefits}
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/", hash: "despre" }}
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/", hash: "contact" }}
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/termeni-si-conditii" className="hover:text-primary transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-confidentialitate"
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-confidentialitate#module-cookies"
                  className="hover:text-primary transition-colors"
                >
                  {t.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@redlighttherapy.md"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@redlighttherapy.md
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+373XXXXXXXX" className="hover:text-primary transition-colors">
                  +373 XX XXX XXX
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{t.footer.location}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-12 pt-8 border-t border-border">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
