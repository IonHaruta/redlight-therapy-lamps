import type { Locale, MaskMedia } from "./masks";

export interface AccessoryTranslation {
  title: string;
  modelShort: string;
  subtitle: string;
  description: string;
}

export interface AccessoryProduct {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  media: MaskMedia[];
  translations: Record<Locale, AccessoryTranslation>;
}

export const accessoryProducts: AccessoryProduct[] = [
  {
    slug: "ms",
    name: "MS",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/MS/ms-1.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-2.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-3.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-4.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-5.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-6.png", alt: "MS" },
      { type: "image", path: "accesorii/MS/ms-7.jpg", alt: "MS" },
    ],
    translations: {
      ro: {
        title: "MS",
        modelShort: "MS",
        subtitle: "Detalii în curând",
        description:
          "Descrierea completă în română va fi adăugată. Poți selecta alte accesorii din gamă sau ne poți scrie pentru detalii.",
      },
      ru: {
        title: "MS",
        modelShort: "MS",
        subtitle: "Описание скоро",
        description:
          "Полное описание на русском будет добавлено позже. Выберите другую модель из линейки или напишите нам.",
      },
    },
  },
  {
    slug: "rd30",
    name: "RD30",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/RD/rd30-1.png", alt: "RD30" },
      { type: "image", path: "accesorii/RD/rd30-2.png", alt: "RD30" },
      { type: "image", path: "accesorii/RD/rd30-3.png", alt: "RD30" },
      { type: "image", path: "accesorii/RD/rd30-4.png", alt: "RD30" },
      { type: "image", path: "accesorii/RD/rd30-5.png", alt: "RD30" },
      { type: "image", path: "accesorii/RD/rd30-6.png", alt: "RD30" },
    ],
    translations: {
      ro: {
        title: "RD30",
        modelShort: "RD30",
        subtitle: "Detalii în curând",
        description:
          "Descrierea completă în română va fi adăugată. Poți selecta alte accesorii din gamă sau ne poți scrie pentru detalii.",
      },
      ru: {
        title: "RD30",
        modelShort: "RD30",
        subtitle: "Описание скоро",
        description:
          "Полное описание на русском будет добавлено позже. Выберите другую модель из линейки или напишите нам.",
      },
    },
  },
  {
    slug: "xl",
    name: "XL",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/XL/XL-1.jpeg", alt: "XL" },
      { type: "image", path: "accesorii/XL/XL-2.jpg", alt: "XL" },
      { type: "image", path: "accesorii/XL/XL-3.jpg", alt: "XL" },
      { type: "image", path: "accesorii/XL/XL-4.jpg", alt: "XL" },
      { type: "image", path: "accesorii/XL/XL-5.jpg", alt: "XL" },
      { type: "image", path: "accesorii/XL/XL-6.jpg", alt: "XL" },
    ],
    translations: {
      ro: {
        title: "XL",
        modelShort: "XL",
        subtitle: "Detalii în curând",
        description:
          "Descrierea completă în română va fi adăugată. Poți selecta alte accesorii din gamă sau ne poți scrie pentru detalii.",
      },
      ru: {
        title: "XL",
        modelShort: "XL",
        subtitle: "Описание скоро",
        description:
          "Полное описание на русском будет добавлено позже. Выберите другую модель из линейки или напишите нам.",
      },
    },
  },
  {
    slug: "gp",
    name: "GP",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/GP/gp-1.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-2.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-3.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-4.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-5.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-6.png", alt: "GP" },
      { type: "image", path: "accesorii/GP/gp-7.png", alt: "GP" },
    ],
    translations: {
      ro: {
        title: "GP",
        modelShort: "GP",
        subtitle: "Detalii în curând",
        description:
          "Descrierea completă în română va fi adăugată. Poți selecta alte accesorii din gamă sau ne poți scrie pentru detalii.",
      },
      ru: {
        title: "GP",
        modelShort: "GP",
        subtitle: "Описание скоро",
        description:
          "Полное описание на русском будет добавлено позже. Выберите другую модель из линейки или напишите нам.",
      },
    },
  },
  {
    slug: "fs",
    name: "FS",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/FS/fs-1.png", alt: "FS" },
      { type: "image", path: "accesorii/FS/fs-2.png", alt: "FS" },
      { type: "image", path: "accesorii/FS/fs-3.png", alt: "FS" },
      { type: "image", path: "accesorii/FS/fs-4.png", alt: "FS" },
      { type: "image", path: "accesorii/FS/fs-5.png", alt: "FS" },
      { type: "image", path: "accesorii/FS/fs-6.png", alt: "FS" },
    ],
    translations: {
      ro: {
        title: "FS",
        modelShort: "FS",
        subtitle: "Detalii în curând",
        description:
          "Descrierea completă în română va fi adăugată. Poți selecta alte accesorii din gamă sau ne poți scrie pentru detalii.",
      },
      ru: {
        title: "FS",
        modelShort: "FS",
        subtitle: "Описание скоро",
        description:
          "Полное описание на русском будет добавлено позже. Выберите другую модель из линейки или напишите нам.",
      },
    },
  },
];

export const accessoryBanners: AccessoryProduct[] = accessoryProducts;

export function getAccessoryBySlug(slug: string): AccessoryProduct | undefined {
  return accessoryProducts.find((a) => a.slug === slug);
}
