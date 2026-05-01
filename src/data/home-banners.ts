import type { To } from "react-router-dom";

export interface HomeProductBanner {
  id: string;
  label: string;
  subtitle: string;
  youtubeId: string;
  videoPath?: string;
  to: To;
}

/** Etichete demo în UI; linkurile duc la produsele reale din magazin. */
export const homeProductBanners: HomeProductBanner[] = [
  {
    id: "therapy-masks",
    label: "Therapy Masks",
    subtitle: "Advanced LED Light Therapy Masks",
    youtubeId: "U2JulLyhQ6U",
    videoPath: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora.mp4",
    to: "/masti",
  },
  {
    id: "lamps-accessories",
    label: "Lamps & Accessories",
    subtitle: "Lampi LED FS7 · RD Pro 3000",
    youtubeId: "YG-svcr1u8c",
    videoPath: "lampi/RDPro3000-FS7/RDPro3000-FS7-video.mp4",
    to: "/lampi",
  },
  {
    id: "pat",
    label: "Pat",
    subtitle: "Pat pentru terapie cu lumină roșie",
    youtubeId: "YG-svcr1u8c",
    videoPath: "pat/apex-video.mp4",
    to: "/pat",
  },
];
