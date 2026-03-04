import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl font-bold tracking-wider text-primary mb-4">
              REDLIGHT<span className="text-foreground">THERAPY</span>
              <span className="text-muted-foreground text-sm">.md</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Distribuitor autorizat de dispozitive medicale pentru terapia cu lumină roșie în Republica Moldova.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Navigare</h4>
            <div className="space-y-2">
              {["Produse", "Beneficii", "Despre Noi", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@redlighttherapy.md
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +373 XX XXX XXX
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Chișinău, Republica Moldova
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs">
          © 2026 RedLightTherapy.md — Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
