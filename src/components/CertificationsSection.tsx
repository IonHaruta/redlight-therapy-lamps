import { Shield, Zap, Award, HeartPulse } from "lucide-react";

const certs = [
  {
    icon: Award,
    label: "CE Clasa II",
    sub: "Dispozitiv Medical",
  },
  {
    icon: Zap,
    label: "Zero EMF",
    sub: "La distanța recomandată",
  },
  {
    icon: Shield,
    label: "ETL / UL",
    sub: "Siguranță electrică",
  },
  {
    icon: HeartPulse,
    label: "ROHS",
    sub: "Conform standarde",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground">
            Certificări & <span className="text-primary">Standarde</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.label}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card"
            >
              <cert.icon className="w-10 h-10 text-primary mb-3" />
              <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {cert.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {cert.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
