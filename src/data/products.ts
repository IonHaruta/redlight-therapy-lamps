import productBiomax from "@/assets/product-biomax.jpg";
import productBio from "@/assets/product-bio.jpg";

export interface ProductData {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export const products: ProductData[] = [
  {
    slug: "biomax-900",
    name: "BIOMAX 900",
    subtitle: "Panou full-body de mare putere",
    description:
      "Generația a 9-a cu spectru avansat R+|NIR+ pe 7 lungimi de undă. Același dispozitiv medical de grad clinic folosit în combinațiile noastre multi-panou. Mai multe panouri pot fi combinate pentru setup-ul terapeutic ideal.",
    price: "€2.490",
    priceValue: 2490,
    image: productBiomax,
    features: [
      "Spectru 7 lungimi de undă",
      "Putere de ieșire: 200mW/cm²",
      "Acoperire corp întreg",
      "Control digital integrat",
      "300 LED-uri de mare putere",
      "Garanție 3 ani",
    ],
    specs: {
      "Lungimi de undă": "7",
      Dimensiuni: "91 x 30 x 8 cm",
      Consum: "380W / 490W",
      "Număr LED-uri": "300",
      Greutate: "15 kg",
      Garanție: "3 Ani",
      "Durată de viață": "100.000 ore",
      "Emisie EMF": "0.0 µT @ 10cm",
      "Recomandat pentru": "Corp întreg",
    },
  },
  {
    slug: "bio-300",
    name: "BIO 300",
    subtitle: "Panou compact pentru tratament țintit",
    description:
      "Panou compact ideal pentru terapie focalizată pe zone specifice ale corpului. Design portabil, perfect pentru față, articulații și zone locale de tratament.",
    price: "€890",
    priceValue: 890,
    image: productBio,
    features: [
      "Spectru 3 lungimi de undă",
      "Design compact și portabil",
      "Ideal pentru față și articulații",
      "Montare pe ușă inclusă",
      "100 LED-uri",
      "Garanție 3 ani",
    ],
    specs: {
      "Lungimi de undă": "3",
      Dimensiuni: "48 x 23 x 8 cm",
      Consum: "180W",
      "Număr LED-uri": "100",
      Greutate: "5 kg",
      Garanție: "3 Ani",
      "Durată de viață": "100.000 ore",
      "Emisie EMF": "0.0 µT @ 10cm",
      "Recomandat pentru": "Tratament țintit",
    },
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
