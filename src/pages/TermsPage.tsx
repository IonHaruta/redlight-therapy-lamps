import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const TermsPage = () => {
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
            Termeni și condiții
          </h1>
          <div className="max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              Acest document descrie condițiile generale de utilizare a site-ului și de achiziție a
              produselor Red Light Therapy. Conținutul complet poate fi actualizat în funcție de
              politica comercială și cerințele legale aplicabile în Republica Moldova.
            </p>
            <p>
              Pentru întrebări legate de comenzi, livrare sau garanție, ne puteți contacta la adresa
              indicată în subsolul site-ului.
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default TermsPage;
