import { Zap, Heart, Sun, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Recuperare Rapidă",
    description: "Accelerează recuperarea musculară după antrenamente intense și reduce inflamația.",
  },
  {
    icon: Heart,
    title: "Sănătate Celulară",
    description: "Stimulează producția de ATP la nivel celular, îmbunătățind funcția mitocondrială.",
  },
  {
    icon: Sun,
    title: "Rejuvenare Piele",
    description: "Stimulează producția de colagen și elastină pentru o piele mai tânără și sănătoasă.",
  },
  {
    icon: Shield,
    title: "Certificat Medical",
    description: "Dispozitive medicale certificate CE, conforme cu standardele internaționale.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficii" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            De ce Red Light Therapy?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Beneficii
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full gradient-red flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
