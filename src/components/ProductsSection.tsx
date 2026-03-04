import ProductCard from "./ProductCard";
import { products } from "@/data/products";

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
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
