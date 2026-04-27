import type { To } from "react-router-dom";

export type Locale = "ro" | "ru";

export interface MaskMedia {
  type: "video" | "image";
  path: string;
  alt: string;
}

export interface MaskTranslation {
  /** Denumire afișată pe pagina produsului (în limba aleasă). */
  title: string;
  /** Etichetă scurtă pentru selectorul de model. */
  modelShort: string;
  subtitle: string;
  description: string;
  highlights: string[];
  benefitsTitle: string;
  benefits: string[];
  usageTitle: string;
  usage: string[];
  includedTitle?: string;
  included?: string[];
  applicationsTitle?: string;
  applications?: string[];
  /** Recenzii / citate utilizatori (opțional). */
  testimonialsTitle?: string;
  testimonials?: string[];
  /** Utilizare sigură, întreținere, service (opțional). */
  safetyTitle?: string;
  safety?: string[];
  /** Titlul mare dintre hero și secțiunile detaliate. */
  detailHeading?: string;
  /** Titlu suplimentar deasupra tabelului tehnic, ca în paginile sursă. */
  specsIntroTitle?: string;
  specsTitle: string;
  specs: Record<string, string>;
}

export interface MaskProduct {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  media: MaskMedia[];
  /** Câte fișiere din `media` fac parte din galeria mare de sus (inclusiv video). Restul sunt pentru secțiunile de jos. */
  topGalleryCount?: number;
  to: To;
  translations: Record<Locale, MaskTranslation>;
}

export const maskProducts: MaskProduct[] = [
  {
    slug: "f2-aurora",
    name: "F2 Aurora Butterfly Light Therapy Mask",
    price: "€149",
    priceValue: 149,
    media: [
      {
        type: "video",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora.mp4",
        alt: "F2 Aurora video",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-1.jpg",
        alt: "F2 Aurora mask",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-2.jpg",
        alt: "F2 Aurora detail",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-1.jpg",
        alt: "F2 Aurora wavelengths",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-2.jpg",
        alt: "F2 Aurora usage",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-3.jpg",
        alt: "F2 Aurora coverage",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-4.jpg",
        alt: "F2 Aurora controller",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-5.jpg",
        alt: "F2 Aurora lifestyle",
      },
      {
        type: "image",
        path: "masti/F2 Aurora Butterfly Light Therapy Mask /f2-aurora-jos-6.jpg",
        alt: "F2 Aurora packaging",
      },
    ],
    to: "/masti/f2-aurora",
    translations: {
      ro: {
        title: "Mască de terapie cu lumină F2 Aurora Butterfly",
        modelShort: "F2 Aurora",
        subtitle:
          "Revoluționați îngrijirea pielii și sănătatea liniei părului: tratament de înaltă precizie cu lungimi de undă multiple într-un design elegant.",
        description:
          "Vă prezentăm masca LED Aurora Butterfly (F2) de la Red Light Therapy. Aceasta dispune de 352 de LED-uri (88 de elemente) și 4 moduri, inclusiv un mod special pentru părul fin. Fabricată cu o placare cu aur de înaltă calitate, masca este ideală pentru OEM și comerțul cu ridicata.",
        highlights: [
          "88 de LED-uri de înaltă densitate: acoperire completă a feței și a liniei părului.",
          "4 moduri de tratament țintite: iluminare, lifting, îndepărtarea acneei și netezire.",
          "Zonă dedicată restaurării liniei părului: tratament unic, țintit.",
          "Finisaj auriu luxos: construită din plastic ABS de înaltă calitate și policarbonat.",
        ],
        benefitsTitle: "Puterea terapiei cu lungimi de undă multiple",
        benefits: [
          "Masca Aurora Butterfly valorifică puterea a 88 de LED-uri de calitate medicală, oferind strategic o combinație sinergică de lungimi de undă pentru a aborda o gamă largă de probleme ale pielii și ale liniei părului. Fiecare mod este calibrat de experți pentru rezultate optime.",
          "Modul 1. Mod iluminare: îmbunătățește tenul. Beneficii cheie: conceput pentru a reduce hiperpigmentarea, a uniformiza tonusul pielii și a spori strălucirea generală. Lumina galbenă sporește strălucirea, iar lumina roșie și cea în infraroșu apropiat promovează repararea și vitalitatea celulară.",
          "Modul 2. Mod fermitate ten: conturează și tonifiază tenul. Beneficii cheie: stimulează producția de colagen și elastină, ajutând la reducerea liniilor fine, la îmbunătățirea fermității pielii și la restabilirea elasticității tinereții. Lumina în infraroșu apropiat, care pătrunde în profunzime, îmbunătățește regenerarea țesuturilor.",
          "Modul 3. Mod acnee: clarificare și calmare. Beneficii cheie: lumina albastră vizează și distruge bacteriile care cauzează acneea, iar lumina roșie și cea în infraroșu apropiat ajută la reducerea inflamației, la calmarea roșeții și la accelerarea vindecării pielii pentru un ten mai clar.",
          "Modul 4. Mod netezire: rafinează și catifelează. Beneficii cheie: îmbunătățește textura pielii, reduce roșeața și calmează pielea sensibilă. Lumina galbenă promovează drenajul limfatic, iar lumina în infraroșu apropiat susține sănătatea și elasticitatea generală a pielii.",
        ],
        usageTitle: "Design inovator fluture și focalizare pe linia părului",
        usage: [
          "Conturul unic Aurora Butterfly oferă o acoperire facială completă, inclusiv zonele adesea neglijate. Dispune de o zonă dedicată cu 56 de LED-uri roșii cu lungime de undă de 650 nm care vizează direct linia părului, promovând restaurarea părului și un aspect mai sănătos.",
          "Fabricată din material ABS+PC durabil, cu finisaj auriu atrăgător, masca F2 este ușoară (332 g) și confortabilă. Baterie 2500 mAh: până la 70 de minute în standby după încărcare de aprox. 2,5 ore prin USB Type-C. Sunt incluse controler și geantă de depozitare.",
        ],
        includedTitle: "În pachet",
        included: [
          "Mască, controler, geantă de depozitare, cablu de date USB Type-C, cablu exclusiv, manual de utilizare.",
        ],
        applicationsTitle: "Marca ta, experiența noastră: parteneriat cu Red Light Therapy",
        applications: [
          "Oferă clienților tăi masca de ultimă generație „Aurora Butterfly” sub propria marcă (OEM) sau colaborează cu noi pentru opțiuni unice (ODM). Oferim prețuri competitive en-gros pentru distribuitori și retail. Profită de cei 15 ani de experiență în producție, controlul strict al calității și asistența completă.",
          "Personalizare: identitate corporativă (logo, ambalaj); variații de culoare posibile (în funcție de MOQ); ajustări posibile ale funcțiilor.",
          "Ambalaj retail și logistică: cutie individuală 23 x 30 x 15 cm; greutate brută colet 1,31 kg; 8 buc./cutie; cutie 330 x 490 x 630 mm; greutate brută cutie 11 kg.",
        ],
        detailHeading: "Beneficii și caracteristici detaliate",
        specsIntroTitle: "Specificații tehnice, personalizare și încredere",
        specsTitle: "Specificații, personalizare și încredere",
        specs: {
          "Nume produs": "Mască de terapie cu lumină Aurora Butterfly",
          "Număr model": "F2",
          "Cip produs": "4 cipuri (configurație multi-cip/single-cip posibilă)",
          Culoare: "Auriu",
          Dimensiuni: "270,2 x 196,6 x 14,5 mm",
          Greutate: "332 g",
          "Materiale carcasă": "ABS+PC",
          "Capacitate baterie": "2500 mAh",
          "Timp de încărcare": "Aproximativ 2,5 ore",
          "Timp de așteptare (standby)": "70 de minute",
          "Putere nominală": "11 W",
          "Densitate de putere": "60 mW/cm²",
          "Tensiune de încărcare": "3,7 V",
          "Iluminare totală LED": "88 buc.",
          "LED – linia părului": "56 buc. × 650 nm (concentrație țintă)",
          "LED – față (zonă A)": "28 buc. × 650 nm, 28 buc. × 1064 nm",
          "LED – față (zonă B)":
            "74 buc. × 460 nm, 74 buc. × 590 nm, 46 buc. × 650 nm, 46 buc. × 850 nm",
          "Moduri de funcționare":
            "4 moduri (iluminare, fermitate ten, acnee, netezire) – 10 minute/mod",
          "Tip conector": "USB Type-C",
          Certificat: "CE, FCC, ROHS",
          "Mediu de funcționare": "-10°~45°C",
        },
      },
      ru: {
        title: "Светодиодная маска F2 Aurora Butterfly для светотерапии",
        modelShort: "F2 Aurora",
        subtitle:
          "Революционизируйте уход за кожей и здоровьем линии роста волос: высокоточная многоволновая обработка в элегантном дизайне.",
        description:
          "Представляем светодиодную маску Aurora Butterfly (F2) от компании Red Light Therapy. Она оснащена 352 светодиодами (88 элементов) и имеет 4 режима работы, включая специальный режим для тонких волос. Маска изготовлена с использованием высококачественного золотого покрытия. Идеально подходит для OEM и оптовых продаж.",
        highlights: [
          "88 светодиодов высокой плотности: комплексное покрытие лица и линии роста волос.",
          "4 режима целенаправленной терапии: осветление, подтяжка, удаление прыщей, разглаживание.",
          "Специальная зона для восстановления линии роста волос: уникальное целенаправленное лечение.",
          "Роскошная золотистая отделка: ABS-пластик и поликарбонат премиум-класса.",
        ],
        benefitsTitle: "Сила многоволновой терапии",
        benefits: [
          "Маска «Аврора Бабочка» использует мощность 88 светодиодов медицинского класса, стратегически обеспечивая синергетическую комбинацию длин волн для решения широкого спектра проблем кожи и линии роста волос. Каждый режим откалиброван специалистами для достижения оптимальных результатов.",
          "Режим 1. Режим осветления: подчеркните свой цвет лица. Основные преимущества: разработан для уменьшения гиперпигментации, выравнивания тона кожи и повышения общего сияния. Жёлтый свет усиливает сияние, красный и ближний ИК способствуют восстановлению клеток и их жизненной силы.",
          "Режим 2. Режим подтяжки кожи: укрепление и контурирование. Основные преимущества: стимулирует выработку коллагена и эластина, помогает уменьшить мелкие морщины, улучшить упругость кожи и восстановить молодость и эластичность. Глубоко проникающее ближнее ИК усиливает регенерацию тканей.",
          "Режим 3. Режим удаления прыщей: очищение и успокоение. Основные преимущества: синий свет воздействует на бактерии, вызывающие акне; красный и ближний ИК помогают уменьшить воспаление, успокоить покраснение и ускорить заживление кожи.",
          "Режим 4. Режим сглаживания: улучшение и смягчение. Основные преимущества: улучшает текстуру кожи, уменьшает покраснение и успокаивает чувствительную кожу. Жёлтый свет способствует лимфодренажу, ближний ИК поддерживает здоровье и упругость кожи.",
        ],
        usageTitle: "Инновационный дизайн в виде бабочки и акцент на линии роста волос",
        usage: [
          "Уникальный контур «Аврора Бабочка» обеспечивает полное покрытие лица, включая часто игнорируемые участки. Специальная зона с 56 красными светодиодами 650 нм направлена на линию роста волос, способствуя восстановлению и более здоровому виду.",
          "Прочный ABS+PC с золотистой отделкой; масса 332 г; аккумулятор 2500 мАч — до 70 минут в режиме ожидания после ~2,5 ч зарядки через USB Type-C. В комплекте контроллер и сумка для хранения.",
        ],
        includedTitle: "Комплектация",
        included: [
          "Маска, контроллер, сумка для хранения, кабель USB Type-C, эксклюзивный кабель, руководство пользователя.",
        ],
        applicationsTitle: "Ваш бренд, наш опыт: сотрудничество с Red Light Therapy",
        applications: [
          "Предложите клиентам маску «Аврора Бабочка» под собственной маркой (OEM) или разработайте уникальные варианты (ODM). Конкурентоспособные оптовые цены для дистрибьюторов и ритейла. Воспользуйтесь 15-летним опытом производства, строгим контролем качества и всесторонней поддержкой.",
          "Персонализация: фирменный стиль (логотип, упаковка); цветовые вариации (в зависимости от MOQ); возможные корректировки функций.",
          "Упаковка и логистика: индивидуальная упаковка 23 x 30 x 15 см; брутто единицы 1,31 кг; 8 шт./коробка; коробка 330 x 490 x 630 мм; брутто коробки 11 кг.",
        ],
        detailHeading: "Подробные преимущества и характеристики",
        specsIntroTitle: "Технические характеристики, индивидуальная настройка и доверие",
        specsTitle: "Технические характеристики, индивидуальная настройка и доверие",
        specs: {
          "Название продукта": "Маска для светотерапии «Бабочка Аврора»",
          "Номер модели": "F2",
          "Чип продукта": "4 чипа (настраиваемая многочиповая/одночиповая конфигурация)",
          Цвет: "Золото",
          Размеры: "270,2 x 196,6 x 14,5 мм",
          Масса: "332 г",
          "Материалы корпуса": "ABS+PC",
          "Ёмкость аккумулятора": "2500 мАч",
          "Время зарядки": "Примерно 2,5 часа",
          "Режим ожидания": "70 минут",
          "Номинальная мощность": "11 W",
          "Плотность энергии": "60 мВт/см²",
          "Напряжение зарядки": "3,7 V",
          "Светодиодов всего": "88 шт.",
          "LED – линия роста волос": "56 шт. × 650 нм (целевая концентрация)",
          "LED – лицо (зона A)": "28 шт. × 650 нм, 28 шт. × 1064 нм",
          "LED – лицо (зона B)":
            "74 шт. × 460 нм, 74 шт. × 590 нм, 46 шт. × 650 нм, 46 шт. × 850 нм",
          "Режимы работы":
            "4 режима (осветление, подтяжка, удаление прыщей, разглаживание) — 10 минут на режим",
          "Тип разъёма": "USB Type-C",
          Сертификаты: "CE, FCC, ROHS",
          "Рабочая среда": "-10°~45°C",
        },
      },
    },
  },
  {
    slug: "cs-001",
    name: "CS-001 Phototherapy 3D Mask",
    price: "€129",
    priceValue: 129,
    /** Video + cs001-1…7 sus; cs001-jos-1…5 doar în secțiunile de jos, în ordine. */
    topGalleryCount: 8,
    media: [
      { type: "video", path: "masti/CS-001/cs001.mp4", alt: "CS-001 video" },
      { type: "image", path: "masti/CS-001/cs001-1.jpg", alt: "CS-001 1" },
      { type: "image", path: "masti/CS-001/cs001-2.jpg", alt: "CS-001 2" },
      { type: "image", path: "masti/CS-001/cs001-3.jpg", alt: "CS-001 3" },
      { type: "image", path: "masti/CS-001/cs001-4.jpg", alt: "CS-001 4" },
      { type: "image", path: "masti/CS-001/cs001-5.jpg", alt: "CS-001 5" },
      { type: "image", path: "masti/CS-001/cs001-6.jpg", alt: "CS-001 6" },
      { type: "image", path: "masti/CS-001/cs001-7.jpg", alt: "CS-001 7" },
      { type: "image", path: "masti/CS-001/cs001-jos-1.jpg", alt: "CS-001 detaliu 1" },
      { type: "image", path: "masti/CS-001/cs001-jos-2.jpg", alt: "CS-001 detaliu 2" },
      { type: "image", path: "masti/CS-001/cs001-jos-3.jpg", alt: "CS-001 detaliu 3" },
      { type: "image", path: "masti/CS-001/cs001-jos-4.jpg", alt: "CS-001 detaliu 4" },
      { type: "image", path: "masti/CS-001/cs001-jos-5.jpg", alt: "CS-001 detaliu 5" },
    ],
    to: "/masti/cs-001",
    translations: {
      ro: {
        title: "Mască de fototerapie 3D CS-001",
        modelShort: "CS-001",
        subtitle:
          "Precizie medicală și libertate wireless: fototerapie de nouă generație acasă și în clinică.",
        description:
          "Descoperiți următoarea generație de fototerapie cu masca CS-001. Sistemul nostru revoluționar 3D și lumina LED puternică, direcționată oferă rezultate puternice pentru întinerire, tratamentul acneei și îngrijirea pielii — atât acasă, cât și în clinică. Obțineți o ameliorare țintită și o îngrijire personalizată a contururilor feței.",
        highlights: [
          "Eficacitate de grad medical: livrare superioară a luminii pentru eficiență maximă.",
          "Terapie direcționată cu trei moduri: anti-îmbătrânire, acnee și întinerire.",
          "Tehnologie 3D Fit: se adaptează feței, distribuție uniformă a luminii.",
          "Wireless și reîncărcabilă: comoditate și libertate de mișcare.",
        ],
        benefitsTitle: "Știința lungimilor de undă duble",
        benefits: [
          "Masca CS-001 conține 288 de LED-uri de calitate medicală.",
          "144 surse de lumină roșie, 630 nm, pentru îmbunătățirea stării suprafeței pielii.",
          "72 surse în infraroșu apropiat invizibile, 850 nm, pentru acțiune mai profundă asupra țesuturilor.",
          "72 LED-uri albastre vizibile, 480 nm, pentru inhibarea creșterii fungilor; pot sprijini și afecțiuni inflamatorii ale pielii (ex. eczemă, dermatită).",
          "Intensitatea maximă a emisiei atinge 54 mW/cm² — în partea superioară a intervalului uzual pentru tratamente faciale (20–50 mW/cm²), peste multe dispozitive casnice standard. CS-001 este poziționată ca instrument medical puternic, disponibil pentru uz casnic, pentru sesiuni mai scurte și eficiente.",
        ],
        testimonialsTitle: "Nu ne credeți pe cuvânt. Utilizatorii noștri vorbesc de la sine.",
        testimonials: [
          "„Pielea mea a devenit mai luminoasă, dar cel mai important, pungile de sub ochi s-au diminuat! Am avut întotdeauna o pungă mare sub ochiul stâng și a dispărut treptat!” — MuscleSpare, utilizator frecvent — Lisa (instructor de yoga).",
          "„Nu e o schimbare dramatică, dar pielea mea a devenit mai fermă, în special în jurul maxilarului și obrajilor, iar pigmentarea de pe obraji s-a estompu puțin.” — BananaPlushy — Margaret (învățătoare la școala primară).",
          "„Pielea mea arată mai radiantă, acneea trece mai repede, iar textura e mai netedă și uniformă.” — Glow Core — Maria (funcționară).",
        ],
        usageTitle: "Conceput pentru confort și portabilitate",
        usage: [
          "CS-001 are design ușor și sursă de alimentare proprie, fără cabluri care vă limiteze. Folosiți-o acasă, la birou sau în călătorii. Control simplu, un singur buton. Doar 370 g pentru aplicare confortabilă pe față.",
          "Calitate premium, personalizabilă pentru a se potrivi cu marca dvs.",
        ],
        applicationsTitle: "Viziunea ta, expertiza noastră în fabricație",
        applications: [
          "Masca terapeutică CS-001 oferă opțiuni excelente de personalizare și branding. Colaborați cu Red Light Therapy pentru:",
          "Logo personalizat: plasați logo-ul companiei pe ambalaj și pe produs.",
          "Formă personalizată: discutați modificarea dimensiunilor sau formei pentru cerințe specifice de piață.",
          "Reglarea lungimii de undă: explorați rapoarte LED diferite sau lungimi suplimentare pentru poziționare unică.",
        ],
        safetyTitle: "Asigurarea performanței și durabilității optime",
        safety: [
          "Numai pentru utilizare în interior. Dispozitivul nu este impermeabil; evitați zonele umede și contactul direct al LED-urilor cu uleiuri esențiale.",
          "Din motive de siguranță, dacă dispozitivul nu este alimentat de la baterie, opriți întrerupătorul principal înainte de orice reglaj.",
          "Activare: apăsați și mențineți butonul ON/OFF timp de 1 secundă pentru pornire.",
          "Pentru service post-vânzare sau reparații, contactați direct Red Light Therapy.",
        ],
        detailHeading: "Obțineți o ameliorare țintită și o corecție îmbunătățită a contururilor feței",
        specsIntroTitle: "Calitate premium, posibilitate de personalizare pentru brandul dvs.",
        specsTitle: "Specificații tehnice",
        specs: {
          "Număr model": "CS-001",
          "Lungimi de undă": "630 nm (roșu), 850 nm (infraroșu apropiat), 480 nm (lumină albastră)",
          "Număr LED-uri": "288 buc. (144 × 630 nm, 72 × 850 nm, 72 × 480 nm)",
          "Cip produs": "4 cipuri (configurații multi-cip/single-cip posibile)",
          "Dimensiuni ambalaj": "32,5 × 26,5 × 18,5 cm",
          "Dimensiuni produs": "64 × 22 × 0,58 cm",
          Culoare: "Galben",
          Putere: "5W",
          "Funcție principală":
            "Ameliorează inflamația pielii feței, sprijină vindecarea acneei și încetinește semnele îmbătrânirii.",
          "Compatibil încărcătoare portabile": "Da",
          "Greutate netă": "Aproximativ 370 g",
          "Durată de viață LED": "Până la 50.000 ore",
          Garanție: "1 an",
          Certificări: "CE, FCC, ROHS",
          "Cel mai potrivit pentru": "Față",
          Accesorii:
            "O mască facială, o telecomandă, un încărcător, un manual de instrucțiuni.",
        },
      },
      ru: {
        title: "Фототерапевтическая 3D-маска CS-001",
        modelShort: "CS-001",
        subtitle:
          "Медицинская точность и беспроводная свобода: новое поколение фототерапии дома и в клинике.",
        description:
          "Откройте для себя новое поколение фототерапии с маской CS-001. Наша революционная 3D-система и направленное мощное светодиодное излучение обеспечивают выдающиеся результаты омоложения, борьбы с акне и ухода за кожей — как дома, так и в клинике. Обеспечьте целенаправленный комфорт и точную коррекцию овалов лица.",
        highlights: [
          "Эффективность медицинского уровня: превосходное облучение для максимальной эффективности.",
          "Три режима целенаправленной терапии: anti-age, акне, омоложение.",
          "Революционная технология 3D Fit: идеально прилегает к лицу, равномерный свет.",
          "Беспроводная и перезаряжаемая: удобство и свобода передвижения.",
        ],
        benefitsTitle: "Наука о двойных длинах волн",
        benefits: [
          "Маска CS-001 содержит 288 светодиодов медицинского класса.",
          "144 красных источника 630 нм для улучшения состояния поверхности кожи.",
          "72 источника ближнего инфракрасного излучения 850 нм для глубокого воздействия на ткани.",
          "72 синих светодиода 480 нм для подавления роста грибков; также могут способствовать улучшению при воспалительных заболеваниях кожи (экзема, дерматит).",
          "Максимальная интенсивность излучения достигает 54 мВт/см² — в верхней части отраслевого диапазона для процедур по уходу за лицом (20–50 мВт/см²), значительно выше многих бытовых устройств. CS-001 — мощный медицинский инструмент, доступный для домашнего использования, для более коротких и эффективных сеансов.",
        ],
        testimonialsTitle: "Не верьте нам на слово. Наши пользователи говорят сами за себя.",
        testimonials: [
          "«Моя кожа стала ярче, а главное — уменьшились мешки под глазами! У меня всегда был большой мешок под левым глазом, и он постепенно исчез!» — MuscleSpare — Лиза (инструктор по йоге).",
          "«Не кардинальные изменения, но кожа стала упругее, особенно в области челюсти и щёк, пигментация на щеках немного побледнела». — BananaPlushy — Маргарет (учительница начальной школы).",
          "«Кожа более сияющая, прыщи проходят быстрее, текстура глаже и ровнее». — Glow Core — Мария (офисный работник).",
        ],
        usageTitle: "Разработан для удобства и портативности",
        usage: [
          "Лёгкая конструкция и собственный источник питания — без проводов. Дома, в офисе или в поездке. Управление одной кнопкой. Вес всего 370 г для комфортного применения на лице.",
          "Премиум-качество и возможность персонализации под ваш бренд.",
        ],
        applicationsTitle: "Ваше видение, наш производственный опыт",
        applications: [
          "Маска CS-001 отлично подходит для брендирования и индивидуальной настройки. Сотрудничайте с Red Light Therapy:",
          "Логотип на заказ: разместите логотип компании на упаковке и изделии.",
          "Изменение формы: обсудите размеры или форму для конкретных потребностей рынка.",
          "Регулировка длины волны: варианты с разным соотношением светодиодов или дополнительными длинами волн.",
        ],
        safetyTitle: "Обеспечение оптимальной производительности и долговечности",
        safety: [
          "Только для использования в помещении. Устройство не водонепроницаемо; избегайте влажных помещений и попадания эфирных масел непосредственно на светодиоды.",
          "В целях безопасности, если устройство не питается от батареи, выключите главный выключатель перед регулировками.",
          "Активация: нажмите и удерживайте кнопку ВКЛ/ВЫКЛ около 1 секунды.",
          "По вопросам сервиса или ремонта обращайтесь напрямую в Red Light Therapy.",
        ],
        detailHeading: "Обеспечьте целенаправленное облегчение и улучшенную коррекцию контуров лица",
        specsIntroTitle: "Премиум-качество, возможность персонализации под ваш бренд",
        specsTitle: "Технические характеристики",
        specs: {
          "Номер модели": "CS-001",
          "Длины волн": "630 нм (красный), 850 нм (ближний ИК), 480 нм (синий)",
          "Количество светодиодов": "288 шт. (144 × 630 нм, 72 × 850 нм, 72 × 480 нм)",
          "Чип продукта": "4 чипа (настраиваемая многочиповая/одночиповая конфигурация)",
          "Размер упаковки": "32,5 × 26,5 × 18,5 см",
          "Размер продукта": "64 × 22 × 0,58 см",
          Цвет: "Жёлтый",
          Мощность: "5W",
          "Основная функция":
            "Снимает воспаление кожи лица, способствует заживлению акне, замедляет признаки старения.",
          "Поддержка портативных ЗУ": "Да",
          "Вес нетто": "Примерно 370 г",
          "Срок службы светодиодов": "До 50 000 часов",
          Гарантия: "1 год",
          Сертификаты: "CE, FCC, ROHS",
          "Лучше всего подходит для": "Лицо",
          Аксессуары:
            "Одна маска для лица, один пульт, одно зарядное устройство, инструкция.",
        },
      },
    },
  },
  {
    slug: "rd7",
    name: "RD7 Wrap-around light therapy mask for face and neck",
    price: "€119",
    priceValue: 119,
    media: [
      { type: "image", path: "masti/RD7/rd7-1.jpeg", alt: "RD7 mask" },
      { type: "image", path: "masti/RD7/rd7-2.png", alt: "RD7 front" },
      { type: "image", path: "masti/RD7/rd7-3.png", alt: "RD7 detail" },
      { type: "image", path: "masti/RD7/rd7-4.png", alt: "RD7 usage" },
      { type: "image", path: "masti/RD7/rd7-5.png", alt: "RD7 modes" },
      { type: "image", path: "masti/RD7/rd7-6.png", alt: "RD7 packaging" },
      { type: "image", path: "masti/RD7/rd7-jos-1.png", alt: "RD7 wavelengths" },
      { type: "image", path: "masti/RD7/rd7-jos-2.png", alt: "RD7 benefits" },
      { type: "image", path: "masti/RD7/rd7-jos-3.png", alt: "RD7 specs" },
      { type: "image", path: "masti/RD7/rd7-jos-4.png", alt: "RD7 details" },
    ],
    to: "/masti/rd7",
    translations: {
      ro: {
        title: "Mască de terapie cu lumină RD7 pentru față și gât",
        modelShort: "RD7",
        subtitle: "Mască de terapie cu lumină RD7 pentru față și gât",
        description:
          "Roșu/Verde/Albastru/Galben/Violet/Albastru • 193 LED-uri • Calitate medicală • Operare ușoară. Concepută pentru rejuvenarea pielii, reducerea ridurilor fine și îmbunătățirea elasticității pentru uz casnic.",
        highlights: [
          "Tehnologie cu lungimi de undă multiple: utilizează lungimi de undă de lumină roșie (640-670nm), verde (490-540nm), albastră (440-470nm), galbenă (565-570nm), violet (380-440nm) și albastră (460-495nm) pentru a aborda o varietate de probleme ale pielii, cum ar fi roșeața, pigmentarea și aspectul tern.",
          "193 LED-uri de calitate medicală: acoperă gâtul și fața pentru o îngrijire completă a pielii.",
          "Tratament neinvaziv și nedureros: asigură confort și siguranță, fără timpi de inactivitate sau efecte secundare.",
          "Design ergonomic: concepută pentru ușurință în utilizare și reglabilă pentru a se potrivi oricărei dimensiuni a feței.",
        ],
        benefitsTitle: "Beneficii cheie",
        benefits: [
          "Reduce riduri fine: stimulează producția de colagen pentru o piele mai elastică și cu aspect mai tânăr.",
          "Îmbunătățește tonusul și textura pielii: reface un ten uniform și radiant.",
          "Abordează multiple probleme ale pielii: reduce roșeața, pigmentarea și aspectul tern cu ajutorul tehnologiei avansate cu lungimi de undă multiple.",
          "Potrivit pentru toate tipurile de piele: neinvaziv și delicat, potrivit pentru toate tipurile de piele.",
        ],
        usageTitle: "Mod de utilizare",
        usage: [
          "Pregătirea pielii: curățați-vă fața, asigurându-vă că nu conține urme de ulei și machiaj.",
          "Aplicați masca: așezați masca pe față și fixați-o în siguranță cu curelele incluse.",
          "Începerea tratamentului: porniți masca de terapie cu lumină RD7 și selectați modul dorit.",
          "Relaxare: lăsați masca pe față pe durata tratamentului (10-15 minute).",
          "După tratament: scoateți masca, aplicați serul sau crema hidratantă preferată și ștergeți ușor masca cu o cârpă moale.",
        ],
        includedTitle: "Inclus în kit",
        included: [
          "Suport orizontal: un accesoriu robust și reglabil pentru plasarea panoului orizontal.",
          "Accesorii de montare: toate uneltele și componentele necesare pentru o asamblare ușoară.",
          "Manual de utilizare: instrucțiuni detaliate pentru asamblare și utilizare.",
        ],
        applicationsTitle: "Aplicații",
        applications: [
          "Pentru uz casnic: ideal pentru proceduri invazive, oferind o configurație orizontală stabilă și reglabilă.",
          "Pentru clinici și săli de sport: ideal pentru medii profesionale care necesită flexibilitate și stabilitate în timpul tratamentelor.",
          "Tratament complet al corpului, țintit și complet: acceptă panouri de diferite dimensiuni pentru setări de tratament personalizate.",
        ],
        specsTitle: "Specificații și parametri",
        specs: {
          "Număr de LED-uri": "193 LED-uri",
          "Interval de lungimi de undă":
            "Roșu (640-670 nm), Verde (490-540 nm), Albastru (440-470 nm), Galben (565-570 nm), Violet (380-440 nm), Albastru (460-495 nm)",
          "Număr de cipuri": "4 cipuri (configurație personalizabilă multi-cip/single-cip)",
          "Consum de energie": "15 W",
          Temporizator: "10-15 minute",
          "Tensiune/Tensiune de intrare": "110-220 V",
          Dimensiuni: "23 x 21 x 11 cm",
          Greutate: "0.6 kg",
          "Durată de viață": "50.000 de ore",
          "Cel mai potrivit pentru": "Tratamente pentru gât și față",
          Certificări: "FDA, CE, FCC, ROHS",
          Garanție: "1 an",
          "Mediu de lucru": "-10°~45°C",
        },
      },
      ru: {
        title: "Обёрточная светотерапевтическая маска RD7 для лица и шеи",
        modelShort: "RD7",
        subtitle: "RD7 Обёрточная светотерапевтическая маска для лица и шеи",
        description:
          "Красный/зеленый/синий/желтый/фиолетовый/голубой • 193 светодиодов • Медицинский состав • Легкий контроль. Фокусируется на омоложении кожи, уменьшая тонкие линии и улучшая эластичность для домашнего использования.",
        highlights: [
          "Многоволновая технология: использует красный (640-670 нм), зеленый (490-540 мм), синий (440-470 нм), желтый (565-570 нм), фиолетовый (380-440 нм) и голубой (460–495 мм) длины волн света для решения различных проблем кожи, таких как покраснение, пигментация и тусклость.",
          "193 светодиода медицинского назначения: покрывает шею и лицо для комплексного ухода за кожей.",
          "Неинвазивный и безболезненный: обеспечивает комфорт и безопасность без простоев и побочных эффектов.",
          "Эргономичный дизайн: разработан для простоты использования и регулируется под любой размер лица.",
        ],
        benefitsTitle: "Основные преимущества",
        benefits: [
          "Уменьшает мелкие морщины: стимулирует выработку коллагена для более упругой и молодой кожи.",
          "Улучшает тон и текстуру кожи: восстанавливает ровный, сияющий цвет лица.",
          "Решает множество проблем кожи: уменьшает покраснение, пигментацию и тусклость кожи благодаря передовой многоволновой технологии.",
          "Подходит для всех типов кожи: неинвазивный и щадящий метод, подходящий для любого типа кожи.",
        ],
        usageTitle: "Как использовать",
        usage: [
          "Подготовьте кожу: очистите лицо, убедившись, что на нем нет жира и макияжа.",
          "Наденьте маску: наденьте маску на лицо и надежно закрепите ее с помощью прилагаемых ремешков.",
          "Начать лечение: включите маску для светотерапии RD7 и выберите нужный режим.",
          "Расслабляться: дайте маске подействовать в течение выбранного вами времени процедуры (10-15 минут).",
          "После лечения: снимите маску, нанесите вашу любимую сыворотку или увлажняющий крем и аккуратно протрите маску мягкой тканью.",
        ],
        includedTitle: "Что входит в комплект",
        included: [
          "Горизонтальная подставка: прочный и регулируемый аксессуар для горизонтального размещения панелей.",
          "Монтажные принадлежности: все необходимые инструменты и компоненты для легкой сборки.",
          "Руководство пользователя: подробное руководство по настройке и использованию.",
        ],
        applicationsTitle: "Приложения",
        applications: [
          "Домашнее использование: идеально подходит для проведения оздоровительных процедур, обеспечивая стабильную и регулируемую горизонтальную установку.",
          "Клиники и тренажерные залы: идеально подходит для профессиональных условий, требующих гибкости и стабильности во время процедур.",
          "Целенаправленная и комплексная терапия всего тела: поддерживает различные размеры панелей для индивидуальной настройки параметров обработки.",
        ],
        specsTitle: "Технические характеристики и параметры",
        specs: {
          "Количество светодиодов": "193 светодиода",
          "Длины волн":
            "Красный (640-670 нм), Зеленый (490-540 нм), Синий (440-470 нм), Желтый (565-570 нм), Фиолетовый (380-440 нм), Голубой (460-495 нм)",
          "Чип продукта": "4 чипа (возможно настраиваемая многочиповая/одночиповая конфигурация)",
          "Потребление электроэнергии": "15W",
          Таймер: "10–15 минут",
          "Напряжение/Входная мощность": "110V-220V",
          Размеры: "23 x 21 x 11 см",
          Масса: "0,6 кг",
          "Срок службы светодиодов": "50 000 часов",
          "Лучше всего подходит для": "Процедуры для шеи и лица",
          Сертификаты: "FDA, CE, FCC, ROHS",
          Гарантия: "1 год",
          "Рабочая среда": "-10°~45°C",
        },
      },
    },
  },
];

export const maskBanners = maskProducts;

export const getMaskBySlug = (slug: string) =>
  maskProducts.find((mask) => mask.slug === slug);
