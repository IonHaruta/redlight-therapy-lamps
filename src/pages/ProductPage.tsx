import { useParams, Link } from "react-router-dom";
import { getProductBySlug, products } from "@/data/products";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Zap, Award, Star } from "lucide-react";
import { useState } from "react";

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Produs negăsit</h1>
          <Link to="/" className="text-primary hover:underline">Înapoi la pagina principală</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-display text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden bg-secondary aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold uppercase text-foreground mb-1">
                {product.name}
              </h1>
              <p className="font-display text-lg text-primary mb-3">
                {product.subtitle}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">(126 recenzii)</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Model selector */}
              <div className="mb-8">
                <p className="font-display text-sm uppercase tracking-wider text-foreground mb-3">
                  Alege modelul
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/produs/${p.slug}`}
                      className={`font-display text-sm uppercase tracking-wide text-center py-3 rounded-full border transition-colors ${
                        p.slug === product.slug
                          ? "gradient-red text-primary-foreground border-transparent"
                          : "border-primary/50 text-primary hover:bg-primary/10"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Qty + Add to cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-full">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    −
                  </button>
                  <span className="px-3 font-display text-foreground">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 gradient-red text-primary-foreground font-display uppercase tracking-widest text-sm py-6 rounded-full hover:opacity-90"
                >
                  {product.price} ADAUGĂ ÎN COȘ →
                </Button>
              </div>

              {/* Cert badges */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Award, label: "CE Clasa II", sub: "Dispozitiv Medical" },
                  { icon: Zap, label: "Zero EMF", sub: "La distanță recomandată" },
                  { icon: ShieldCheck, label: "ETL / UL", sub: "Siguranță electrică" },
                ].map((cert) => (
                  <div key={cert.label} className="flex flex-col items-center text-center p-3 rounded-lg border border-border bg-card">
                    <cert.icon className="w-6 h-6 text-primary mb-1" />
                    <span className="font-display text-xs font-bold uppercase text-foreground">{cert.label}</span>
                    <span className="text-[10px] text-muted-foreground">{cert.sub}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Specs table */}
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="bg-secondary px-4 py-3">
                  <h3 className="font-display text-sm uppercase tracking-wider text-foreground">Specificații tehnice</h3>
                </div>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <div
                    key={key}
                    className={`flex justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                    }`}
                  >
                    <span className="text-muted-foreground">{key}</span>
                    <span className="text-foreground font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ProductPage;
