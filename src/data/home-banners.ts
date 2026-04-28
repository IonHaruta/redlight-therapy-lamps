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
    id: "lamps-accessories",
    label: "Lamps & Accessories",
    subtitle: "Lampi LED FS7 · RD Pro 3000",
    youtubeId: "YG-svcr1u8c",
    to: "/lampi",
  },
  {
    id: "produs-3",
    label: "Produs 3",
    subtitle: "Toată gama de produse",
    youtubeId: "U2JulLyhQ6U",
    to: { pathname: "/", hash: "produse" },
  },
];
