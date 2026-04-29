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
