import { ShieldCheck, Waves, Award } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Putere Maximă",
    description:
      "Dispozitivele noastre emit cea mai mare putere de iradiență din industrie. Rezultate mai rapide prin penetrare mai profundă și putere crescută.",
  },
  {
    icon: Waves,
    title: "Spectru Avansat",
    description:
      "Tehnologie exclusivă R+|NIR+ cu spectru multi-undă pe 7 lungimi de undă diferite de lumină roșie și infraroșie pentru terapie de nivel superior.",
  },
  {
    icon: Award,
    title: "Calitate Superioară",
    description:
      "Dispozitive medicale certificate CE Clasa II, conforme cu ETL/UL și ROHS. Garanție de 3 ani pe toate produsele.",
  },
];

const DifferentiatorSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-display text-lg md:text-xl text-muted-foreground">
            Suntem <span className="font-bold text-primary">standardul clinic</span> în terapia cu lumină.
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground">
            <span className="text-primary">Diferența</span>{" "}
            <span className="text-foreground">RedLightTherapy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <card.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-2">
                {card.title}
              </h3>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
