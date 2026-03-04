import ProductCard from "./ProductCard";
import productBiomax from "@/assets/product-biomax.jpg";
import productBio from "@/assets/product-bio.jpg";

const products = [
  {
    name: "BIOMAX 900",
    description: "Panou full-body de mare putere cu spectru avansat R+|NIR+ pentru terapie completă.",
    price: "€2.490",
    image: productBiomax,
    features: [
      "Spectru 7 lungimi de undă",
      "Putere de ieșire: 200mW/cm²",
      "Acoperire corp întreg",
      "Control digital integrat",
    ],
  },
  {
    name: "BIO 300",
    description: "Panou compact ideal pentru terapie focalizată pe zone specifice ale corpului.",
    price: "€890",
    image: productBio,
    features: [
      "Spectru 3 lungimi de undă",
      "Design compact și portabil",
      "Ideal pentru față și articulații",
      "Montare pe ușă inclusă",
    ],
  },
];

const ProductsSection = () => {
  return (
    <section id="produse" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Colecția noastră
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Produse
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
