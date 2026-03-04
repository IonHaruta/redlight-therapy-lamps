import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ProductCard = ({ slug, name, description, price, image, features }: ProductCardProps) => {
  return (
    <Link
      to={`/produs/${slug}`}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:box-glow block"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <ul className="space-y-1 mb-5">
          {features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-primary">{price}</span>
          <Button
            className="gradient-red text-primary-foreground font-display uppercase tracking-widest text-xs hover:opacity-90"
            tabIndex={-1}
          >
            Vezi Detalii
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
