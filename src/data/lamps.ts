import type { Locale, MaskMedia, MaskTranslation } from "./masks";

export type StrategicCard = { title: string; body: string };

export interface LampProduct {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  media: MaskMedia[];
  topGalleryCount: number;
  /** Imagine din `media` pentru banda „aplicații” (pagină clean / default); ex. fișierul jos-6. */
  applicationsMediaPath?: string;
  translations: Record<Locale, MaskTranslation>;
  /** Layout produs apropiat de stil clinic / REDDOT: alb, gri deschis, secțiuni aerisite */
  cleanProductPage?: boolean;
  /** Bandă 4 coloane sub hero (fără consum de imagini „jos”) */
  strategicBand?: Record<Locale, { headline: string; cards: StrategicCard[] }>;
  /** Bandă 3 carduri după prima secțiune cu imagine „jos” (ex. beneficii + jos-1). */
  therapyRulesBand?: Record<
    Locale,
    { headline: string; subheadline?: string; cards: StrategicCard[] }
  >;
  /** Tabel specificații după blocurile narative din coadă (`defaultAfterSpecs`), ex. după imaginea jos-4. */
  specsAfterDetailSections?: boolean;
  /** Secțiunea „aplicații” după tabelul de specificații (ex. control / jos-5), păstrând restul în `defaultAfterSpecs` înainte de tabel. */
  applicationsAfterSpecsTable?: boolean;
}

const tCommon = (
  roTitle: string,
  roShort: string,
  ruTitle: string,
  ruShort: string,
): Record<Locale, MaskTranslation> => ({
  ro: {
    title: roTitle,
    modelShort: roShort,
    subtitle: "LED pentru terapie cu lumină roșie — detalii complete în curând.",
    description:
      "Descrierea completă în limba română va fi disponibilă în curând. Poți selecta modelul din gamă sau ne poți contacta pentru ofertă.",
    highlights: [
      "Construcție profesională seria FS7.",
      "Potrivit pentru spații comerciale și uz personal.",
      "Consultanță și suport Red Light Therapy.",
    ],
    benefitsTitle: "De ce să alegi acest model",
    benefits: [
      "Gamă coerentă de panouri cu aceeași filozofie de calitate.",
      "Compatibil cu standardele de siguranță pentru dispozitive LED.",
      "Ideal pentru integrare în rutine de wellness și recuperare.",
    ],
    usageTitle: "Utilizare",
    usage: [
      "Urmează instrucțiunile din manualul produsului (va fi publicat odată cu descrierea completă).",
      "Păstrează distanța recomandată față de dispozitiv pentru confort și eficiență.",
    ],
    testimonialsTitle: "Încredere și calitate",
    testimonials: [
      "Red Light Therapy oferă dispozitive testate și suport local pentru clienții din Republica Moldova.",
    ],
    detailHeading: "Detalii și imagini",
    specsIntroTitle: "Specificații",
    specsTitle: "Specificații tehnice",
    specs: {
      "Informații": "Detalii complete în curând",
    },
  },
  ru: {
    title: ruTitle,
    modelShort: ruShort,
    subtitle: "LED для красной светотерапии — полное описание скоро.",
    description:
      "Полное описание на русском языке будет добавлено позже. Вы можете выбрать модель из линейки или связаться с нами для коммерческого предложения.",
    highlights: [
      "Профессиональная серия FS7.",
      "Подходит для коммерческих помещений и домашнего использования.",
      "Консультации и поддержка Red Light Therapy.",
    ],
    benefitsTitle: "Почему эта модель",
    benefits: [
      "Единая линейка панелей с проверенным качеством.",
      "Соответствие требованиям безопасности для LED-устройств.",
      "Подходит для wellness и восстановления.",
    ],
    usageTitle: "Применение",
    usage: [
      "Следуйте инструкции из руководства (будет опубликовано вместе с полным описанием).",
      "Соблюдайте рекомендованное расстояние до панели для комфорта и эффективности.",
    ],
    testimonialsTitle: "Надёжность",
    testimonials: [
      "Red Light Therapy предоставляет проверенные устройства и локальную поддержку клиентам в Молдове.",
    ],
    detailHeading: "Подробности и изображения",
    specsIntroTitle: "Характеристики",
    specsTitle: "Технические характеристики",
    specs: {
      Информация: "Полные данные скоро",
    },
  },
});

const rdpro300Fs7T = tCommon("RD Pro 300 FS7", "RD 300", "RD Pro 300 FS7", "RD 300");

const rdpro300Fs7Copy: Record<Locale, MaskTranslation> = {
  ro: {
    ...rdpro300Fs7T.ro,
    subtitle:
      "RDPro300-FS7: 7 lungimi de undă, precizie clinică — control de pe telefon.",
    description:
      "Experimentați o precizie fără precedent cu RDPro300-FS7. Utilizați șapte lungimi de undă terapeutice, o sursă de alimentare cu două cipuri și setări complet reglabile ale pulsului și intensității - toate direct de pe smartphone.",
    highlights: [
      "7 lungimi de undă spectrale: de la lumină albastră de 480 nm la infraroșu de 1060 nm.",
      "Aplicație și telecomandă complete: reglați modul puls, reglarea intensității luminoase și cronometrele (aplicația este în curs de actualizare).",
      "Certificări FDA, CE și RoHS: confirmă siguranța și calitatea de grad medical.",
    ],
    featuresTitle: "Caracteristici/Beneficii cheie",
    benefitsTitle:
      "De la suprafața pielii până în straturile cele mai profunde: lungimea de undă potrivită pentru fiecare nevoie.",
    benefitsIntro:
      "RDPRO300-FS7 oferă practicienilor și utilizatorilor un control fără precedent. Fiecare dintre cele 7 lungimi de undă terapeutice poate fi ajustată individual de la 0 la 100% luminozitate, permițând crearea unor protocoale de tratament extrem de precise și personalizabile.",
    benefitsListHeading: "Defalcarea lungimii de undă:",
    benefits: [
      "480 nm (Albastru): Purifică și calmează pielea cu lumină albastră direcționată.",
      "630–660 nm (Roșu): Lumina roșie stimulează producția de colagen și restabilește tinerețea și vitalitatea.",
      "810–850 nm (Infraroșu apropiat): Calmează mușchii și articulațiile cu lumină infraroșie apropiată.",
      "1060 nm (Infraroșu apropiat): Atingeți țesuturile adânci pentru un efect terapeutic maxim cu cea mai avansată lumină infraroșie a noastră.",
    ],
    usageTitle: "De ce sunt importante LED-urile cu două cipuri?",
    usage: [
      "Fiecare LED individual conține mai multe lungimi de undă.",
      "Acest lucru asigură o distribuție perfect uniformă a luminii terapeutice pentru rezultate superioare.",
    ],
    metricsTitle: "Conceput pentru profesioniști",
    metrics: [
      "Intensitate radiantă maximă: >118 mW/cm² la 6 inci",
      "Certificări: FDA, FCC, CE, RoHS",
      "Garanție: 3 ani",
      "Durata de viață a LED-ului: 50.000 de ore",
      "Emisii EMF: neglijabile.",
    ],
    testimonialsAfterMetrics: true,
    testimonialsQuote: true,
    testimonialsTitle: "Încredere acordată practicienilor.",
    testimonials: [
      "„Capacitatea de a controla frecvența pulsului și de a comuta între lungimi de undă pentru diferiți pacienți mi-a revoluționat practica. RDPro300-FS7 este un adevărat instrument de bază în practica clinică.”",
      "- Dr. Allen Cheng, Clinica FG",
    ],
    applicationsTitle: "Sisteme de control inteligente și versatile",
    applicationsLead: "Control nestânjenit la îndemână",
    applicationsIntro: "Gestionați cu ușurință toate aspectele terapiei dvs.:",
    applications: [
      "Ecran tactil încorporat: Interfață intuitivă pentru setări simple.",
      "Telecomandă wireless: Telecomandă convenabilă.",
      "Aplicație mobilă dedicată: Oferă acces la opțiuni avansate de programare, vă permite să salvați protocoale personalizate și să gestionați mai multe dispozitive (ideal pentru clinici).",
    ],
    specsIntroTitle:
      "Conceput pentru profesioniști, construit pentru performanță ridicată și parteneriate eficiente.",
    specsTitle: "Specificații tehnice",
    specsColumnFeature: "Caracteristică",
    specsColumnValue: "Specificație",
    specs: {
      "Număr model": "RDPro300-FS7",
      "LED-uri (buc.)": "60",
      "Lungimi de undă": "480:630:660:810:830:850:1060 nm (setări personalizate acceptate)",
      LED: "Cu un singur cip / cu două cipuri",
      "Mod inteligent": "Da",
      "Tensiune / alimentare de intrare": "AC 100-240V",
      "Consum de energie": "99W±5%W",
      "Unghi fascicul": "30°",
      Dimensiuni: "270×230×65 mm",
      "Greutate netă (kg)": "3,24",
      "Intensitate radiantă (mW/cm²)": ">118, la 6 inci",
      "Ventilatoare de răcire": "1",
      "Durata de viață a LED-ului (ore)": "50.000",
      "Radiații EMF": "- Neglijabile",
      "Garanție (ani)": "3",
      Temporizator: "1-30 min",
      "Impuls (doar infraroșu apropiat)": "0-9999 Hz",
      "Regulator de intensitate luminoasă": "0%-100%",
      Comenzi: "Ecran tactil + Telecomandă + Aplicație",
      "Mediu de lucru": "-10°~45°",
      PowerShell: "SPCC",
      Certificare: "FDA/FCC/CE/ROHS",
      "Dimensiuni ambalaj (cm)": "—",
      "Greutate brută (kg)": "6,00",
      Accesorii:
        "1. Lampă de terapie LED, 2. Protecție pentru ochi, 3. Mâner, 4. Telecomandă, 5. Cablu de alimentare, 6. Cablu de conectare.",
    },
  },
  ru: {
    ...rdpro300Fs7T.ru,
    subtitle:
      "RDPro300-FS7: 7 длин волн, клиническая точность — управление со смартфона.",
    description:
      "Оцените беспрецедентную точность с RDPro300-FS7. Используйте семь терапевтических длин волн, двухчиповый источник питания и полностью регулируемые параметры импульса и интенсивности — и все это со своего смартфона.",
    highlights: [
      "7 спектральных длин волн : от 480 нм синего света до 1060 нм инфракрасного излучения.",
      "Полноценное приложение и пульт дистанционного управления: настройка импульсного режима, затемнения и таймеров (приложение находится в процессе обновления).",
      "Сертификаты FDA, CE, RoHS: подтверждение безопасности и высокого качества на медицинском уровне.",
    ],
    featuresTitle: "Основные характеристики/преимущества",
    benefitsTitle:
      "От поверхности кожи до глубоких слоев: правильная длина волны для любых потребностей.",
    benefitsIntro:
      "Аппарат RDPRO300-FS7 предоставляет практикующим врачам и пользователям беспрецедентный контроль. Каждая из 7 терапевтических длин волн может быть индивидуально настроена в диапазоне яркости от 0 до 100%, что позволяет создавать высокоточные и настраиваемые протоколы лечения.",
    benefitsListHeading: "Разбор длин волн:",
    benefits: [
      "480 нм (синий): Очищает и успокаивает кожу с помощью направленного синего света.",
      "630–660 нм (красный): Красный свет стимулирует выработку коллагена и восстанавливает молодость и жизненную силу.",
      "810–850 нм (ближний инфракрасный диапазон): успокаивает мышцы и суставы с помощью ближнего инфракрасного света.",
      "1060 нм (ближний инфракрасный диапазон): Достигайте глубоких тканей для максимального терапевтического эффекта с помощью нашего самого современного инфракрасного излучения.",
    ],
    usageTitle: "Почему важны двухчиповые светодиоды?",
    usage: [
      "В каждом отдельном светодиоде содержится несколько длин волн.",
      "Обеспечивает идеально однородное распределение терапевтического света для достижения превосходных результатов.",
    ],
    metricsTitle: "Разработано для профессионалов",
    metrics: [
      "Максимальная интенсивность излучения: >118 мВт/см² на расстоянии 6 дюймов",
      "Сертификаты: FDA, FCC, CE, RoHS",
      "Гарантия: 3 года",
      "Срок службы светодиодов: 50 000 часов.",
      "Излучение ЭМП: пренебрежимо малое.",
    ],
    testimonialsAfterMetrics: true,
    testimonialsQuote: true,
    testimonialsTitle: "Пользуется доверием практикующих специалистов.",
    testimonials: [
      "«Возможность контролировать частоту импульсов и переключаться между длинами волн для разных пациентов произвела революцию в моей практике. RDPro300-FS7 — это настоящая рабочая лошадка в клинической практике».",
      "- Доктор Аллен Ченг, клиника FG",
    ],
    applicationsTitle: "Интеллектуальные И Универсальные Системы Управления",
    applicationsLead: "Беспрепятственный контроль у вас под рукой",
    applicationsIntro: "Управляйте всеми аспектами терапии с легкостью:",
    applications: [
      "Встроенный сенсорный экран: интуитивно понятный интерфейс для непосредственной настройки.",
      "Беспроводной пульт дистанционного управления: удобное управление на расстоянии.",
      "Специальное мобильное приложение: открывает доступ к расширенным возможностям программирования, позволяет сохранять пользовательские протоколы и управлять несколькими устройствами (идеально подходит для клиник).",
    ],
    specsIntroTitle:
      "Разработано Для Профессионалов, Создано Для Высокой Производительности И Эффективного Партнерства.",
    specsTitle: "Технические Характеристики",
    specsColumnFeature: "Особенность",
    specsColumnValue: "Спецификация",
    specs: {
      "Номер модели": "RDPro300-FS7",
      "Светодиоды (шт.)": "60",
      "Длины волн":
        "480:630:660:810:830:850:1060 нм (поддержка пользовательских настроек)",
      LED: "Однокристальный / Двухкристальный",
      "Интеллектуальный режим": "Да",
      "Напряжение/Входная мощность": "AC 100-240V",
      "Потребление электроэнергии": "99W±5%W",
      BeamAngle: "30°",
      Размеры: "270×230×65 мм",
      "N.W (кг)": "3.24",
      "Интенсивность излучения (мВт/см²)": ">118, на 6 дюймах",
      "Вентиляторы охлаждения": "1",
      "Срок службы светодиодов (часы)": "50 000",
      "Излучение ЭМП": "-Незначительный",
      "Гарантия (лет)": "3",
      Таймер: "1-30 мин",
      "Импульсный (только ближний инфракрасный)": "0-9999 Гц",
      Диммер: "0%-100%",
      "Элементы управления":
        "Сенсорный экран + Пульт дистанционного управления + Приложение",
      "Рабочая среда": "-10°~45°",
      PowerShell: "SPCC",
      Сертификация: "FDA/FCC/CE/ROHS",
      "Размер упаковки (см)": "—",
      "G.W (кг)": "6.00",
      Аксессуары:
        "1. Светодиодный терапевтический светильник, 2. Защита глаз, 3. Ручка, 4. Пульт дистанционного управления, 5. Кабель питания, 6. Соединительный кабель.",
    },
  },
};

/** Conținut complet pagină produs — RD Pro 3000 FS7 (6 imagini „jos” = 6 secțiuni + tabel specificații). */
const rdpro3000Fs7Copy: Record<Locale, MaskTranslation> = {
  ro: {
    title: "RD Pro 3000 FS7",
    modelShort: "RD 3000",
    subtitle: "RDPro3000-FS7: un nou standard în bunăstarea profesională.",
    description:
      "Vă prezentăm RDPro3000-FS7: un sistem de terapie cu lumină pentru întregul corp fără compromisuri, conceput pentru a deveni piesa centrală a spațiului dumneavoastră. Obțineți rezultate de neegalat, atrageți clienți premium și poziționați-vă brandul ca lider în wellness.",
    highlights: [
      "Imersiune completă a corpului până la adâncime de 150 cm: 600 LED-uri dual-chip.",
      "Spectru terapeutic cu 7 lungimi de undă: de la 480 nm până la 1060 nm (infraroșu apropiat adânc).",
      "Conceput pentru uz comercial: carcasă robustă, 8 ventilatoare de răcire și suporturi motorizate de înaltă calitate.",
    ],
    benefitsTitle: "Este mai mult decât o simplă comoditate. Este un atu strategic.",
    benefitsIntro:
      "RDPRO3000-FS oferă practicienilor și utilizatorilor un control fără precedent. Luminozitatea fiecăreia dintre cele 7 lungimi de undă terapeutice poate fi ajustată individual de la 0 la 100%, permițând crearea unor protocoale de tratament extrem de precise și personalizabile.",
    benefitsListHeading: "Distribuția lungimii de undă:",
    benefits: [
      "480 nm (Albastru): Curăță și calmează pielea cu lumină albastră țintită.",
      "630–660 nm (Roșu): Stimulează producția de colagen și restabilește tinerețea și vitalitatea cu lumină roșie.",
      "810–850 nm (Infraroșu apropiat): Calmează mușchii și articulațiile cu lumină infraroșie apropiată.",
      "1060 nm (Infraroșu apropiat): Atinge țesuturile profunde pentru un efect terapeutic maxim cu cea mai avansată lumină infraroșie a noastră.",
    ],
    testimonialsTitle: "Îi susținem pe cei mai buni din lume.",
    testimonials: [
      "În sport, recuperarea este totul. Am ales RDPro3000-FS7 pentru centrul de recuperare al echipei noastre, deoarece este cel mai puternic și cuprinzător sistem de pe piață. Este o parte integrantă a rutinei zilnice a sportivilor noștri. — Hannes",
    ],
    usageTitle: "Integrare ușoară. Funcționare impecabilă.",
    usage: [
      "Standurile RDPro3000-FS7 sunt concepute pentru medii profesionale solicitante. Alegeți sistemul de montare care se potrivește cel mai bine fluxului dvs. de lucru. Atât stativele pneumatice, cât și cele electrice premium oferă o poziționare verticală și orizontală lină și fiabilă, asigurând confort și comoditate atât pentru personal, cât și pentru clienți.",
    ],
    engineeringTitle: "Conceput pentru zece ani de funcționare impecabilă.",
    engineering: [
      "600 de LED-uri cu două cipuri de 5W: Oferă o combinație perfect uniformă de 7 lungimi de undă pentru o eficacitate terapeutică maximă.",
      "Sursă de alimentare de 939W: Un sistem de alimentare intern fiabil asigură performanță maximă.",
      "8 ventilatoare de răcire ultra-silențioase: Asigură un control optim al temperaturii în timpul funcționării continue pe tot parcursul zilei.",
      "Certificat FDA, CE și RoHS: Testat independent pentru siguranță, calitate și performanță.",
    ],
    metricsTitle: "Parametri importanți",
    metrics: [
      "Intensitate radiantă maximă: 115 mW/cm² la 15 cm.",
      "Putere optică totală în wați: Cea mai bună din clasa sa.",
      "Durata de viață a LED-ului: 50.000 de ore.",
      "Garanție: 3 ani garanție pentru uz comercial.",
    ],
    applicationsTitle: "Sisteme inteligente și universale de control",
    applicationsLead: "Control perfect la îndemână",
    applicationsIntro: "Gestionați cu ușurință fiecare aspect al terapiei dvs.:",
    applications: [
      "Ecran tactil încorporat: Interfață intuitivă pentru o configurare simplă.",
      "Telecomandă wireless: Telecomandă convenabilă.",
      "Aplicație mobilă dedicată: Oferă acces la opțiuni avansate de programare, vă permite să salvați protocoale personalizate și să gestionați mai multe dispozitive (ideal pentru clinici).",
    ],
    detailHeading: "Descoperiți RDPro3000-FS7",
    specsIntroTitle: "Specificații tehnice",
    specsTitle: "Parametri",
    specs: {
      "Număr model": "RDPro3000-FS7",
      "LED-uri (buc.)": "600",
      LED: "Single-chip / Dual-chip",
      "Lungimi de undă": "480:630:660:810:830:850:1060 nm (setări personalizate acceptate)",
      "Material carcasă": "SPCC",
      "Mod inteligent": "Da",
      "Tensiune / alimentare": "AC 100–240 V",
      "Consum energetic": "939 W",
      "Unghi fascicul": "30°",
      "Dimensiuni (cm)": "150 × 42 × 6,6",
      "Greutate netă (kg)": "21,5",
      "Intensitate radiantă (mW/cm²)": "115 la 15 cm",
      "Ventilatoare răcire": "8",
      "Durată de viață LED (ore)": "50.000",
      "Emisii EMF": "Neglijabile",
      "Garanție (ani)": "3",
      Temporizator: "1–30 min",
      "Impuls (doar NIR)": "0–9999 Hz",
      Dimmer: "0% – 100%",
      Comenzi: "Ecran tactil + telecomandă + aplicație",
      "Mediu de operare": "−10° ~ 45°",
      PowerShell: "SPCC",
      Certificare: "FDA / FCC / CE / RoHS",
      "Greutate brută ambalaj (kg)": "30,0",
    },
  },
  ru: {
    title: "RD Pro 3000 FS7",
    modelShort: "RD 3000",
    subtitle: "RDPro3000-FS7: новый стандарт профессионального благополучия.",
    description:
      "Представляем RDPro3000-FS7: бескомпромиссную систему светотерапии всего тела, разработанную стать центральным элементом вашего учреждения. Добивайтесь непревзойдённых результатов, привлекайте премиум-клиентов и укрепляйте бренд как лидера в wellness.",
    highlights: [
      "Полное погружение тела на глубину до 150 см: 600 двухчиповых светодиодов.",
      "7-волновой терапевтический спектр: от 480 нм до глубокого ИК 1060 нм.",
      "Для коммерческого использования: прочный корпус, 8 вентиляторов охлаждения и качественные моторизованные подставки.",
    ],
    benefitsTitle: "Это больше, чем просто удобство. Это стратегический актив.",
    benefitsIntro:
      "Аппарат RDPRO3000-FS предоставляет практикующим врачам и пользователям беспрецедентные возможности контроля. Яркость каждой из 7 терапевтических длин волн может регулироваться индивидуально в диапазоне от 0 до 100%, что позволяет создавать высокоточные и настраиваемые протоколы лечения.",
    benefitsListHeading: "Разбор длин волн:",
    benefits: [
      "480 нм (синий): Очищает и успокаивает кожу с помощью направленного синего света.",
      "630–660 нм (красный): Стимулирует выработку коллагена и восстанавливает молодость и жизненную силу с помощью красного света.",
      "810–850 нм (ближний инфракрасный диапазон): успокаивает мышцы и суставы с помощью ближнего инфракрасного света.",
      "1060 нм (ближний инфракрасный диапазон): Достигайте глубоких тканей для максимального терапевтического эффекта с помощью нашего самого современного инфракрасного излучения.",
    ],
    testimonialsTitle: "Мы обеспечиваем энергией лучшие в мире",
    testimonials: [
      "В спорте восстановление – это всё. Мы выбрали RDPro3000-FS7 для восстановительного центра нашей команды, потому что это самая мощная и комплексная система на рынке. Она является неотъемлемой частью ежедневной рутины наших спортсменов. — Ханнес",
    ],
    usageTitle: "Простая интеграция. Безупречная работа.",
    usage: [
      "Подставка RDPro3000-FS7 разработана для работы в сложных профессиональных условиях. Выберите систему крепления, которая соответствует вашему рабочему процессу. Как пневматическая, так и высококлассная электрическая подставка обеспечивают плавное и надежное вертикальное и горизонтальное позиционирование, гарантируя удобство и комфорт как для персонала, так и для клиентов.",
    ],
    engineeringTitle: "Создан для десяти лет безупречной работы.",
    engineering: [
      "600 светодиодов с двумя чипами по 5 Вт: Обеспечивает идеально однородную смесь из 7 длин волн для максимальной терапевтической эффективности.",
      "Электростанция мощностью 939 Вт: Надежная внутренняя система электропитания обеспечивает максимальную производительность.",
      "8 сверхтихих вентиляторов охлаждения: Обеспечивает оптимальное регулирование температуры при непрерывной работе в течение всего дня.",
      "Сертифицировано FDA, CE и RoHS: Проверено независимыми экспертами на безопасность, качество и работоспособность.",
    ],
    metricsTitle: "Показатели, которые имеют значение",
    metrics: [
      "Максимальная интенсивность излучения: 115 мВт/см² на расстоянии 15 см.",
      "Суммарная оптическая мощность в ваттах: лучшая в своем классе.",
      "Срок службы светодиодов: 50 000 часов.",
      "Гарантия: 3-летняя гарантия для коммерческого использования.",
    ],
    applicationsTitle: "Интеллектуальные и универсальные системы управления",
    applicationsLead: "Беспрепятственный контроль у вас под рукой",
    applicationsIntro: "Управляйте всеми аспектами терапии с легкостью:",
    applications: [
      "Встроенный сенсорный экран: интуитивно понятный интерфейс для непосредственной настройки.",
      "Беспроводной пульт дистанционного управления: удобное управление на расстоянии.",
      "Специальное мобильное приложение: открывает доступ к расширенным возможностям программирования, позволяет сохранять пользовательские протоколы и управлять несколькими устройствами (идеально подходит для клиник).",
    ],
    detailHeading: "RDPro3000-FS7 подробнее",
    specsIntroTitle: "Технические характеристики",
    specsTitle: "Параметры",
    specs: {
      "Номер модели": "RDPro3000-FS7",
      "Светодиоды (шт.)": "600",
      LED: "Однокристальный / двухкристальный",
      "Длины волн": "480:630:660:810:830:850:1060 нм (пользовательские настройки)",
      "Материал корпуса": "SPCC",
      "Интеллектуальный режим": "Да",
      "Напряжение / питание": "AC 100–240 В",
      "Потребление": "939 Вт",
      "Угол луча": "30°",
      "Размеры (см)": "150 × 42 × 6,6",
      "Масса нетто (кг)": "21,5",
      "Интенсивность (мВт/см²)": "115 на 15 см",
      "Вентиляторы": "8",
      "Ресурс LED (ч)": "50 000",
      "EMF": "Незначительный",
      "Гарантия (лет)": "3",
      Таймер: "1–30 мин",
      "Импульс (только БИК)": "0–9999 Гц",
      Диммер: "0% – 100%",
      Управление: "Сенсор + пульт + приложение",
      "Рабочая среда": "−10° ~ 45°",
      PowerShell: "SPCC",
      Сертификация: "FDA / FCC / CE / RoHS",
      "Вес брутто (кг)": "30,0",
    },
  },
};

const rdpro1500Fs7T = tCommon(
  "RD Pro 1500 FS7",
  "RD 1500",
  "RD Pro 1500 FS7",
  "RD 1500",
);

const rdpro1500Fs7Copy: Record<Locale, MaskTranslation> = {
  ro: {
    ...rdpro1500Fs7T.ro,
    testimonials: [],
    subtitle: "RDPro1500-FS7: control independent pentru 7 lungimi de undă.",
    description:
      "Duceți-vă afacerea la nivelul următor cu RDPro1500-FS7. Cel mai mare panou al nostru, cu 7 lungimi de undă, oferă o acoperire maximă și o putere de nivel clinic, este complet controlabil prin intermediul unei aplicații (necesită actualizare) și este optimizat pentru medii profesionale.",
    featuresTitle: "Caracteristici/beneficii cheie",
    highlights: [
      "Acoperire completă: panou de 91 cm cu 300 de LED-uri cu cip dual.",
      "Putere de ieșire maximă: 131 mW/cm² pentru eficiență maximă.",
      "Opțiuni de montare profesională: alegeți dintre patru tipuri de brațe de fototerapie.",
    ],
    benefitsTitle:
      "Beneficii spectru complet – 7 lungimi de undă controlabile individual.",
    benefitsIntro:
      "RDPRO1500-FS oferă practicienilor și utilizatorilor un control fără precedent. Luminozitatea fiecăreia dintre cele 7 lungimi de undă terapeutice poate fi ajustată individual de la 0 la 100%, permițând crearea unor protocoale de tratament extrem de precise și personalizabile.",
    benefitsListHeading: "Defalcarea lungimii de undă:",
    benefits: [
      "480 nm (albastru): Beneficii superficiale, claritate a pielii.",
      "630–660 nm (roșu): Colagen, rejuvenare a pielii, durere superficială.",
      "810–850 nm (infraroșu apropiat): Repararea țesuturilor profunde, recuperarea musculară, sănătatea articulațiilor, circulație.",
      "1060 nm (infraroșu apropiat): Penetrare maximă, potențiale efecte pozitive asupra funcției cognitive și a țesuturilor mai profunde.",
    ],
    usageTitle: "Integrare perfectă în spațiul dumneavoastră",
    usage: [
      "Suport mobil de podea: Versatilitate și stabilitate pentru utilizare în mai multe camere.",
      "Suport pneumatic: Reglare lină a înălțimii cu amortizor pe gaz.",
      "Suport inferior: Suport mai sigur și mai stabil pentru panourile de terapie cu lumină.",
      "Braț rotativ pe o singură parte: Acest braț permite rotirea flexibilă a panoului de terapie cu lumină cu 90° și 180°.",
    ],
    metricsTitle: "Performanța vorbește de la sine.",
    metrics: [
      "Intensitate luminoasă: 131 mW/cm² la 6 inci.",
      "LED-uri: 300 x 5W, cu cip dual",
      "Lungimi de undă: 480 nm | 630 nm | 660 nm | 810 nm | 830 nm | 850 nm | 1060 nm",
      "Control: Aplicație | Telecomandă | Ecran tactil",
      "Caracteristici: Mod puls (0-9999 Hz) și reglabil (0-100%).",
    ],
    applicationsTitle: "Sisteme de control inteligente și versatile",
    applicationsLead: "Control nestânjenit la îndemână",
    applicationsIntro: "Gestionați cu ușurință toate aspectele terapiei dvs.:",
    applications: [
      "Ecran tactil încorporat: Interfață intuitivă pentru setări simple.",
      "Telecomandă wireless: Telecomandă convenabilă.",
      "Aplicație mobilă dedicată: Oferă acces la opțiuni avansate de programare, vă permite să salvați protocoale personalizate și să gestionați mai multe dispozitive (ideal pentru clinici).",
    ],
    safetyTitle: "Fiabilitate pe care poți construi o afacere.",
    safety: [
      "Cu o construcție durabilă din fier și aluminiu, patru ventilatoare interne de răcire și o durată de viață a LED-urilor de 50.000 de ore, RDPro1500-FS7 este conceput pentru utilizare comercială continuă. Pentru liniștea dumneavoastră, oferim o garanție completă de 3 ani.",
    ],
    specsIntroTitle:
      "Conceput pentru profesioniști, construit pentru performanță ridicată și parteneriate eficiente.",
    specsTitle: "Specificații tehnice",
    specsColumnFeature: "Caracteristică",
    specsColumnValue: "Specificație",
    specs: {
      "Număr model": "RDPRO1500-FS7",
      "LED-uri": "300 LED-uri de înaltă intensitate la 5W fiecare",
      "Lungimi de undă": "480:630:660:810:830:850:1060 nm (Control individual)",
      LED: "Chip unic / Chip dual",
      "Reglare luminozitate": "0-100% pentru fiecare lungime de undă",
      "Mod pulsat (IR)": "0-9999 Hz, controlabil individual",
      "Intensitate luminoasă": "131 mW/cm² la 6 inci",
      "Consum de energie": "467W±5%",
      Amperaj: "AC 100-240V",
      Dimensiuni: "91 x 30 x 6,5 cm",
      Greutate: "10,99 kg",
      "Zonă maximă de tratament":
        "119 x 61 cm (ideal pentru tratamentul pe jumătate de corp)",
      "Unghi de fascicul": "30 de grade",
      Temporizator: "1-30 minute, timp reglabil",
      "Metode de control": "Panou tactil, telecomandă, aplicație mobilă.",
      "Răcire": "4 ventilatoare de înaltă performanță",
      "Emisie EMF": "Scăzută",
      "Material carcasă": "SPCC",
      "Durata de viață a LED-ului": "Peste 50.000 de ore",
      "Garanție": "3 ani",
      Certificări: "CE, ROHS, FDA, FCC",
      "Mediu de funcționare": "-10°C ~ 45°C",
      "Opțiuni de instalare":
        "Cârlig pentru ușă, accesorii de montare (incluse). Opțional: Suport de podea, suport pneumatic, suport electric.",
      "Dimensiuni pachet": "114*42,5*18",
      "Greutate brută (ambalare)": "15,5 kg",
      Accesorii:
        "Lampă de terapie LED (1 buc.), cârlig pentru ușă (1 buc.), elemente de fixare (1 buc.), cablu de conectare (1 buc.), protecție pentru ochi (1 buc.), telecomandă (1 buc.), cablu de alimentare (1 buc.), cablaj și fitinguri cu deconectare rapidă (1 buc.).",
    },
  },
  ru: {
    ...rdpro1500Fs7T.ru,
    testimonials: [],
    subtitle: "RDPro1500-FS7: независимый контроль для 7 волн.",
    description:
      "Поднимите свой бизнес на новый уровень с помощью RDPro1500-FS7. Наша самая большая панель с 7 длинами волн обеспечивает максимальное покрытие и мощность клинического уровня, полностью управляется через приложение (требуется обновление) и оптимизирована для профессиональной среды.",
    featuresTitle: "Основные характеристики/преимущества",
    highlights: [
      "Полное покрытие всего тела: панель размером 91 см с 300 двухчиповыми светодиодами.",
      "Пиковая выходная мощность: 131 мВт/см² для максимальной эффективности.",
      "Профессиональные варианты крепления: на выбор доступны четыре типа держателей для фототерапии.",
    ],
    benefitsTitle:
      "Преимущества полного спектра — 7 индивидуально управляемых длин волн.",
    benefitsIntro:
      "Аппарат RDPRO1500-FS предоставляет практикующим врачам и пользователям беспрецедентный контроль. Яркость каждой из 7 терапевтических длин волн может регулироваться индивидуально в диапазоне от 0 до 100%, что позволяет создавать высокоточные и настраиваемые протоколы лечения.",
    benefitsListHeading: "Разбор длин волн:",
    benefits: [
      "480 нм (синий): Поверхностные преимущества, чистота кожи.",
      "630–660 нм (красный): коллаген, омоложение кожи, поверхностная боль.",
      "810–850 нм (ближний инфракрасный диапазон): глубокое восстановление тканей, восстановление мышц, здоровье суставов, кровообращение.",
      "1060 нм (ближний инфракрасный диапазон): максимальное проникновение, потенциальное положительное влияние на когнитивные функции и более глубокие ткани.",
    ],
    usageTitle: "Бесшовная интеграция в ваше пространство",
    usage: [
      "Мобильная напольная подставка: Универсальность и стабильность для использования в нескольких помещениях.",
      "Пневматическая подставка: Плавная регулировка высоты с газовым амортизатором.",
      "Нижний кронштейн: Более безопасная и стабильная опора для панелей светотерапии.",
      "Вращающийся односторонний кронштейн: Этот кронштейн позволяет гибко поворачивать панель фототерапии на 90° и 180°.",
    ],
    metricsTitle: "Выступление, говорящее само за себя.",
    metrics: [
      "Интенсивность излучения: 131 мВт/см² на расстоянии 6 дюймов.",
      "Светодиоды: 300 x 5 Вт, двухчиповые",
      "Длины волн: 480 нм | 630 нм | 660 нм | 810 нм | 830 нм | 850 нм | 1060 нм",
      "Управление: приложение | пульт дистанционного управления | сенсорный экран",
      "Характеристики: Импульсный режим (0-9999 Гц) и диммер (0-100%).",
    ],
    applicationsTitle: "Интеллектуальные И Универсальные Системы Управления",
    applicationsLead: "Беспрепятственный контроль у вас под рукой",
    applicationsIntro: "Управляйте всеми аспектами терапии с легкостью:",
    applications: [
      "Встроенный сенсорный экран: интуитивно понятный интерфейс для непосредственной настройки.",
      "Беспроводной пульт дистанционного управления: удобное управление на расстоянии.",
      "Специальное мобильное приложение: открывает доступ к расширенным возможностям программирования, позволяет сохранять пользовательские протоколы и управлять несколькими устройствами (идеально подходит для клиник).",
    ],
    safetyTitle: "Надежность, на которой можно построить бизнес.",
    safety: [
      "Прочная конструкция из железа и алюминия, 4 внутренних вентилятора охлаждения и срок службы светодиодов в 50 000 часов делают RDPro1500-FS7 разработанным для непрерывной коммерческой эксплуатации. Для вашего спокойствия мы предоставляем на него комплексную 3-летнюю гарантию.",
    ],
    specsIntroTitle:
      "Разработано Для Профессионалов, Создано Для Высокой Производительности И Эффективного Партнерства.",
    specsTitle: "Технические Характеристики",
    specsColumnFeature: "Особенность",
    specsColumnValue: "Спецификация",
    specs: {
      "Номер модели": "RDPRO1500-FS7",
      "Светодиоды": "300 светодиодов высокой интенсивности по 5 Вт",
      "Длины волн":
        "480:630:660:810:830:850:1060 нм (Индивидуальный контроль)",
      LED: "Однокристальный / Двухкристальный",
      "Регулировка яркости": "0-100% для каждой длины волны",
      "Импульсный (ИК) режим": "0-9999 Гц, индивидуальное управление",
      "Интенсивность излучения": "131 мВт/см² при 6 дюймах",
      "Потребление электроэнергии": "467W±5%",
      Ампераж: "AC 100-240V",
      Размеры: "91 x 30 x 6,5 см",
      Масса: "10.99 KG",
      "Максимальная площадь обработки":
        "119 x 61 см (идеально подходит для съемки половины тела)",
      "Угол луча": "30 градусов",
      Таймер: "1-30 минут, регулируемое время",
      "Методы контроля":
        "Сенсорная панель, пульт дистанционного управления, мобильное приложение.",
      "Охлаждение": "4 высокопроизводительных вентилятора",
      "Излучение ЭМП": "Незначительный",
      "Материал оболочки": "SPCC",
      "Срок службы светодиодов": "Более 50 000 часов",
      "Гарантия": "3 года",
      "Сертификаты": "CE, ROHS, FDA, FCC",
      "Рабочая среда": "-10°C ~ 45°C",
      "Параметры установки":
        "Крючок для двери, крепежные элементы (в комплекте). Дополнительно: напольная подставка, пневматическая подставка, электрическая подставка.",
      "Размер упаковки": "114*42.5*18",
      "Вес брутто (упаковка)": "15.5 KG",
      Аксессуары:
        "Светодиодный терапевтический светильник (1 шт.), дверной крючок (1 шт.), крепежные элементы (1 шт.), соединительный кабель (1 шт.), средства защиты глаз (1 шт.), пульт дистанционного управления (1 шт.), кабель питания (1 шт.), кабельный жгут и быстроразъемные соединения (1 шт.).",
    },
  },
};

export const lampProducts: LampProduct[] = [
  {
    slug: "rdpro3000-fs7",
    name: "RD Pro 3000 FS7",
    price: "€100",
    priceValue: 100,
    topGalleryCount: 7,
    applicationsMediaPath: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-6.png",
    media: [
      {
        type: "video",
        path: "lampi/RDPro3000-FS7/RDPro3000-FS7-video.mp4",
        alt: "RD Pro 3000 FS7 video",
      },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-1.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-2.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-3.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-4.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-5.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-6.png", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-1.jpg", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-2.jpg", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-3.jpg", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-4.jpg", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-5.jpg", alt: "RD Pro 3000 FS7" },
      { type: "image", path: "lampi/RDPro3000-FS7/RDPro3000-FS7-jos-6.png", alt: "RD Pro 3000 FS7" },
    ],
    cleanProductPage: true,
    strategicBand: {
      ro: {
        headline: "Mai mult decât confort. Un activ strategic.",
        cards: [
          {
            title: "Consolidați-vă oferta de wellness",
            body: "Transformați-vă unitatea într-o destinație de top oferind servicii atractive din punct de vedere vizual și căutate la prețuri premium.",
          },
          {
            title: "Maximizați capacitatea clienților",
            body: "Puterea impecabilă și acoperirea largă vă permit să desfășurați sesiuni eficiente în mai puțin timp, permițându-vă să serviți mai mulți clienți zilnic.",
          },
          {
            title: "Atrageți o clientelă de elită",
            body: "De la sportivi profesioniști la directori de top, clienții exigenți caută facilități cu cele mai bune echipamente. RDPro3000-FS7 este un instrument de marketing puternic.",
          },
          {
            title: "Protejați-vă investiția pentru viitor",
            body: "Cu control complet asupra aplicațiilor și cea mai largă gamă de lungimi de undă, investiți într-o platformă construită pentru viitorul wellness-ului.",
          },
        ],
      },
      ru: {
        headline: "Это больше, чем удобство. Это стратегический актив.",
        cards: [
          {
            title: "Закрепите Свое Предложение В Сфере Оздоровления",
            body: "Превратите свое заведение в первоклассное место отдыха, предлагая визуально привлекательные и востребованные услуги по высоким ценам.",
          },
          {
            title: "Максимизация Пропускной Способности Клиентов",
            body: "Огромная мощность и широкий охват позволяют проводить эффективные сеансы за меньшее время, что дает вам возможность обслуживать больше клиентов ежедневно.",
          },
          {
            title: "Привлечение Элитной Клиентуры",
            body: "От профессиональных спортсменов до топ-менеджеров, взыскательные клиенты ищут объекты с самым лучшим оборудованием. RDPro3000-FS7 — это мощный маркетинговый инструмент.",
          },
          {
            title: "Обеспечьте Устойчивость Ваших Инвестиций В Будущем",
            body: "Благодаря полному управлению через приложение и самому широкому спектру длин волн, вы инвестируете в платформу, созданную для будущего оздоровления.",
          },
        ],
      },
    },
    translations: rdpro3000Fs7Copy,
  },
  {
    slug: "rdpro300-fs7",
    name: "RD Pro 300 FS7",
    price: "€100",
    priceValue: 100,
    topGalleryCount: 8,
    applicationsMediaPath: "lampi/RDPro300-FS7/RDPro300-FS7-jos-5.png",
    therapyRulesBand: {
      ro: {
        headline: "Terapia ta, regulile tale",
        cards: [
          {
            title: "Control inteligent prin aplicație",
            body: "Aplicația intuitivă îți oferă control complet. Alege lungimi de undă, setează cronometre și salvează protocoale personalizate.",
          },
          {
            title: "Mod pulsat avansat (0-9999 Hz)",
            body: "Utilizează lumină pulsată în infraroșu apropiat pentru a îmbunătăți stimularea celulară și rezultatele terapeutice - o caracteristică întâlnită de obicei doar în laboratoarele de cercetare.",
          },
          {
            title: "Reglare completă a intensității luminii (0-100%)",
            body: "Reglează intensitatea luminii pentru a se potrivi nivelului tău de confort sau nevoilor specifice de tratament, de la blând la intens.",
          },
        ],
      },
      ru: {
        headline: "Ваша Терапия, Ваши Правила",
        cards: [
          {
            title: "Управление Интеллектуальным Приложением",
            body: "Интуитивно понятное приложение предоставляет вам полный контроль. Выбирайте длины волн, устанавливайте таймеры и сохраняйте пользовательские протоколы.",
          },
          {
            title: "Расширенный Импульсный Режим (0-9999 Гц)",
            body: "Использование импульсного ближнего инфракрасного света для усиления клеточной стимуляции и терапевтических результатов — функция, обычно встречающаяся только в исследовательских лабораториях.",
          },
          {
            title: "Полнодиапазонное Затемнение (0-100%)",
            body: "Отрегулируйте интенсивность света в соответствии с вашим уровнем комфорта или конкретными потребностями в лечении, от мягкой до интенсивной.",
          },
        ],
      },
    },
    media: [
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-1.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-2.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-3.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-4.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-5.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-6.png", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-7.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-8.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-jos-1.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-jos-2.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-jos-3.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-jos-4.jpg", alt: "RD Pro 300 FS7" },
      { type: "image", path: "lampi/RDPro300-FS7/RDPro300-FS7-jos-5.png", alt: "RD Pro 300 FS7" },
    ],
    translations: rdpro300Fs7Copy,
  },
  {
    slug: "rdpro1500-fs7",
    name: "RD Pro 1500 FS7",
    price: "€100",
    priceValue: 100,
    topGalleryCount: 7,
    therapyRulesBand: {
      ro: {
        headline: "Nivel mai ridicat de bunăstare. Randamente mai rapide.",
        subheadline: "Investiție",
        cards: [
          {
            title: "Serviți mai mulți clienți",
            body: "Dispozitivul puternic, de dimensiuni normale, reduce durata sesiunilor, crescând fluxul de clienți și potențialul de venit.",
          },
          {
            title: "Oferiți mai multe servicii",
            body: "Cu 7 lungimi de undă (480–1060 nm), un singur dispozitiv permite o varietate de tratamente, de la revitalizarea pielii până la restaurarea profundă.",
          },
          {
            title: "Control de neegalat",
            body: "Utilizați aplicația pentru a crea și salva protocoale personalizate pentru diferiți clienți, asigurând rezultate repetabile și profesionale de fiecare dată.",
          },
        ],
      },
      ru: {
        headline: "Более Высокий Уровень Оздоровления. Более Быстрая Отдача.",
        subheadline: "Инвестиции",
        cards: [
          {
            title: "Обслуживать Больше Клиентов",
            body: "Полноразмерный и мощный прибор сокращает время сеансов, увеличивая поток клиентов и потенциальный доход.",
          },
          {
            title: "Предлагайте Больше Услуг",
            body: "Благодаря 7 длинам волн (480–1060 нм) один аппарат позволяет проводить разнообразные процедуры, от оздоровления кожи до глубокого восстановления.",
          },
          {
            title: "Непревзойденный Контроль",
            body: "Используйте приложение для создания и сохранения пользовательских протоколов для разных клиентов, обеспечивая повторяемые и профессиональные результаты каждый раз.",
          },
        ],
      },
    },
    specsAfterDetailSections: true,
    applicationsAfterSpecsTable: true,
    applicationsMediaPath: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-5.png",
    media: [
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-1.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-2.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-3.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-4.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-5.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-6.png", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-7.jpg", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-1.jpg", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-2.jpg", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-3.jpg", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-4.jpg", alt: "RD Pro 1500 FS7" },
      { type: "image", path: "lampi/RDPRO1500-FS7/RDPRO1500-FS7-jos-5.png", alt: "RD Pro 1500 FS7" },
    ],
    translations: rdpro1500Fs7Copy,
  },
  {
    slug: "rdpro6000-fs7",
    name: "RD Pro 6000 FS7",
    price: "€100",
    priceValue: 100,
    topGalleryCount: 6,
    media: [
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-1.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-2.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-3.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-4.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-5.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-6.png", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-jos-1.jpg", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-jos-2.jpg", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-jos-3.jpg", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-jos-4.jpg", alt: "RD Pro 6000 FS7" },
      { type: "image", path: "lampi/RDPro6000-FS7/fs7-jos-5.png", alt: "RD Pro 6000 FS7" },
    ],
    translations: tCommon(
      "RD Pro 6000 FS7",
      "RD 6000",
      "RD Pro 6000 FS7",
      "RD 6000",
    ),
  },
];

export const lampBanners: LampProduct[] = lampProducts;

export function getLampBySlug(slug: string): LampProduct | undefined {
  return lampProducts.find((l) => l.slug === slug);
}
