import type { AccessoryProduct } from "./accessories";

export type BedProduct = AccessoryProduct;

export const bedProducts: BedProduct[] = [
  {
    slug: "apex",
    name: "Pat terapie Apex M7",
    price: "€100",
    priceValue: 100,
    media: [
      { type: "video", path: "pat/apex-video.mp4", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-2.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-3.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-4.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-5.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-1.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-jos-1.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-jos-2.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-jos-3.jpg", alt: "Pat terapie Apex" },
      { type: "image", path: "pat/apex-jos-4.jpg", alt: "Pat terapie Apex" },
    ],
    translations: {
      ro: {
        title: "Apexul tehnologiei Wellness. Viitorul afacerii tale",
        modelShort: "Apex M7",
        subtitle: "",
        description:
          "Profită de puterea a până la 26.040 de LED-uri de înaltă densitate cu M7. Oferă tratamente revoluționare, neinvazive de rejuvenare și restaurare, care te vor defini ca lider de piață.",
        featuresTitle: "Caracteristici cheie",
        features: [
          {
            title: "Control wireless inteligent",
            body:
              "Obține tratamente complet personalizate cu un sistem wireless inteligent care oferă control independent asupra lungimii de undă, pulsului și intensității.",
          },
          {
            title: "Plăcuță termică patentată",
            body:
              "Obține rezultate complete cu ajutorul plăcuței noastre termice patentate, care utilizează cinci lungimi de undă terapeutice diferite.",
          },
          {
            title: "LED Epistar® și foaie Lucite®",
            body:
              "Experimentează o eficiență superioară datorită LED-urilor Epistar® premium și foii acrilice Lucite® cu transmisie 99%, care maximizează furnizarea luminii.",
          },
          {
            title: "Baldachin RGB premium",
            body:
              "Îmbunătățește experiența clientului cu un design luxos al baldachinului RGB și o iluminare ambientală care creează o ambianță premium.",
          },
          {
            title: "Versatilitate maximă",
            body:
              "Lucrează cu o versatilitate maximă, alegând programe presetate eficiente pentru ușurință în utilizare sau control manual complet pentru protocoale personalizate.",
          },
        ],
        detailBands: [
          {
            imagePath: "pat/apex-jos-1.jpg",
            mediaOnRight: true,
            title: "Ei cer experiențe",
            paragraphs: [
              "Clienții de astăzi, cu o minte sănătoasă, caută tratamente eficiente, neinvazive, cu rezultate vizibile. Îmbunătățiți-vă ofertele și oferiți o experiență luxoasă, dovedită științific, care va câștiga loialitate și vă va permite să obțineți un preț premium.",
            ],
          },
          {
            imagePath: "pat/apex-jos-2.jpg",
            mediaOnRight: true,
            title: "Putere și precizie de neegalat",
            paragraphs: [
              "Seria M7 este echipată cu până la 26.040 de cipuri LED EPISTAR® de înaltă intensitate, oferind o intensitate terapeutică optimă de 129 mW/cm². O folie acrilică Lucite® cu o transmitanță a luminii de 99% asigură un transfer maxim de energie către client, pentru rezultate superioare.",
            ],
          },
          {
            imagePath: "pat/apex-jos-3.jpg",
            mediaOnRight: false,
            title: "Control inteligent și personalizabil",
            paragraphs: [
              "Conceput pentru eficiență maximă, RDPRO1500-FS oferă o putere puternică de peste 200 mW/cm² la o distanță de 15 cm. Dimensiunile sale impresionante (91 x 30 cm) oferă o acoperire extinsă „pe jumătate de corp” (suprafață maximă de până la 119 x 61 cm), asigurând tratarea eficientă a suprafețelor mari.",
              "Unghiul fasciculului: Un fascicul focalizat la 30 de grade direcționează energia luminoasă exact acolo unde este nevoie, minimizând împrăștierea și maximizând absorbția.",
            ],
          },
          {
            imagePath: "pat/apex-jos-4.jpg",
            mediaOnRight: true,
            title: "Creat pentru lux și durabilitate",
            paragraphs: [
              "Designul elegant în formă de lună creează o experiență complet captivantă pentru client, în timp ce cadrul din aluminiu extrudat și oțel oferă o bază stabilă care poate susține peste 180 kg. Difuzoarele Bluetooth încorporate completează această experiență senzorială premium.",
            ],
          },
        ],
        detailCardGrid: {
          headline: "Oferiți o stare de bine completă cu un singur dispozitiv revoluționar.",
          cards: [
            {
              title: "Metode avansate de rejuvenare a pielii",
              body:
                "Stimulează producția de colagen pentru a reduce liniile fine, a îmbunătăți elasticitatea pielii și a oferi clienților tăi un aspect radiant și tineresc.",
            },
            {
              title: "Recuperare accelerată",
              body:
                "Îmbunătățește circulația și metabolismul celular, reduce inflamația, ameliorează durerile musculare și accelerează procesele naturale de vindecare ale organismului.",
            },
            {
              title: "Starea de bine holistică a întregului corp",
              body:
                "Oferim o abordare holistică a tratamentului care promovează detoxifierea, îmbunătățește starea de spirit și ajută la eliminarea afecțiunilor preexistente, asigurând o adevărată stare de bine a întregului corp.",
            },
          ],
        },
        modelCompareTable: {
          title: "Comparație modele",
          featureLabel: "Caracteristică",
          modelALabel: "M7",
          modelBLabel: "M7 PLUS",
          rows: [
            {
              label: "Total LED-uri",
              modelA: "13.020 buc.",
              modelB: "26.040 buc.",
            },
            {
              label: "Putere totală",
              modelA: "2500 W",
              modelB: "4500 W",
            },
            {
              label: "Chip produs",
              modelA: "Single-chip (cu arhitectură multi-chip reglabilă)",
              modelB: "Single-chip (cu arhitectură multi-chip reglabilă)",
            },
            {
              label: "Unghi de expunere LED",
              modelA: "120°",
              modelB: "120°",
            },
            {
              label: "Lungime de undă",
              modelA: "633:660:850:940 nm",
              modelB: "633:660:850:940 nm",
            },
            {
              label: "Sistem audio",
              modelA: "Echipat",
              modelB: "Echipat",
            },
            {
              label: "Tensiune",
              modelA: "220V|380V",
              modelB: "220V|380V",
            },
            {
              label: "Sursă de alimentare",
              modelA: "Sursă de alimentare unică la curent constant",
              modelB: "Sursă de alimentare unică la curent constant",
            },
            {
              label: "Dimensiuni",
              modelA: "215 cm × 106 cm × 91 cm / Înălțime tunel: 37 cm",
              modelB: "215 cm × 106 cm × 91 cm / Înălțime tunel: 37 cm",
            },
            {
              label: "Sistem de control",
              modelA:
                "Controler inteligent 2.0 sau controler joystick wireless 2.0 (opțional)",
              modelB:
                "Controler inteligent 2.0 sau controler joystick wireless 2.0 (opțional)",
            },
            {
              label: "Greutate maximă",
              modelA: "150 kg",
              modelB: "150 kg",
            },
            {
              label: "Greutate netă",
              modelA: "260 kg",
              modelB: "260 kg",
            },
            {
              label: "Ideal pentru",
              modelA: "Studiouri tip boutique și centre spa",
              modelB: "Clinici și centre de wellness cu volum mare de pacienți",
            },
            {
              label: "Mediu de funcționare",
              modelA: "-10°~45°C",
              modelB: "-10°~45°C",
            },
          ],
        },
      },
      ru: {
        title: "Apex of Wellness Technology. Будущее вашего бизнеса",
        modelShort: "Apex M7",
        subtitle: "",
        description:
          "Используйте мощность до 26 040 высокоплотных светодиодов с M7. Предлагайте революционное неинвазивное омоложение и восстановительную терапию, которые закрепят за вами статус лидера рынка.",
        featuresTitle: "Ключевые функции",
        features: [
          {
            title: "Беспроводная интеллектуальная система",
            body:
              "Достигайте полностью индивидуальных процедур с помощью беспроводной интеллектуальной системы с независимым контролем длины волны, импульса и интенсивности.",
          },
          {
            title: "Запатентованная термоплата",
            body:
              "Получайте комплексные результаты с нашей запатентованной термоплатой, использующей пять различных терапевтических длин волн.",
          },
          {
            title: "Epistar® и Lucite®",
            body:
              "Оцените превосходную эффективность благодаря премиальным светодиодам Epistar® и акриловому листу Lucite® с пропусканием 99%, максимизирующему доставку света.",
          },
          {
            title: "RGB-навес и подсветка",
            body:
              "Усильте впечатление клиентов роскошным дизайном RGB-навеса и декоративной подсветкой, создающими премиальную атмосферу.",
          },
          {
            title: "Программы и ручной режим",
            body:
              "Работайте с максимальной универсальностью: эффективные предустановленные программы для простоты или полное ручное управление для индивидуальных протоколов.",
          },
        ],
        detailBands: [
          {
            imagePath: "pat/apex-jos-1.jpg",
            mediaOnRight: true,
            title: "Они требуют впечатлений",
            paragraphs: [
              "Современный клиент, стремящийся к здоровому образу жизни, ищет эффективные, неинвазивные процедуры с видимыми результатами. Поднимите свои предложения на новый уровень и предоставьте научно обоснованный, роскошный опыт, который укрепит лояльность и позволит установить премиальную цену.",
            ],
          },
          {
            imagePath: "pat/apex-jos-2.jpg",
            mediaOnRight: true,
            title: "Непревзойденная мощность и точность",
            paragraphs: [
              "Серия M7 оснащена до 26 040 высокоинтенсивными светодиодными чипами EPISTAR®, обеспечивающими оптимальную терапевтическую интенсивность 129 мВт/см². Лист из акрила Lucite® с коэффициентом светопропускания 99% гарантирует максимальную передачу энергии клиенту для достижения превосходных результатов.",
            ],
          },
          {
            imagePath: "pat/apex-jos-3.jpg",
            mediaOnRight: false,
            title: "Интеллектуальное, настраиваемое управление",
            paragraphs: [
              "Разработанный для максимальной эффективности, RDPRO1500-FS обеспечивает мощное излучение, превышающее 200 мВт/см² на расстоянии 15 см. Его внушительные размеры (91x30 см) обеспечивают обширное покрытие «половины тела» (максимальная площадь до 119x61 см), гарантируя эффективную обработку больших площадей.",
              "Угол луча: Сфокусированный луч под углом 30 градусов направляет световую энергию именно туда, где она необходима, минимизируя рассеяние и максимизируя поглощение.",
            ],
          },
          {
            imagePath: "pat/apex-jos-4.jpg",
            mediaOnRight: true,
            title: "Создано для роскоши и долговечности",
            paragraphs: [
              "Элегантный дизайн в форме «луны» создает эффект полного погружения для клиента, а каркас из экструдированного алюминия и стали обеспечивает устойчивое основание, выдерживающее нагрузку более 180 кг. Встроенные Bluetooth-динамики дополняют это премиальное сенсорное путешествие.",
            ],
          },
        ],
        detailCardGrid: {
          headline:
            "Обеспечьте Комплексное Оздоровление С Помощью Одного Революционного Устройства.",
          cards: [
            {
              title: "Передовые Методы Омоложения Кожи",
              body:
                "Стимулируйте выработку коллагена, чтобы уменьшить мелкие морщины, улучшить эластичность кожи и придать вашим клиентам сияющий, молодой вид.",
            },
            {
              title: "Ускоренное Восстановление",
              body:
                "Улучшает кровообращение и клеточный метаболизм, уменьшает воспаление, снимает мышечную боль и ускоряет естественные процессы восстановления организма.",
            },
            {
              title: "Комплексное Оздоровление Всего Организма",
              body:
                "Предлагаем целостный подход к лечению, способствующий детоксикации, улучшающий настроение и помогающий устранить предболезненные состояния, обеспечивая истинное оздоровление всего тела.",
            },
          ],
        },
        modelCompareTable: {
          title: "Сравнение Моделей",
          featureLabel: "Особенность",
          modelALabel: "M7",
          modelBLabel: "M7 PLUS",
          rows: [
            {
              label: "Всего светодиодов",
              modelA: "13 020 шт.",
              modelB: "26 040 шт.",
            },
            {
              label: "Суммарная мощность",
              modelA: "2500 Вт",
              modelB: "4500 Вт",
            },
            {
              label: "Чип продукта",
              modelA:
                "Однокристальная (с возможностью настройки многокристальной архитектуры)",
              modelB:
                "Однокристальная (с возможностью настройки многокристальной архитектуры)",
            },
            {
              label: "Угол экспозиции светодиода",
              modelA: "120°",
              modelB: "120°",
            },
            {
              label: "Длина волны",
              modelA: "633:660:850:940 нм",
              modelB: "633:660:850:940 нм",
            },
            {
              label: "Аудиосистема",
              modelA: "Оборудован",
              modelB: "Оборудован",
            },
            {
              label: "Напряжение",
              modelA: "220V|380V",
              modelB: "220V|380V",
            },
            {
              label: "Источник питания",
              modelA: "Уникальный источник постоянного тока",
              modelB: "Уникальный источник постоянного тока",
            },
            {
              label: "Размеры",
              modelA: "215 см × 106 см × 91 см / Высота туннеля: 37 см",
              modelB: "215 см × 106 см × 91 см / Высота туннеля: 37 см",
            },
            {
              label: "Система управления",
              modelA:
                "Интеллектуальный контроллер 2.0 или беспроводной контроллер-джойстик 2.0 (опционально)",
              modelB:
                "Интеллектуальный контроллер 2.0 или беспроводной контроллер-джойстик 2.0 (опционально)",
            },
            {
              label: "Максимальный вес",
              modelA: "150 кг",
              modelB: "150 кг",
            },
            {
              label: "Вес нетто",
              modelA: "260 кг",
              modelB: "260 кг",
            },
            {
              label: "Идеально подходит для",
              modelA: "Бутик-студии и спа-салоны",
              modelB: "Клиники и оздоровительные центры с большим потоком пациентов",
            },
            {
              label: "Operating environment",
              modelA: "−10° ~ 45°C",
              modelB: "−10° ~ 45°C",
            },
          ],
        },
      },
      en: {
        title: "Apex of Wellness Technology. The Future of Your Business",
        modelShort: "Apex M7",
        subtitle: "",
        description:
          "Harness the power of up to 26,040 high-density LEDs with the M7. Deliver revolutionary, non-invasive rejuvenation and restorative treatments that will define you as a market leader.",
        featuresTitle: "Key features",
        features: [
          {
            title: "Wireless intelligent control",
            body:
              "Achieve fully customized treatments with a wireless, intelligent system offering independent control over wavelength, pulse, and intensity.",
          },
          {
            title: "Patented thermal pad",
            body:
              "Achieve comprehensive results with our patented thermal pad, which utilizes five different therapeutic wavelengths.",
          },
          {
            title: "Epistar® & Lucite® optics",
            body:
              "Experience superior efficiency thanks to premium Epistar® LEDs and 99% transmissive Lucite® acrylic sheet, which maximizes light delivery.",
          },
          {
            title: "RGB canopy & ambiance",
            body:
              "Enhance the client experience with a luxurious RGB canopy design and ambient lighting that creates a premium ambiance.",
          },
          {
            title: "Presets & full manual control",
            body:
              "Work with ultimate versatility, choosing effective preset programs for ease of use or full manual control for custom protocols.",
          },
        ],
        detailBands: [
          {
            imagePath: "pat/apex-jos-1.jpg",
            mediaOnRight: true,
            title: "They demand experiences",
            paragraphs: [
              "Today's healthy-living client seeks effective, non-invasive treatments with visible results. Elevate your offerings and deliver a scientifically proven, luxurious experience that will build loyalty and allow you to command a premium price.",
            ],
          },
          {
            imagePath: "pat/apex-jos-2.jpg",
            mediaOnRight: true,
            title: "Unrivaled power and precision",
            paragraphs: [
              "The M7 Series is equipped with up to 26,040 EPISTAR® high-intensity LED chips, delivering an optimal therapeutic intensity of 129 mW/cm². A Lucite® acrylic sheet with 99% light transmittance ensures maximum energy transfer to the client for superior results.",
            ],
          },
          {
            imagePath: "pat/apex-jos-3.jpg",
            mediaOnRight: false,
            title: "Intelligent, customizable control",
            paragraphs: [
              "Designed for maximum efficiency, the RDPRO1500-FS delivers a powerful output of over 200 mW/cm² at a distance of 15 cm. Its impressive dimensions (91 × 30 cm) provide extensive half-body coverage (maximum area up to 119 × 61 cm), ensuring effective treatment of large areas.",
              "Beam angle: A focused 30-degree beam directs light energy precisely where it's needed, minimizing scattering and maximizing absorption.",
            ],
          },
          {
            imagePath: "pat/apex-jos-4.jpg",
            mediaOnRight: true,
            title: "Built for luxury and durability",
            paragraphs: [
              "The elegant moon design creates a fully immersive experience for the client, while the extruded aluminum and steel frame provides a stable base that can support over 180 kg. Built-in Bluetooth speakers complete this premium sensory experience.",
            ],
          },
        ],
        detailCardGrid: {
          headline:
            "Provide comprehensive wellness with one revolutionary device.",
          cards: [
            {
              title: "Advanced skin rejuvenation methods",
              body:
                "Stimulate collagen production to reduce fine lines, improve skin elasticity, and give your clients a radiant, youthful appearance.",
            },
            {
              title: "Accelerated recovery",
              body:
                "Improves circulation and cellular metabolism, reduces inflammation, relieves muscle pain, and accelerates the body's natural healing processes.",
            },
            {
              title: "Holistic whole-body wellness",
              body:
                "We offer a holistic approach to treatment that promotes detoxification, improves mood, and helps eliminate pre-existing conditions, delivering true whole-body wellness.",
            },
          ],
        },
        modelCompareTable: {
          title: "Model comparison",
          featureLabel: "Features",
          modelALabel: "M7",
          modelBLabel: "M7 PLUS",
          rows: [
            {
              label: "Total LEDs",
              modelA: "13,020 pcs",
              modelB: "26,040 pcs",
            },
            {
              label: "Total power",
              modelA: "2500 W",
              modelB: "4500 W",
            },
            {
              label: "Product chip",
              modelA: "Single-chip (with adjustable multi-chip architecture)",
              modelB: "Single-chip (with adjustable multi-chip architecture)",
            },
            {
              label: "LED exposure angle",
              modelA: "120°",
              modelB: "120°",
            },
            {
              label: "Wavelength",
              modelA: "633:660:850:940 nm",
              modelB: "633:660:850:940 nm",
            },
            {
              label: "Audio system",
              modelA: "Equipped",
              modelB: "Equipped",
            },
            {
              label: "Voltage",
              modelA: "220V | 380V",
              modelB: "220V | 380V",
            },
            {
              label: "Power supply",
              modelA: "Unique constant-current power supply",
              modelB: "Unique constant-current power supply",
            },
            {
              label: "Dimensions",
              modelA:
                "215 × 106 × 91 cm / tunnel height: 37 cm",
              modelB:
                "215 × 106 × 91 cm / tunnel height: 37 cm",
            },
            {
              label: "Control system",
              modelA:
                "Intelligent controller 2.0 or wireless joystick controller 2.0 (optional)",
              modelB:
                "Intelligent controller 2.0 or wireless joystick controller 2.0 (optional)",
            },
            {
              label: "Maximum weight",
              modelA: "150 kg",
              modelB: "150 kg",
            },
            {
              label: "Net weight",
              modelA: "260 kg",
              modelB: "260 kg",
            },
            {
              label: "Perfect for",
              modelA: "Boutique studios and spas",
              modelB: "Clinics and wellness centers with high patient volumes",
            },
            {
              label: "Operating environment",
              modelA: "−10° ~ 45°C",
              modelB: "−10° ~ 45°C",
            },
          ],
        },
      },
    },
  },
];

export const bedBanners: BedProduct[] = bedProducts;

export function getBedBySlug(slug: string): BedProduct | undefined {
  return bedProducts.find((p) => p.slug === slug);
}
