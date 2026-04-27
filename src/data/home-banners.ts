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
    id: "therapy-masks",
    label: "Therapy Masks",
    subtitle: "Advanced LED Light Therapy Masks",
    youtubeId: "U2JulLyhQ6U",
    to: "/masti",
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
