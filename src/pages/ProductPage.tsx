import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { getProductBySlug, products } from "@/data/products";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Zap, Award } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const ProductPage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const { addItem } = useCart();
  const product = getProductBySlug(slug || "");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center px-4 pt-16">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">{t.productPage.notFound}</h1>
            <Link to="/" className="text-primary hover:underline">
              {t.productPage.backHome}
            </Link>
          </div>
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
            {t.productPage.back}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-lg overflow-hidden bg-secondary aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold uppercase text-foreground mb-1">
                {product.name}
              </h1>
              <p className="font-display text-lg text-primary mb-3">{product.subtitle}</p>

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <p className="font-display text-sm uppercase tracking-wider text-foreground mb-3">
                  {t.productPage.chooseModel}
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

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-full">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    −
                  </button>
                  <span className="px-3 font-display text-foreground">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button
                  type="button"
                  size="lg"
                  className="flex-1 gradient-red text-primary-foreground font-display uppercase tracking-widest text-sm py-6 rounded-full hover:opacity-90"
                  onClick={() => {
                    addItem({
                      kind: "lamp",
                      slug: product.slug,
                      name: product.name,
                      price: product.price,
                      priceValue: product.priceValue,
                      thumb: product.image,
                      qty,
                    });
                    toast.success(t.cart.added);
                  }}
                >
                  {product.price} {t.productPage.addToCart}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Award, label: t.productPage.certMedical, sub: t.productPage.certMedicalSub },
                  { icon: Zap, label: t.productPage.certEmf, sub: t.productPage.certEmfSub },
                  {
                    icon: ShieldCheck,
                    label: t.productPage.certSafety,
                    sub: t.productPage.certSafetySub,
                  },
                ].map((cert) => (
                  <div
                    key={cert.label}
                    className="flex flex-col items-center text-center p-3 rounded-lg border border-border bg-card"
                  >
                    <cert.icon className="w-6 h-6 text-primary mb-1" />
                    <span className="font-display text-xs font-bold uppercase text-foreground">
                      {cert.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{cert.sub}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border border-border rounded-lg overflow-hidden">
                <div className="bg-secondary px-4 py-3">
                  <h3 className="font-display text-sm uppercase tracking-wider text-foreground">
                    {t.productPage.specsHeading}
                  </h3>
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
