import type { Locale, MaskMedia } from "./masks";

export interface AccessoryDetailBand {
  imagePath?: string;
  /** A doua imagine, lipită de prima (fără gap), aceeași înălțime. */
  splitImagePath?: string;
  /** `true` = text stânga, imagine dreapta (desktop). */
  mediaOnRight?: boolean;
  /** Linie deasupra titlului (ex. slogan produs). */
  eyebrow?: string;
  /** Eyebrow ca titlu centrat + linie roșie; apoi grilă cu text (titlu roșu + listă). */
  centeredHeadlineRule?: boolean;
  title: string;
  /** Titlu centrat deasupra grilei; coloana text afișează doar lista. */
  titleCentered?: boolean;
  /** Subtitlu roșu sub titlul centrat (ex. „Cum oferă RD30…”). */
  titleSupplement?: string;
  /** `disc` = listă cu puncte; implicit bifă. */
  bulletStyle?: "check" | "disc";
  /** Dacă true, banda se afișează după tabelul de specificații. */
  afterSpecs?: boolean;
  /** Secțiune numai text (fără imagine); folosește `paragraphs`. */
  textOnly?: boolean;
  /** Paragrafe afișate sub titlu (fără bifă). */
  paragraphs?: string[];
  bullets?: { title: string; body: string }[];
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
  /** Paragraf opțional deasupra titlului tabelului (ex. linie „premium”). */
  specsTableLead?: string;
  /** Tabel specificații (rânduri duplicate etichetă permise). */
  specsTableTitle?: string;
  specsColumnFeature?: string;
  specsColumnValue?: string;
  specsRows?: { label: string; value: string }[];
  /** Benzi imagine + text sub tabel (ex. jos-1…3). */
  detailBands?: AccessoryDetailBand[];
  /** Titlu centrat + carduri (ex. 3 coloane wellness). */
  detailCardGrid?: {
    headline: string;
    cards: { title: string; body: string }[];
    /** După câte benzi `detailBands` (înainte de specificații) se inserează grila. Implicit 1. `0` = înaintea tuturor benzilor. */
    insertAfterBandCount?: number;
  };
  /** Tabel comparație două modele (ex. M7 vs M7 PLUS). */
  modelCompareTable?: {
    title: string;
    featureLabel: string;
    modelALabel: string;
    modelBLabel: string;
    rows: { label: string; modelA: string; modelB: string }[];
  };
}

export interface AccessoryProduct {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  media: MaskMedia[];
  translations: Record<Locale, AccessoryTranslation>;
  /** Grid lampi & accesorii: „cover” umple cadrul fără bare laterale; implicit „contain”. */
  listingCardImageFit?: "contain" | "cover";
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
    listingCardImageFit: "cover",
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
        title:
          "RD30 este o lampă facială fotonică LED miniaturală de 36W pentru terapia cu lumină roșie.",
        modelShort: "RD30",
        subtitle: "",
        description:
          "Lumină roșie puternică de 660 nm și lumină în infraroșu apropiat de 850 nm. RD30 oferă energie concentrată, promovând reînnoirea vizibilă a pielii și ameliorând eficient durerea, țintind cu precizie zonele în care este cea mai mare nevoie.",
        featuresTitle: "Caracteristici / Beneficii cheie",
        features: [
          {
            title: "Sinergia a două lungimi de undă",
            body: "660 nm pentru piele + 850 nm pentru țesut.",
          },
          {
            title: "Putere mare",
            body: "12 LED-uri de 3W pentru o terapie eficientă și țintită.",
          },
          {
            title: "Utilizare preconizată",
            body: "Design compact pentru tratament de înaltă precizie.",
          },
          {
            title: "Garanție de 3 ani",
            body: "Durabilitate garantată la nivel profesional.",
          },
        ],
        specsTableLead:
          "Calitate premium, posibilitate de personalizare pentru marca dvs.",
        specsTableTitle: "Specificații",
        specsColumnFeature: "Caracteristică",
        specsColumnValue: "Specificație",
        specsRows: [
          { label: "Număr model", value: "RD30" },
          {
            label: "Lungimi de undă",
            value: "660 nm (roșu), 850 nm (infraroșu apropiat)",
          },
          { label: "Număr LED", value: "12x3W" },
          {
            label: "Cip produs",
            value:
              "Chip unic (cu posibilitatea de a personaliza arhitectura multi-cip)",
          },
          { label: "Dimensiunea panoului LED", value: "14x12 cm" },
          { label: "Culoare", value: "Alb" },
          { label: "Putere", value: "36W" },
          {
            label: "Funcție principală",
            value:
              "Pierdere în greutate / Ameliorarea durerii / Reducerea inflamației",
          },
          { label: "Suport baterie externă", value: "Nu" },
          { label: "Greutate netă", value: "Aproximativ 360 g" },
          { label: "Durata de viață a LED-ului", value: "Până la 50.000 de ore" },
          { label: "Garanție", value: "1 an" },
          { label: "Certificări", value: "CE, ROHS, FDA" },
          { label: "Mediu de funcționare", value: "-10°~45°C" },
          {
            label: "Accesorii",
            value:
              "Dispozitiv RD30 / cablu de alimentare / ochelari de protecție / manual de instrucțiuni",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/RD/rd30-jos-1.jpg",
            mediaOnRight: false,
            centeredHeadlineRule: true,
            bulletStyle: "disc",
            eyebrow: "Lampă facială mini RD30 LED de 36W cu foton și lumină roșie.",
            title: "Nu mai face compromisuri cu soluții ineficiente.",
            bullets: [
              {
                title: "Ești frustrat de liniile fine, petele și un ten tern?",
                body: "",
              },
              {
                title:
                  "Te-ai săturat de durerile musculare constante, rigiditatea articulațiilor și recuperarea lentă?",
                body: "",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-2.jpg",
            mediaOnRight: true,
            titleCentered: true,
            title: "Aplicare țintită – Aliatul corpului tău",
            titleSupplement: "Cum oferă RD30 rezultate profesionale",
            bullets: [
              {
                title: "Reîntinerire a suprafeței pielii (660 nm)",
                body: "Lumina roșie cu o lungime de undă de 660 nm este absorbită de piele, promovând producția de colagen, reducând ridurile și îmbunătățind sănătatea generală a pielii.",
              },
              {
                title: "Reparare profundă (850 nm)",
                body: "Lumina infraroșie invizibilă cu o lungime de undă de 850 nm pătrunde mai adânc, ajutând la reducerea inflamației, accelerarea recuperării musculare și ameliorarea durerilor articulare.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-3.jpg",
            mediaOnRight: false,
            title: "Parte din avantaj",
            bullets: [
              {
                title: "Eficiență țintită",
                body: "Capul compact de 14x12 cm concentrează toți cei 36 W de putere pe o anumită zonă, prevenind pierderile de energie și asigurând rezultate maxime.",
              },
              {
                title: "Construit pentru performanță de lungă durată",
                body: "Fabricat din aluminiu durabil și ușor și cu o garanție de 3 ani, RD30 este conceput pentru utilizare zilnică în orice mediu - acasă sau în clinică.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-4.jpg",
            mediaOnRight: true,
            title: "De la îngrijire personală la protocoale profesionale",
            bullets: [
              {
                title: "Pentru wellness acasă",
                body: "Integrați cu ușurință RD30 în rutina zilnică. Ideal ca dispozitiv portabil pentru tratamente faciale și corporale sau poate fi montat pe masă pentru tratamente hands-free.",
              },
              {
                title: "Pentru uz profesional",
                body: "Un instrument puternic și fiabil pentru clinici, spa-uri și antrenori. Oferă terapie cu lumină țintită pentru a îmbunătăți rezultatele tratamentului facial, a promova recuperarea post-antrenament și a ameliora durerea.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-5.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Tot ce ai nevoie pentru a începe.",
            bullets: [
              { title: "Unitate RD30", body: "" },
              { title: "Cablu de alimentare", body: "" },
              { title: "Ochelari de protecție", body: "" },
            ],
          },
          {
            textOnly: true,
            afterSpecs: true,
            title: "Asigurarea performanței optime și a longevității.",
            paragraphs: [
              "Numai pentru utilizare în interior. Dispozitivul nu este impermeabil; evitați utilizarea în zone umede sau expunerea LED-urilor la uleiuri esențiale.",
              "Pentru siguranță, dacă dispozitivul nu funcționează cu baterii, opriți întrerupătorul principal de alimentare înainte de a efectua orice reglaje.",
              "Activare: Apăsați butonul ON/OFF timp de 1 secundă pentru a porni dispozitivul.",
              "Pentru service post-vânzare sau reparații, vă rugăm să contactați direct Red Light Therapy.",
            ],
          },
        ],
      },
      ru: {
        title:
          "Миниатюрная светодиодная лампа для лица RD30 мощностью 36 Вт, фотонная, для терапии красным светом.",
        modelShort: "RD30",
        subtitle: "",
        description:
          "Мощное воздействие красного света с длиной волны 660 нанометров и ближнего инфракрасного света с длиной волны 850 нанометров. Аппарат RD30 обеспечивает концентрированную энергию, способствуя обновлению видимых участков кожи и эффективно снимая боль, точно воздействуя на те области, где это наиболее необходимо.",
        featuresTitle: "Основные характеристики и преимущества",
        features: [
          {
            title: "Синергия двух длин волн",
            body: "660 нм для кожи + 850 нм для тканей.",
          },
          {
            title: "Высокая мощность",
            body: "12 светодиодов по 3 Вт для эффективной, целенаправленной терапии.",
          },
          {
            title: "Целевое применение",
            body: "Компактная конструкция для высокоточной обработки.",
          },
          {
            title: "3-летняя гарантия",
            body: "Гарантирована долговечность профессионального уровня.",
          },
        ],
        specsTableLead:
          "Премиум Качество, Возможность Персонализации Под Ваш Бренд.",
        specsTableTitle: "Технические Характеристики",
        specsColumnFeature: "Особенность",
        specsColumnValue: "Спецификация",
        specsRows: [
          { label: "Номер модели", value: "RD30" },
          {
            label: "Длины волн",
            value: "660 нм (красный), 850 нм (ближний инфракрасный)",
          },
          { label: "Номер светодиода", value: "12x3W" },
          {
            label: "Чип продукта",
            value:
              "Однокристальная (с возможностью настройки многокристальной архитектуры)",
          },
          { label: "Размер светодиодной панели", value: "14х12 см" },
          { label: "Цвет", value: "белый" },
          { label: "Мощность", value: "36W" },
          {
            label: "Основная функция",
            value:
              "Похудение / Облегчение боли / Снижение воспаления",
          },
          { label: "Поддержка портативных зарядных устройств", value: "Нет" },
          { label: "Вес нетто", value: "Примерно 360 г" },
          { label: "Срок службы светодиодов", value: "До 50 000 часов" },
          { label: "Гарантия", value: "1 год" },
          { label: "Сертификаты", value: "CE, ROHS, FDA" },
          { label: "Рабочая среда", value: "-10°~45°C" },
          {
            label: "Аксессуары",
            value:
              "Устройство RD30 / шнур питания / очки / инструкция по эксплуатации",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/RD/rd30-jos-1.jpg",
            mediaOnRight: false,
            centeredHeadlineRule: true,
            bulletStyle: "disc",
            eyebrow:
              "Миниатюрная Светодиодная Лампа Для Лица RD30 Мощностью 36 Вт, Фотонная, С Красным Светом.",
            title: "Прекратите идти на компромиссы, используя неэффективные решения.",
            bullets: [
              {
                title:
                  "Вас раздражают мелкие морщинки, пятна и тусклый цвет лица?",
                body: "",
              },
              {
                title:
                  "Устали от постоянной мышечной боли, скованности суставов и медленного восстановления?",
                body: "",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-2.jpg",
            mediaOnRight: true,
            titleCentered: true,
            title: "Целенаправленное Применение – Союзник Вашего Организма",
            titleSupplement: "Как RD30 обеспечивает профессиональные результаты",
            bullets: [
              {
                title: "Омоложение поверхности кожи (660 нм)",
                body: "Красный свет с длиной волны 660 нм поглощается кожей, способствуя выработке коллагена, уменьшению морщин и улучшению общего состояния кожи.",
              },
              {
                title: "Глубокое восстановление (850 нм)",
                body: "Невидимый инфракрасный свет с длиной волны 850 нм проникает глубже, помогая уменьшить воспаление, ускорить восстановление мышц и облегчить боль в суставах.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-3.jpg",
            mediaOnRight: false,
            title: "Часть преимущества",
            bullets: [
              {
                title: "Целенаправленная эффективность",
                body: "Компактная головка размером 14x12 см концентрирует всю мощность 36 Вт на определенной области, предотвращая потери энергии и обеспечивая максимальный результат.",
              },
              {
                title: "Создан для долговечной работы",
                body: "Изготовленный из прочного, легкого алюминия и имеющий 3-летнюю гарантию, RD30 разработан для ежедневного использования в любых условиях — дома или в клинике.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-4.jpg",
            mediaOnRight: true,
            title:
              "От процедур по уходу за собой до профессиональных протоколов",
            bullets: [
              {
                title: "Для домашнего оздоровления",
                body: "Легко интегрируйте RD30 в свой ежедневный распорядок. Идеально подходит в качестве портативного устройства для лица и тела, или же его можно установить на столе для проведения процедур без использования рук.",
              },
              {
                title: "Для профессионального использования",
                body: "Мощный и надежный инструмент для клиник, спа-салонов и тренеров. Предлагает целенаправленную светотерапию для улучшения результатов процедур по уходу за лицом, восстановления после тренировок и снятия боли.",
              },
            ],
          },
          {
            imagePath: "accesorii/RD/rd30-jos-5.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Всё необходимое для начала работы.",
            bullets: [
              { title: "Устройство RD30", body: "" },
              { title: "Кабель питания", body: "" },
              { title: "Защитные очки", body: "" },
            ],
          },
          {
            textOnly: true,
            afterSpecs: true,
            title: "Обеспечение оптимальной производительности и долговечности.",
            paragraphs: [
              "Только для использования в помещении. Устройство не является водонепроницаемым; избегайте использования во влажных помещениях или попадания эфирных масел непосредственно на светодиоды.",
              "В целях безопасности, если устройство не питается от батареи, перед выполнением каких-либо регулировок выключите главный выключатель питания.",
              "Активация: Нажмите кнопку ВКЛ/ВЫКЛ и удерживайте ее в течение 1 секунды, чтобы включить устройство.",
              "По вопросам послепродажного обслуживания или ремонта обращайтесь напрямую в Red Light Therapy.",
            ],
          },
        ],
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
        title:
          "Suport de podea - O bază stabilă, portabilă și reglabilă pentru panoul de tratament pentru jumătate de corp, ușor de mutat",
        modelShort: "XL",
        subtitle: "",
        description:
          "Suportul nostru de podea personalizat, conceput pentru stabilitate maximă și mobilitate perfectă, asigură funcționarea în siguranță a panoului dumneavoastră de terapie cu lumină de înaltă calitate și îmbunătățește estetica unității dumneavoastră.",
        featuresTitle: "Caracteristici / Beneficii cheie",
        features: [
          {
            title: "Capacitate mare de încărcare",
            body: "Susține în mod fiabil greutatea întregului panou de corp și încărcăturile dinamice.",
          },
          {
            title: "Roți universale la 360°",
            body: "Se poziționează ușor în orice configurație a sălii de tratament.",
          },
          {
            title: "Oțel SPCC durabil",
            body: "Durată de viață garantată de 3 ani, conceput pentru utilizare profesională continuă.",
          },
          {
            title: "Finisaj elegant, alb mat",
            body: "Se potrivește perfect cu echipamentele de wellness de înaltă calitate.",
          },
        ],
        specsTableTitle: "Specificații și parametri",
        specsColumnFeature: "Specificație",
        specsColumnValue: "Detalii",
        specsRows: [
          { label: "Nume model", value: "Suport de bază" },
          {
            label: "Interval de înălțime",
            value: "708,91 x 510 x 333,5 mm",
          },
          { label: "Greutate netă", value: "8,77 kg" },
          { label: "Material", value: "SPCC" },
          {
            label: "Suport de podea XL",
            value:
              "RDPRO750, RDPRO750-FS, RDPro1500, RDPro1500-FS, RDPro3000, RDPro3000-FS",
          },
          {
            label: "Suport de podea XXL",
            value: "RDPRO 6000, RDPRO 6000-FS",
          },
          { label: "Certificare", value: "FDA, FCC, CE, ROHS" },
          { label: "Capacitate de încărcare", value: "50 kg" },
          { label: "Mediu de funcționare", value: "-10°~40°C" },
          {
            label: "Accesorii incluse",
            value: "1) Suport, 2) Manual, 3) Accesorii de montare",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/XL/XL-jos-1.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "De ce să alegeți o structură de susținere de bază?",
            bullets: [
              {
                title: "Stabilitate sporită",
                body: "Suportul orizontal asigură o poziționare sigură a panoului de terapie în timpul utilizării, reducând la minimum mișcarea pentru un tratament stabil și eficient.",
              },
              {
                title: "Poziționare reglabilă",
                body: "Cu înălțime reglabilă și orientare orizontală, suportul oferă flexibilitate pentru a satisface o varietate de nevoi de tratament, de la zone specifice până la terapia completă a corpului.",
              },
              {
                title: "Calitate profesională",
                body: "Proiectat folosind materiale de înaltă calitate, îndeplinește cele mai înalte standarde de siguranță și fiabilitate.",
              },
              {
                title: "Design portabil",
                body: "Ușor și ușor de asamblat, suportul este ideal pentru utilizatorii care necesită o configurație portabilă pentru panourile de terapie cu lumină roșie.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-2.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Ce este inclus",
            bullets: [
              {
                title: "Suport orizontal",
                body: "Un accesoriu durabil și reglabil pentru poziționarea orizontală a panourilor.",
              },
              {
                title: "Accesorii de montare",
                body: "Toate uneltele și componentele necesare pentru o asamblare ușoară.",
              },
              {
                title: "Manual de utilizare",
                body: "Un ghid detaliat pentru configurare și utilizare.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-3.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Aplicații",
            bullets: [
              {
                title: "Utilizare acasă",
                body: "Ideal pentru proceduri de wellness, oferind o montare orizontală stabilă și reglabilă.",
              },
              {
                title: "Clinici și săli de fitness",
                body: "Potrivit pentru medii profesionale care cer flexibilitate și stabilitate pe durata procedurilor.",
              },
              {
                title: "Terapie țintită și pentru întregul corp",
                body: "Compatibil cu panouri de diferite dimensiuni, pentru parametri de tratament personalizați.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-4.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Asistență și garanție",
            bullets: [
              {
                title: "Garanție",
                body: "3 ani de asigurare completă pentru liniștea dumneavoastră.",
              },
              {
                title: "Asistență",
                body: "Echipa noastră dedicată de asistență clienți este gata să vă asiste cu asamblarea și depanarea.",
              },
            ],
          },
        ],
      },
      ru: {
        title:
          "Напольная опора - устойчивая и переносная регулируемая основа для панели для лечения половины тела, удобная для перемещения",
        modelShort: "XL",
        subtitle: "",
        description:
          "Наша специальная напольная стойка, разработанная для максимальной устойчивости и бесперебойной мобильности, гарантирует безопасную работу вашей высококачественной панели светотерапии и улучшает эстетический вид вашего учреждения.",
        featuresTitle: "Основные характеристики и преимущества",
        features: [
          {
            title: "Высокая грузоподъемность",
            body: "Надежно выдерживает вес всей кузовной панели и динамические нагрузки.",
          },
          {
            title: "Универсальные колеса на 360°",
            body: "Легкое позиционирование в любой планировке процедурного кабинета.",
          },
          {
            title: "Прочная сталь SPCC",
            body: "Гарантированный срок службы 3 года, предназначена для постоянного профессионального использования.",
          },
          {
            title: "Гладкая матово-белая отделка",
            body: "Прекрасно сочетается с высококлассным велнес-оборудованием.",
          },
        ],
        specsTableTitle: "Технические характеристики и параметры",
        specsColumnFeature: "Спецификация",
        specsColumnValue: "Подробности",
        specsRows: [
          {
            label: "Название модели",
            value: "Опорный кронштейн основания",
          },
          {
            label: "Диапазон высоты",
            value: "708,91 × 510 × 333,5 мм",
          },
          { label: "Вес (нетто)", value: "8,77 кг" },
          { label: "Материал", value: "SPCC" },
          {
            label: "Напольная подставка XL",
            value:
              "RDPRO750, RDPRO750-FS, RDPro1500, RDPro1500-FS, RDPro3000, RDPro3000-FS",
          },
          {
            label: "Напольная подставка XXL",
            value: "RDPRO 6000, RDPRO 6000-FS",
          },
          { label: "Сертификация", value: "FDA, FCC, CE, ROHS" },
          { label: "Грузоподъемность", value: "50 кг" },
          { label: "Рабочая среда", value: "-10°~40°C" },
          {
            label: "В комплект входят аксессуары",
            value:
              "1) Подставка, 2) Инструкция, 3) Монтажные принадлежности",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/XL/XL-jos-1.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Почему стоит выбрать опорную конструкцию основания?",
            bullets: [
              {
                title: "Повышенная стабильность",
                body: "Горизонтальная подставка обеспечивает надежную фиксацию терапевтической панели во время использования, сводя к минимуму ее перемещение для стабильного и эффективного лечения.",
              },
              {
                title: "Настраиваемое позиционирование",
                body: "Благодаря регулируемой высоте и горизонтальной ориентации, подставка обеспечивает гибкость, позволяя удовлетворить различные потребности в лечении, от проработки отдельных зон до терапии всего тела.",
              },
              {
                title: "Профессиональное качество",
                body: "Разработанный с использованием высококачественных материалов, он отвечает самым высоким стандартам безопасности и надежности.",
              },
              {
                title: "Портативный дизайн",
                body: "Легкая и простая в сборке подставка идеально подходит для пользователей, которым необходима портативная установка для панелей, используемых для терапии красным светом.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-2.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Что входит в комплект",
            bullets: [
              {
                title: "Горизонтальная подставка",
                body: "Прочный и регулируемый аксессуар для горизонтального размещения панелей.",
              },
              {
                title: "Монтажные принадлежности",
                body: "Все необходимые инструменты и компоненты для легкой сборки.",
              },
              {
                title: "Руководство пользователя",
                body: "Подробное руководство по настройке и использованию.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-3.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Приложения",
            bullets: [
              {
                title: "Домашнее использование",
                body: "Идеально подходит для проведения оздоровительных процедур, обеспечивая стабильную и регулируемую горизонтальную установку.",
              },
              {
                title: "Клиники и тренажерные залы",
                body: "Идеально подходит для профессиональных условий, требующих гибкости и стабильности во время процедур.",
              },
              {
                title: "Целенаправленная и комплексная терапия всего тела",
                body: "Поддерживает панели различных размеров для индивидуальной настройки параметров обработки.",
              },
            ],
          },
          {
            imagePath: "accesorii/XL/XL-jos-4.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Поддержка и гарантия",
            bullets: [
              {
                title: "Гарантия",
                body: "3 года комплексного страхового покрытия для вашего спокойствия.",
              },
              {
                title: "Поддержка",
                body: "Специализированная служба поддержки клиентов готова оказать помощь в сборке и устранении неполадок.",
              },
            ],
          },
        ],
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
        title:
          "Suport orizontal Red Light Therapy – Poziționare flexibilă a panourilor de terapie cu lumină",
        modelShort: "GP",
        subtitle: "",
        description:
          "Suportul orizontal este un accesoriu durabil și versatil, conceput special pentru panourile de terapie cu lumină roșie Red Light Therapy. Acesta oferă o soluție stabilă și reglabilă de plasare orizontală, fiind ideal pentru tratamente specifice sau pentru întregul corp. Cu designul său robust și reglarea ușoară, suportul orizontal oferă confort și flexibilitate maximă pentru utilizatorii din clinici, săli de sport sau acasă.\n\nAcelași tip de suport (faceți clic pentru a accesa pagina noului produs): suport pneumatic Red Light Therapy.",
        featuresTitle: "Caracteristici cheie",
        features: [
          {
            title: "Construcție durabilă",
            body: "Suportul orizontal, fabricat din fier și aluminiu, este conceput pentru a susține în siguranță panourile și a rezista la ajustări frecvente.",
          },
          {
            title: "Înălțime reglabilă",
            body: "Înălțime ușor reglabilă de la 105 cm la 135 cm, permițând utilizatorilor să personalizeze plasarea pentru rezultate optime ale tratamentului.",
          },
          {
            title: "Compatibilitate largă",
            body: "Compatibil cu panourile de terapie cu lumină roșie Red Light Therapy, inclusiv: RD1000 / RD1500 / RDMAX / RDPro1500 / RDPro3000 / RDPro1500-FS / RDPro3000-FS.",
          },
          {
            title: "Amplasare orizontală",
            body: "Susține perfect amplasarea orizontală a panourilor de terapie cu lumină roșie, oferind o distribuție uniformă a luminii pentru tratament țintit sau generalizat al întregului corp.",
          },
          {
            title: "Portabil și ușor",
            body: "Suportul cântărește doar 7 kg și este ușor de mutat și reglat, fiind potrivit atât pentru uz profesional, cât și personal.",
          },
        ],
        specsTableTitle: "Specificații și parametri",
        specsColumnFeature: "Specificație",
        specsColumnValue: "Detalii",
        specsRows: [
          { label: "Nume model", value: "Suport orizontal (HS)" },
          {
            label: "Interval de înălțime",
            value: "Reglabil de la 105 cm la 135 cm",
          },
          { label: "Greutate netă", value: "7 kg" },
          { label: "Material", value: "Fier" },
          {
            label: "Panouri compatibile",
            value:
              "RD1000, RD1500, RDMAX, RDPro1500, RDPro3000, RDPro1500-FS, RDPro3000-FS",
          },
          { label: "Capacitate de încărcare", value: "50 kg" },
          { label: "Mediu de funcționare", value: "-15°~40°C" },
          {
            label: "Accesorii incluse",
            value: "1) Suport, 2) Instrucțiuni, 3) Accesorii de montare",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/GP/gp-jos-1.png",
            mediaOnRight: false,
            afterSpecs: true,
            title: "De ce să alegeți un suport orizontal?",
            bullets: [
              {
                title: "Stabilitate îmbunătățită",
                body: "Suportul orizontal asigură o fixare sigură a panoului de terapie în timpul utilizării, reducând la minimum mișcarea pentru un tratament stabil și eficient.",
              },
              {
                title: "Poziționare reglabilă",
                body: "Cu înălțime reglabilă și orientare orizontală, suportul oferă flexibilitate pentru a satisface o varietate de nevoi de tratament, de la zone specifice până la terapia completă a corpului.",
              },
              {
                title: "Calitate profesională",
                body: "Proiectat folosind materiale de înaltă calitate, îndeplinește cele mai înalte standarde de siguranță și fiabilitate.",
              },
              {
                title: "Design portabil",
                body: "Ușor și ușor de asamblat, suportul este ideal pentru utilizatorii care necesită o configurație portabilă pentru panourile de terapie cu lumină roșie.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-2.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Ce este inclus",
            bullets: [
              {
                title: "Suport orizontal",
                body: "Un accesoriu durabil și reglabil pentru poziționarea orizontală a panourilor.",
              },
              {
                title: "Accesorii de montare",
                body: "Toate uneltele și componentele necesare pentru o asamblare ușoară.",
              },
              {
                title: "Manual de utilizare",
                body: "Un ghid detaliat pentru configurare și utilizare.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-3.png",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Aplicații",
            bullets: [
              {
                title: "Utilizare acasă",
                body: "Ideal pentru tratamente wellness, oferind o poziție orizontală stabilă și reglabilă.",
              },
              {
                title: "Clinici și săli de sport",
                body: "Ideal pentru medii profesionale care necesită flexibilitate și stabilitate în timpul tratamentelor.",
              },
              {
                title: "Terapie completă a corpului, specifică și completă",
                body: "Suportă panouri de diferite dimensiuni pentru ajustarea individuală a parametrilor de tratament.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-4.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Asistență și garanție",
            bullets: [
              {
                title: "Garanție",
                body: "3 ani de asigurare completă pentru liniștea dumneavoastră.",
              },
              {
                title: "Asistență",
                body: "Echipa noastră dedicată de asistență clienți este gata să vă asiste cu asamblarea și depanarea.",
              },
            ],
          },
        ],
      },
      ru: {
        title:
          "Горизонтальная подставка Red Light Therapy — гибкое позиционирование панелей светотерапии",
        modelShort: "GP",
        subtitle: "",
        description:
          "Горизонтальная подставка — это прочный и универсальный аксессуар, специально разработанный для панелей красной светотерапии Red Light Therapy. Он обеспечивает стабильное и регулируемое решение для горизонтального размещения, что делает его идеальным для целенаправленного лечения или лечения всего тела. Благодаря прочной конструкции и легкой регулировке горизонтальная подставка обеспечивает максимальное удобство и гибкость для пользователей в клиниках, спортивных залах или дома.\n\nТот же тип кронштейнов (щёлкните, чтобы перейти на страницу нового продукта): пневматическая стойка Red Light Therapy.",
        featuresTitle: "Ключевые особенности",
        features: [
          {
            title: "Прочная конструкция",
            body: "Горизонтальная стойка, изготовленная из железа и алюминия, предназначена для надёжной поддержки панелей и выдерживает частые регулировки.",
          },
          {
            title: "Регулируемая высота",
            body: "Легко регулируемая высота от 105 см до 135 см, что позволяет пользователям настраивать размещение для достижения оптимальных результатов лечения.",
          },
          {
            title: "Широкая совместимость",
            body: "Совместимо с панелями светотерапии красным светом Red Light Therapy, включая: RD1000 / RD1500 / RDMAX / RDPro1500 / RDPro3000 / RDPro1500-FS / RDPro3000-FS.",
          },
          {
            title: "Горизонтальное размещение",
            body: "Идеально поддерживает горизонтальное расположение панелей светотерапии красным светом, обеспечивая равномерное распределение света для точечного или общего воздействия на всё тело.",
          },
          {
            title: "Портативный и лёгкий",
            body: "Подставка весит всего 7 кг, её легко перемещать и регулировать, что делает её подходящей как для профессионального, так и для личного использования.",
          },
        ],
        specsTableTitle: "Технические характеристики и параметры",
        specsColumnFeature: "Спецификация",
        specsColumnValue: "Подробности",
        specsRows: [
          {
            label: "Название модели",
            value: "Горизонтальная подставка (HS)",
          },
          {
            label: "Диапазон высоты",
            value: "Регулируется от 105 см до 135 см.",
          },
          { label: "Вес (нетто)", value: "7 кг" },
          { label: "Материал", value: "Железо" },
          {
            label: "Совместимые панели",
            value:
              "RD1000, RD1500, RDMAX, RDPro1500, RDPro3000, RDPro1500-FS, RDPro3000-FS",
          },
          { label: "Грузоподъемность", value: "50 кг" },
          { label: "Рабочая среда", value: "-15°~40°C" },
          {
            label: "В комплект входят аксессуары",
            value:
              "1) Подставка, 2) Инструкция, 3) Монтажные принадлежности",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/GP/gp-jos-1.png",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Почему стоит выбрать горизонтальную подставку?",
            bullets: [
              {
                title: "Повышенная стабильность",
                body: "Горизонтальная подставка обеспечивает надежную фиксацию терапевтической панели во время использования, сводя к минимуму ее перемещение для стабильного и эффективного лечения.",
              },
              {
                title: "Настраиваемое позиционирование",
                body: "Благодаря регулируемой высоте и горизонтальной ориентации, подставка обеспечивает гибкость, позволяя удовлетворить различные потребности в лечении, от проработки отдельных зон до терапии всего тела.",
              },
              {
                title: "Профессиональное качество",
                body: "Разработанный с использованием высококачественных материалов, он отвечает самым высоким стандартам безопасности и надежности.",
              },
              {
                title: "Портативный дизайн",
                body: "Легкая и простая в сборке подставка идеально подходит для пользователей, которым необходима портативная установка для панелей, используемых для терапии красным светом.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-2.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Что входит в комплект",
            bullets: [
              {
                title: "Горизонтальная подставка",
                body: "Прочный и регулируемый аксессуар для горизонтального размещения панелей.",
              },
              {
                title: "Монтажные принадлежности",
                body: "Все необходимые инструменты и компоненты для легкой сборки.",
              },
              {
                title: "Руководство пользователя",
                body: "Подробное руководство по настройке и использованию.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-3.png",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Приложения",
            bullets: [
              {
                title: "Домашнее использование",
                body: "Идеально подходит для проведения оздоровительных процедур, обеспечивая стабильную и регулируемую горизонтальную установку.",
              },
              {
                title: "Клиники и тренажерные залы",
                body: "Идеально подходит для профессиональных условий, требующих гибкости и стабильности во время процедур.",
              },
              {
                title: "Целенаправленная и комплексная терапия всего тела",
                body: "Поддерживает панели различных размеров для индивидуальной настройки параметров обработки.",
              },
            ],
          },
          {
            imagePath: "accesorii/GP/gp-jos-4.png",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Поддержка и гарантия",
            bullets: [
              {
                title: "Гарантия",
                body: "3 года комплексного страхового покрытия для вашего спокойствия.",
              },
              {
                title: "Поддерживать",
                body: "Специализированная служба поддержки клиентов готова оказать помощь в сборке и устранении неполадок.",
              },
            ],
          },
        ],
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
        title:
          "Suport de podea - O bază stabilă și portabilă pentru panouri de terapie pentru jumătate de corp",
        modelShort: "FS",
        subtitle: "",
        description:
          "Conceput cu versatilitate în minte, suportul nostru de podea dispune de un tip de montare compatibil care se potrivește unei game largi de dispozitive de terapie cu lumină roșie de înaltă performanță, inclusiv modelele RD500, RD1000, RD1500, RDS500, RDS1000 și RDS1500.\n\nÎmbunătățiți-vă experiența de terapie cu lumină roșie cu suportul nostru inovator de podea, oferind flexibilitate și confort de neegalat. Cântărind doar 1,5 kg și măsurând doar 29 x 25 x 10 cm, acest suport ușor și portabil se integrează cu ușurință în orice mediu, fie acasă, într-o clinică profesională sau în deplasare. Conceput cu versatilitate în minte, suportul nostru de podea dispune de un tip de montare compatibil care se potrivește unei game largi de dispozitive de terapie cu lumină roșie de înaltă performanță, inclusiv RD500, RD1000, RD1500, RDS500, RDS1000 și RDS1500. Această compatibilitate asigură o integrare perfectă cu soluția dumneavoastră preferată de terapie cu lumină, permițându-vă să utilizați întregul potențial al fotobiomodulării țintite.",
        specsTableTitle: "Specificații și parametri",
        specsColumnFeature: "Specificație",
        specsColumnValue: "Detalii specificații",
        specsRows: [
          { label: "Nume model", value: "Suport de podea" },
          { label: "Interval de înălțime", value: "29x25x10 (cm)" },
          { label: "Greutate netă", value: "1,5 kg" },
          { label: "Material", value: "Fier" },
          {
            label: "Panouri compatibile",
            value: "RD500/RD1000/RD1500/RDPRO1500/RDPRO1500-FS",
          },
          { label: "Certificare", value: "FDA, FCC, CE, ROHS" },
          { label: "Capacitate de încărcare", value: "15 kg" },
          { label: "Mediu de funcționare", value: "0°~40°C" },
          {
            label: "Accesorii incluse",
            value: "1) Suport, 2) Instrucțiuni, 3) Accesorii de montare",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/FS/fs-jos-1.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "De ce să alegeți un suport orizontal?",
            bullets: [
              {
                title: "Stabilitate și siguranță",
                body: "Acesta oferă o bază solidă, prevenind răsturnarea panoului. Acest lucru este important în special pentru dispozitivele mai mari, asigurând fixarea lor în siguranță și reducând riscul de deteriorare accidentală sau vătămare corporală.",
              },
              {
                title: "Reglabilitate și flexibilitate",
                body: "Suportul permite reglarea ușoară a înălțimii, înclinării și rotației. Acest lucru permite poziționarea precisă a panoului pentru tratarea diferitelor zone ale corpului, indiferent dacă stați așezat, în picioare sau culcat.",
              },
              {
                title: "Distanță optimă de tratament",
                body: "Acest lucru ajută la menținerea distanței ideale dintre panou și piele, ceea ce este crucial pentru eficacitatea terapiei. Acest lucru vă asigură că beneficiați de beneficiile terapeutice maxime de la fiecare sesiune.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-2.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Ce este inclus",
            bullets: [
              {
                title: "Suport orizontal",
                body: "Un accesoriu convenabil și portabil, potrivit doar pentru panourile RD500/RD1000/RD1500/RDPRO1500/RDPRO1500-FS.",
              },
              {
                title: "Accesorii de montare",
                body: "Toate uneltele și componentele necesare pentru o asamblare ușoară.",
              },
              {
                title: "Manual de utilizare",
                body: "Un ghid detaliat pentru configurare și utilizare.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-3.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Aplicații",
            bullets: [
              {
                title: "Utilizare acasă",
                body: "Ideal pentru tratamente wellness, oferind o poziție orizontală stabilă și reglabilă.",
              },
              {
                title: "Clinici și săli de sport",
                body: "Ideal pentru medii profesionale care necesită flexibilitate și stabilitate în timpul tratamentelor.",
              },
              {
                title: "Terapie completă a corpului, specifică și completă",
                body: "Suportă panouri de diferite dimensiuni pentru ajustarea individuală a parametrilor de tratament.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-4.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Asistență și garanție",
            bullets: [
              {
                title: "Garanție",
                body: "3 ani de asigurare completă pentru liniștea dumneavoastră.",
              },
              {
                title: "Asistență",
                body: "Echipa noastră dedicată de asistență clienți este gata să vă asiste cu asamblarea și depanarea.",
              },
            ],
          },
        ],
      },
      ru: {
        title:
          "Напольная подставка — устойчивое и портативное основание для панелей терапии половины тела",
        modelShort: "FS",
        subtitle: "",
        description:
          "Наша напольная подставка, созданная с учетом универсальности, имеет совместимый тип крепления, который подходит для широкого спектра наших высокопроизводительных устройств для терапии красным светом, включая модели RD500, RD1000, RD1500, RDS500, RDS1000 и RDS1500.\n\nПовысьте качество терапии красным светом с помощью нашей инновационной напольной подставки, обеспечивающей непревзойденную гибкость и удобство. Эта легкая и портативная подставка весом всего 1,5 кг и компактными размерами 29x25x10 см легко интегрируется в любую среду, будь то дома, в профессиональной клинике или в дороге.\n\nНаша напольная подставка, созданная с учетом универсальности, имеет совместимый тип крепления, который подходит для широкого спектра наших высокопроизводительных устройств для терапии красным светом, включая модели RD500, RD1000, RD1500, RDS500, RDS1000 и RDS1500. Эта совместимость обеспечивает плавную интеграцию предпочитаемого вами решения светотерапии, позволяя вам использовать весь потенциал целевой фотобиомодуляции.",
        specsTableTitle: "Технические характеристики и параметры",
        specsColumnFeature: "Спецификация",
        specsColumnValue: "Подробности",
        specsRows: [
          { label: "Название модели", value: "Напольная подставка" },
          { label: "Диапазон высоты", value: "29х25х10 (см)" },
          { label: "Вес (нетто)", value: "1,5 кг" },
          { label: "Материал", value: "Железо" },
          {
            label: "Совместимые панели",
            value: "RD500/RD1000/RD1500/RDPRO1500/RDPRO1500-FS",
          },
          { label: "Сертификация", value: "FDA, FCC, CE, ROHS" },
          { label: "Грузоподъемность", value: "15 кг" },
          { label: "Рабочая среда", value: "0°~40°C" },
          {
            label: "В комплект входят аксессуары",
            value:
              "1) Подставка, 2) Инструкция, 3) Монтажные принадлежности",
          },
        ],
        detailBands: [
          {
            imagePath: "accesorii/FS/fs-jos-1.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Почему стоит выбрать горизонтальную подставку?",
            bullets: [
              {
                title: "Устойчивость и безопасность",
                body: "Она обеспечивает прочное основание, предотвращая опрокидывание панели. Это особенно важно для больших устройств, обеспечивая их надежную фиксацию и снижая риск случайных повреждений или травм.",
              },
              {
                title: "Регулируемость и гибкость",
                body: "Подставка позволяет легко регулировать высоту, угол наклона и вращение. Это позволяет точно расположить панель для обработки различных участков тела, независимо от того, сидите вы, стоите или лежите.",
              },
              {
                title: "Оптимальное расстояние для проведения процедуры",
                body: "Оно помогает поддерживать идеальное расстояние между панелью и кожей, что имеет решающее значение для эффективности терапии. Это гарантирует, что вы будете получать максимальный терапевтический эффект от каждого сеанса.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-2.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Что входит в комплект",
            bullets: [
              {
                title: "Горизонтальная подставка",
                body: "Удобное и портативное вспомогательное устройство, подходящее только для панелей RD500/RD1000/RD1500/RDPRO1500/RDPRO1500-FS.",
              },
              {
                title: "Монтажные принадлежности",
                body: "Все необходимые инструменты и компоненты для легкой сборки.",
              },
              {
                title: "Руководство пользователя",
                body: "Подробное руководство по настройке и использованию.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-3.jpg",
            mediaOnRight: false,
            afterSpecs: true,
            title: "Приложения",
            bullets: [
              {
                title: "Домашнее использование",
                body: "Идеально подходит для проведения оздоровительных процедур, обеспечивая стабильную и регулируемую горизонтальную установку.",
              },
              {
                title: "Клиники и тренажерные залы",
                body: "Идеально подходит для профессиональных условий, требующих гибкости и стабильности во время процедур.",
              },
              {
                title: "Целенаправленная и комплексная терапия всего тела",
                body: "Поддерживает панели различных размеров для индивидуальной настройки параметров обработки.",
              },
            ],
          },
          {
            imagePath: "accesorii/FS/fs-jos-4.jpg",
            mediaOnRight: true,
            afterSpecs: true,
            title: "Поддержка и гарантия",
            bullets: [
              {
                title: "Гарантия",
                body: "3 года комплексного страхового покрытия для вашего спокойствия.",
              },
              {
                title: "Поддерживать",
                body: "Специализированная служба поддержки клиентов готова оказать помощь в сборке и устранении неполадок.",
              },
            ],
          },
        ],
      },
    },
  },
];

export const accessoryBanners: AccessoryProduct[] = accessoryProducts;

export function getAccessoryBySlug(slug: string): AccessoryProduct | undefined {
  return accessoryProducts.find((a) => a.slug === slug);
}
