import { Link } from "react-router-dom";
import productBiomax from "@/assets/product-biomax.jpg";
import productBio from "@/assets/product-bio.jpg";

const items = [
  {
    id: "biomax-900",
    title: "BIOMAX 900",
    description: "Panou full-body de mare putere",
    image: productBiomax,
    to: "/produs/biomax-900",
    isLink: true,
  },
  {
    id: "bio-300",
    title: "BIO 300",
    description: "Panou compact pentru tratament țintit",
    image: productBio,
    to: "/produs/bio-300",
    isLink: true,
  },
  {
    id: "ecosystem",
    title: "Ecosistemul Red Light",
    description: "Descoperă gama completă de produse",
    image: productBiomax,
    to: "#produse",
    isLink: false,
  },
];

const ProductVideosSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Întâlnește Ecosistemul Red Light Therapy
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Produse care fac diferența în terapia cu lumină roșie.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const cardContent = (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-white/90 group-hover:underline">
                    Descoperă →
                  </span>
                </div>
              </>
            );
            return item.isLink ? (
              <Link
                key={item.id}
                to={item.to}
                className="group relative aspect-video rounded-xl overflow-hidden bg-muted block"
              >
                {cardContent}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.to}
                className="group relative aspect-video rounded-xl overflow-hidden bg-muted block"
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductVideosSection;
