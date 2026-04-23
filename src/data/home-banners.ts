import type { To } from "react-router-dom";

export interface HomeProductBanner {
  id: string;
  label: string;
  subtitle: string;
  youtubeId: string;
  to: To;
}

/** Etichete demo în UI; linkurile duc la produsele reale din magazin. */
export const homeProductBanners: HomeProductBanner[] = [
  {
    id: "produs-1",
    label: "Produs 1",
    subtitle: "BIOMAX 900 · panou full-body",
    youtubeId: "U2JulLyhQ6U",
    to: "/produs/biomax-900",
  },
  {
    id: "produs-2",
    label: "Produs 2",
    subtitle: "BIO 300 · tratament țintit",
    youtubeId: "YG-svcr1u8c",
    to: "/produs/bio-300",
  },
  {
    id: "produs-3",
    label: "Produs 3",
    subtitle: "Toată gama de produse",
    youtubeId: "U2JulLyhQ6U",
    to: { pathname: "/", hash: "produse" },
  },
];
