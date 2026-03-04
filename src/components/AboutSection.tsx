const timeline = [
  { year: "2010", text: "Compania a fost fondată ca pionier în tehnologia LED de mare putere." },
  { year: "2013", text: "Dezvoltarea celui mai puternic panou LED din industrie." },
  { year: "2015", text: "Prima companie care aplică tehnologia terapeutică umană în panouri LED de mare putere." },
  { year: "2018", text: "Lansarea seriei BIOMAX — noua generație de panouri terapeutice." },
  { year: "2019", text: "Primul spectru avansat R+|NIR+ multi-undă cu 5 benzi de lumină." },
  { year: "2020", text: "Obținerea statutului de Dispozitiv Medical FDA Clasa II." },
  { year: "2021", text: "Dezvoltarea primului sistem Total Control cu ecran tactil OLED." },
  { year: "2023", text: "Lansarea spectrului cu 7 lungimi de undă cu IR îmbunătățit." },
  { year: "2025", text: "Lansarea BIOMAX PRO — cea mai mare inovație în designul luminilor terapeutice." },
];

const highlights = [
  { stat: "15+", label: "Ani de experiență" },
  { stat: "7", label: "Lungimi de undă" },
  { stat: "3 Ani", label: "Garanție completă" },
  { stat: "FDA", label: "Clasa II certificat" },
];

const AboutSection = () => {
  return (
    <section id="despre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Cine suntem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Despre <span className="text-primary">Noi</span>
          </h2>
        </div>

        {/* Why us */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Pionierul original în Red Light Therapy. Încă standardul de referință.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            De peste 15 ani, tehnologia noastră definește categoria terapiei cu lumină roșie și infraroșu apropiat. 
            Continuăm să ridicăm ștacheta prin sisteme de mare putere, control avansat al spectrului și standarde 
            de siguranță verificate. Folosite de profesioniști medicali, universități și agenții guvernamentale din întreaga lume.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {highlights.map((h) => (
            <div key={h.label} className="text-center p-6 rounded-lg border border-border bg-card">
              <span className="font-display text-3xl md:text-4xl font-bold text-primary">{h.stat}</span>
              <p className="text-muted-foreground text-sm mt-2">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold uppercase text-foreground text-center mb-12">
            Drumul nostru spre <span className="text-primary">succes</span>
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 z-10" />
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "pl-10" : "pr-10 text-right"}`}>
                  <span className="font-display text-xl font-bold text-primary">{item.year}</span>
                </div>
                {/* Mobile layout */}
                <div className="md:hidden pl-10">
                  <span className="font-display text-lg font-bold text-primary">{item.year}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
