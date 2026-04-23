import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const PrivacyPage = () => {
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
            Înapoi la pagina principală
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Politică de confidențialitate
          </h1>
          <div className="max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              Respectăm confidențialitatea datelor dumneavoastră personale. Această politică descrie
              în linii mari ce tipuri de informații pot fi colectate prin site și în ce scopuri pot
              fi folosite, în conformitate cu practicile uzuale pentru magazine online.
            </p>
            <h2 id="module-cookies" className="text-foreground text-base font-semibold scroll-mt-28 pt-2">
              Module cookie
            </h2>
            <p>
              Site-ul poate folosi cookie-uri esențiale pentru funcționare și, după caz, cookie-uri
              analitice. Puteți gestiona preferințele din setările browserului dumneavoastră.
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPage;
