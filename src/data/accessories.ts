import type { Locale, MaskMedia } from "./masks";

export interface AccessoryDetailBand {
  imagePath: string;
  /** `true` = text stânga, imagine dreapta (desktop). */
  mediaOnRight?: boolean;
  title: string;
  bullets: { title: string; body: string }[];
}

export interface AccessoryTranslation {
  title: string;
  modelShort: string;
  subtitle: string;
  description: string;
  /** Titlu secțiune (ex. „Caracteristici ale produsului”). */
  featuresTitle?: string;
  /** Blocuri titlu + descriere afișate sub descrierea principală. */
  features?: { title: string; body: string }[];
  /** Tabel specificații (rânduri duplicate etichetă permise). */
  specsTableTitle?: string;
  specsColumnFeature?: string;
  specsColumnValue?: string;
  specsRows?: { label: string; value: string }[];
  /** Benzi imagine + text sub tabel (ex. jos-1…3). */
  detailBands?: AccessoryDetailBand[];
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
    name: "RMS",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "image", path: "accesorii/MS/ms-1.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-2.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-3.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-4.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-5.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-6.png", alt: "REDDOT RMS motorizat" },
      { type: "image", path: "accesorii/MS/ms-7.jpg", alt: "REDDOT RMS motorizat" },
    ],
    translations: {
      ro: {
        title:
          "Suport motorizat REDDOT cu înălțime reglabilă pentru panouri de terapie",
        modelShort: "RMS",
        subtitle: "",
        description:
          "Suportul motorizat (model: RMS) este un accesoriu premium conceput pentru a spori confortul și flexibilitatea utilizării panourilor de terapie cu lumină roșie REDDOT. Conceput pentru confort, durabilitate și precizie, suportul motorizat permite reglarea ușoară a înălțimii și unghiului panoului, fiind potrivit pentru o varietate de aplicații, inclusiv clinici, săli de sport și utilizare acasă. Compatibil cu o varietate de modele de panouri, suportul RMS asigură o terapie cu lumină roșie stabilă, sigură și eficientă.",
        featuresTitle: "Caracteristici ale produsului",
        features: [
          {
            title: "Reglare motorizată a înălțimii",
            body: "Interval de reglare a înălțimii: 80 cm până la 160 cm folosind un mecanism motorizat.",
          },
          {
            title: "Reglare a unghiului",
            body: "Permite reglarea unghiului orizontal și vertical pentru sesiuni de terapie cu lumină roșie țintite și pentru întregul corp.",
          },
          {
            title: "Construcție puternică și stabilă",
            body: "Rezistă la o sarcină maximă de 60 kg, putând acomoda chiar și cele mai mari panouri.",
          },
          {
            title: "Compatibilitate largă",
            body: "Compatibil cu următoarele modele de panouri: RD1500 / RDMAX / RD6000 / RDPRO1500 / RDPRO3000 / RDPRO6000 / RDPRO1500-FS / RDPRO3000-FS / RDPRO6000-FS.",
          },
        ],
        specsTableTitle: "Specificații și parametri",
        specsColumnFeature: "Specificație",
        specsColumnValue: "Detalii",
        specsRows: [
          { label: "Nume model", value: "RMS" },
          {
            label: "Interval de înălțime",
            value: "Reglabil de la 80 cm la 160 cm.",
          },
          { label: "Capacitate de încărcare", value: "60 kg" },
          { label: "Dimensiuni (cm)", value: "85 x 70 x 80" },
          { label: "Material", value: "Fier" },
          {
            label: "Panouri compatibile",
            value:
              "RD1500, RDMAX, RD6000, RDPro1500, RDPro3000, RDPro6000, RDPro1500-FS, RDPro3000-FS, RDPro6000-FS",
          },
          { label: "Mediu de funcționare", value: "-10°~40°C" },
          { label: "Greutate brută (GW)", value: "38 kg" },
          {
            label: "Accesorii incluse",
            value:
              "1) Suport (12 buc.), 2) Manual (13 buc.), 3) Accesorii de montare",
          },
          { label: "Mediu de funcționare (extins)", value: "-10°~45°C" },
        ],
        detailBands: [
          {
            imagePath: "accesorii/MS/ms-jos-1.png",
            mediaOnRight: false,
            title: "De ce să alegeți un stativ motorizat?",
            bullets: [
              {
                title: "Experiență terapeutică îmbunătățită",
                body: "Poziționează perfect panoul cu lumină roșie pentru o expunere optimă, asigurând un efect terapeutic maxim.",
              },
              {
                title: "Durabilitate în care puteți avea încredere",
                body: "Fabricat din materiale de înaltă calitate, care rezistă utilizării repetate atât în medii profesionale, cât și acasă.",
              },
              {
                title: "Compatibilitate universală",
                body: "Funcționează perfect cu o gamă largă de panouri REDDOT, extinzând capacitățile sistemului dumneavoastră.",
              },
              {
                title: "Ușurință în utilizare",
                body: "Datorită mecanismului motorizat și ajustărilor flexibile, panoul de terapie poate fi poziționat cu ușurință pentru orice tratament.",
              },
            ],
          },
          {
            imagePath: "accesorii/MS/ms-jos-2.png",
            mediaOnRight: true,
            title: "Aplicații",
            bullets: [
              {
                title: "Clinici",
                body: "Ideal pentru terapeuții profesioniști care necesită ajustări flexibile și precise în timpul tratamentului.",
              },
              {
                title: "Săli de sport",
                body: "Ideal pentru recuperarea post-antrenament și relaxarea musculară.",
              },
              {
                title: "Utilizare acasă",
                body: "O soluție convenabilă și durabilă pentru unități individuale de terapie cu lumină roșie.",
              },
            ],
          },
          {
            imagePath: "accesorii/MS/ms-jos-3.jpg",
            mediaOnRight: true,
            title: "Serviciu Clienți și Garanție",
            bullets: [
              {
                title: "Garanție",
                body: "3 ani de service complet pentru liniștea dumneavoastră.",
              },
              {
                title: "Asistență",
                body: "O echipă dedicată de servicii clienți vă va ajuta cu asamblarea, depanarea și va răspunde la întrebări generale.",
              },
            ],
          },
        ],
      },
      ru: {
        title:
          "Подъемная стойка REDDOT с электроприводом — регулируемая высота для терапевтических панелей",
        modelShort: "RMS",
        subtitle: "",
        description:
          "Моторизованная стойка (модель: RMS) — это премиальный аксессуар, разработанный для повышения удобства и гибкости использования панелей светотерапии красным светом REDDOT. Разработанная для удобства, долговечности и точности, моторизованная стойка позволяет легко регулировать высоту и угол наклона панели, что делает её подходящей для различных применений, включая клиники, спортзалы и домашнее использование. Совместимая с различными моделями панелей, стойка RMS обеспечивает стабильную, безопасную и эффективную светотерапию красным светом.",
        featuresTitle: "Особенности продукта",
        features: [
          {
            title: "Моторизованная регулировка высоты",
            body: "Диапазон регулировки высоты: от 80 см до 160 см с помощью моторизованного механизма.",
          },
          {
            title: "Настройка угла",
            body: "Позволяет регулировать горизонтальный и вертикальный угол для проведения сеансов направленной и полной светотерапии красным светом.",
          },
          {
            title: "Прочная и устойчивая конструкция",
            body: "Выдерживает максимальную нагрузку 60 кг, вмещая даже самые большие панели.",
          },
          {
            title: "Широкая совместимость",
            body: "Совместима с моделями панелей: RD1500 / RDMAX / RD6000 / RDPRO1500 / RDPRO3000 / RDPRO6000 / RDPRO1500-FS / RDPRO3000-FS / RDPRO6000-FS.",
          },
        ],
        specsTableTitle: "Технические характеристики и параметры",
        specsColumnFeature: "Спецификация",
        specsColumnValue: "Подробности",
        specsRows: [
          { label: "Название модели", value: "RMS" },
          {
            label: "Диапазон высоты",
            value: "Регулируется по высоте от 80 см до 160 см.",
          },
          { label: "Грузоподъемность", value: "60 кг" },
          { label: "Размеры (см)", value: "85 x 70 x 80" },
          { label: "Материал", value: "Железо" },
          {
            label: "Совместимые панели",
            value:
              "RD1500, RDMAX, RD6000, RDPro1500, RDPro3000, RDPro6000, RDPro1500-FS, RDPro3000-FS, RDPro6000-FS",
          },
          { label: "Рабочая среда", value: "-10°~40°C" },
          { label: "Вес брутто (GW)", value: "38 кг" },
          {
            label: "В комплект входят аксессуары",
            value:
              "1) Подставка (12 шт.), 2) Инструкция (13 шт.), 3) Монтажные принадлежности",
          },
          { label: "Рабочая среда (расширенный диапазон)", value: "-10°~45°C" },
        ],
        detailBands: [
          {
            imagePath: "accesorii/MS/ms-jos-1.png",
            mediaOnRight: false,
            title: "Почему стоит выбрать моторизованную подставку?",
            bullets: [
              {
                title: "Улучшенный опыт терапии",
                body: "Идеально позиционирует панель с красным светом для оптимального воздействия, обеспечивая максимальный терапевтический эффект.",
              },
              {
                title: "Долговечность, которой вы можете доверять",
                body: "Изготовлено из высококачественных материалов, выдерживающих многократное использование как в профессиональной, так и в домашней обстановке.",
              },
              {
                title: "Универсальная совместимость",
                body: "Бесперебойно работает с широким спектром панелей REDDOT, расширяя возможности вашей системы.",
              },
              {
                title: "Простота использования",
                body: "Благодаря моторизованному механизму и гибким настройкам, терапевтическую панель легко можно установить в любое положение для проведения лечения.",
              },
            ],
          },
          {
            imagePath: "accesorii/MS/ms-jos-2.png",
            mediaOnRight: true,
            title: "Приложения",
            bullets: [
              {
                title: "Клиники",
                body: "Идеально подходит для профессиональных терапевтов, которым необходима гибкая и точная корректировка во время лечения.",
              },
              {
                title: "Спортивные залы",
                body: "Идеально подходит для восстановления после тренировки и расслабления мышц.",
              },
              {
                title: "Для домашнего использования",
                body: "Удобное и прочное решение для индивидуальных установок для терапии красным светом.",
              },
            ],
          },
          {
            imagePath: "accesorii/MS/ms-jos-3.jpg",
            mediaOnRight: true,
            title: "Служба поддержки клиентов и гарантия",
            bullets: [
              {
                title: "Гарантия",
                body: "3 года комплексного обслуживания для вашего спокойствия.",
              },
              {
                title: "Поддержка",
                body: "Специализированная команда обслуживания клиентов окажет помощь в сборке, устранении неполадок и ответит на общие вопросы.",
              },
            ],
          },
        ],
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
