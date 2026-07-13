import type { To } from "react-router-dom";

export interface HomeProductBanner {
  id: string;
  label: string;
  subtitle: string;
  youtubeId: string;
  videoPath?: string;
  imagePath?: string;
  /** Implicit: cover. Folosește contain pentru produse pe fundal transparent/negru. */
  imageFit?: "cover" | "contain";
  /** Clase Tailwind pentru fundalul cardului (ex. gradient deschis). */
  cardBackgroundClass?: string;
  /** Clase Tailwind pentru overlay-ul peste media. */
  overlayClass?: string;
  /** Strat decorativ în spatele imaginii (ex. glow). */
  imageBackdropClass?: string;
  to: To;
}

/** Etichete demo în UI; linkurile duc la produsele reale din magazin. */
export const homeProductBanners: HomeProductBanner[] = [
  {
    id: "therapy-masks",
    label: "Therapy Masks",
    subtitle: "Advanced LED Light Therapy Masks",
    youtubeId: "U2JulLyhQ6U",
    imagePath: "masti/main-mask.jpg",
    to: "/masti",
  },
  {
    id: "lamps-accessories",
    label: "Lamps & Accessories",
    subtitle: "Lampi LED FS7 · RD Pro 3000",
    youtubeId: "YG-svcr1u8c",
    imagePath: "lampi/main-lamp.jpg",
    to: "/lampi",
  },
  {
    id: "pat",
    label: "Pat",
    subtitle: "Pat pentru terapie cu lumină roșie",
    youtubeId: "YG-svcr1u8c",
    imagePath: "pat/M7.png",
    imageFit: "contain",
    cardBackgroundClass:
      "bg-gradient-to-br from-neutral-900 via-[#1a1412] to-neutral-950",
    imageBackdropClass:
      "bg-[radial-gradient(ellipse_100%_85%_at_50%_40%,rgba(220,38,38,0.35)_0%,rgba(69,10,10,0.2)_45%,transparent_75%)]",
    overlayClass: "bg-gradient-to-t from-black/85 via-black/45 to-transparent",
    to: "/pat",
  },
];
