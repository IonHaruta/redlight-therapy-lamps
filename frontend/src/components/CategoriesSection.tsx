import { Briefcase, Home, Dumbbell } from "lucide-react";

const categories = [
  {
    id: "profesional",
    title: "Profesional",
    description: "Dispozitive pentru clinici, cabinete și spa-uri. Putere maximă și fiabilitate.",
    icon: Briefcase,
    href: "#produse",
  },
  {
    id: "casa",
    title: "Pentru casă",
    description: "Soluții compacte pentru uz personal. Terapie de calitate acasă.",
    icon: Home,
    href: "#produse",
  },
  {
    id: "fitness",
    title: "Fitness / Spa",
    description: "Recuperare rapidă, relaxare și îmbunătățire a performanței.",
    icon: Dumbbell,
    href: "#produse",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Categorii
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Alege pentru nevoile tale
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Explorează →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
