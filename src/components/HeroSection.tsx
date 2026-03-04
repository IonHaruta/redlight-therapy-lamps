import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-display text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-4">
          Cea mai avansată tehnologie
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-4">
          <span className="text-primary text-glow">Red Light</span>
          <br />
          <span className="text-foreground">Therapy</span>
        </h1>
        <p className="font-display text-lg md:text-2xl uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Dispozitive medicale de calitate superioară
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gradient-red text-primary-foreground font-display uppercase tracking-widest text-sm px-10 py-6 box-glow hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="#produse">Vezi Produsele</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 font-display uppercase tracking-widest text-sm px-10 py-6"
            asChild
          >
            <a href="#beneficii">Află Mai Multe</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
