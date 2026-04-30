import type { Locale } from "@/data/masks";

export type SiteCopy = {
  nav: {
    therapyMasks: string;
    lampsAndAccessories: string;
    bed: string;
    star: string;
  };
  searchPlaceholder: string;
  searchNoResults: string;
  searchAriaLabel: string;
  cart: {
    title: string;
    empty: string;
    subtotal: string;
    remove: string;
    added: string;
    continueShopping: string;
    viewCart: string;
    checkout: string;
    checkoutHint: string;
    contactInstead: string;
  };
  homeBanners: Record<"therapy-masks" | "lamps-accessories" | "pat", { subtitle: string }>;
  seeProduct: string;
  masksPage: {
    eyebrow: string;
    title: string;
    seeMask: string;
  };
  lampsPage: {
    eyebrow: string;
    title: string;
    lead: string;
    seeLamp: string;
    toAccessories: string;
  };
  accessoriesPage: {
    eyebrow: string;
    title: string;
    lead: string;
    seeProduct: string;
    toLamps: string;
  };
  bedPage: {
    eyebrow: string;
    title: string;
    lead: string;
    seeProduct: string;
    toLamps: string;
  };
  hero: {
    title: string;
    subtitle: string;
    prevVideo: string;
    nextVideo: string;
    videoDot: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    products: string;
    benefits: string;
    about: string;
    contact: string;
    legalTitle: string;
    terms: string;
    privacy: string;
    cookies: string;
    contactTitle: string;
    location: string;
    copyright: string;
  };
  legal: {
    backHome: string;
    termsTitle: string;
    termsP1: string;
    termsP2: string;
    privacyTitle: string;
    privacyP1: string;
    cookiesTitle: string;
    cookiesP: string;
  };
  notFound: {
    code: string;
    message: string;
    home: string;
  };
  productPage: {
    notFound: string;
    backHome: string;
    back: string;
    chooseModel: string;
    addToCart: string;
    specsHeading: string;
    certMedical: string;
    certMedicalSub: string;
    certEmf: string;
    certEmfSub: string;
    certSafety: string;
    certSafetySub: string;
  };
  maskProduct: {
    specsColSpec: string;
    specsColDetails: string;
    certYear: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  ro: {
    nav: {
      therapyMasks: "Măști terapeutice",
      lampsAndAccessories: "Lampi & Accesorii",
      bed: "Pat",
      star: "Star",
    },
    searchPlaceholder: "Caută în magazin",
    searchNoResults: "Niciun rezultat.",
    searchAriaLabel: "Caută produse",
    cart: {
      title: "Coșul tău",
      empty: "Coșul este gol.",
      subtotal: "Subtotal",
      remove: "Elimină",
      added: "Produs adăugat în coș",
      continueShopping: "Continuă cumpărăturile",
      viewCart: "Vezi coșul complet",
      checkout: "Finalizează comanda",
      checkoutHint:
        "Se deschide aplicația de e-mail cu rezumatul comenzii. Poți edita mesajul înainte de trimitere.",
      contactInstead: "Contact direct",
    },
    homeBanners: {
      "therapy-masks": {
        subtitle: "Măști LED avansate pentru terapie cu lumină",
      },
      "lamps-accessories": {
        subtitle: "Lampi LED FS7 · panouri profesionale",
      },
      pat: {
        subtitle: "Pat pentru terapie cu lumină roșie",
      },
    },
    seeProduct: "Vezi produsul",
    masksPage: {
      eyebrow: "Măști terapeutice",
      title: "Măști LED avansate pentru terapie cu lumină",
      seeMask: "Vezi masca",
    },
    lampsPage: {
      eyebrow: "Lampi & accesorii",
      title: "Lampi LED FS7 și accesorii",
      lead:
        "Patru puteri de panou FS7 și accesoriile asociate — același standard de calitate. Videoclip de prezentare pe modelul RD Pro 3000.",
      seeLamp: "Vezi lampa",
      toAccessories: "Accesorii",
    },
    accessoriesPage: {
      eyebrow: "Accesorii",
      title: "Accesorii pentru lampi",
      lead: "Complemente pentru instalare și utilizare. Descrieri detaliate vor fi adăugate în curând.",
      seeProduct: "Vezi produsul",
      toLamps: "Lampi LED",
    },
    bedPage: {
      eyebrow: "Pat terapie",
      title: "Pat pentru terapie cu lumină roșie",
      lead: "Produs dedicat sesiunilor de terapie — detalii complete în curând.",
      seeProduct: "Vezi produsul",
      toLamps: "Lampi LED",
    },
    hero: {
      title: "Red Light Therapy",
      subtitle: "Descoperă puterea luminii roșii pentru sănătate și recuperare",
      prevVideo: "Videoclipul anterior",
      nextVideo: "Videoclipul următor",
      videoDot: "Videoclip",
    },
    footer: {
      tagline:
        "Distribuitor de dispozitive pentru terapia cu lumină roșie în Republica Moldova. Produse pentru sănătate și recuperare, cu suport local.",
      navTitle: "Navigare",
      products: "Produse",
      benefits: "Beneficii",
      about: "Despre noi",
      contact: "Contact",
      legalTitle: "Legal",
      terms: "Termeni și condiții",
      privacy: "Politică de confidențialitate",
      cookies: "Cookie-uri",
      contactTitle: "Contact",
      location: "Chișinău, Republica Moldova",
      copyright: "© 2026. Toate drepturile rezervate.",
    },
    legal: {
      backHome: "Înapoi la pagina principală",
      termsTitle: "Termeni și condiții",
      termsP1:
        "Acest document descrie condițiile generale de utilizare a site-ului și de achiziție a produselor Red Light Therapy. Conținutul complet poate fi actualizat în funcție de politica comercială și cerințele legale aplicabile în Republica Moldova.",
      termsP2:
        "Pentru întrebări legate de comenzi, livrare sau garanție, ne puteți contacta la adresa indicată în subsolul site-ului.",
      privacyTitle: "Politică de confidențialitate",
      privacyP1:
        "Respectăm confidențialitatea datelor dumneavoastră personale. Această politică descrie în linii mari ce tipuri de informații pot fi colectate prin site și în ce scopuri pot fi folosite, în conformitate cu practicile uzuale pentru magazine online.",
      cookiesTitle: "Module cookie",
      cookiesP:
        "Site-ul poate folosi cookie-uri esențiale pentru funcționare și, după caz, cookie-uri analitice. Puteți gestiona preferințele din setările browserului dumneavoastră.",
    },
    notFound: {
      code: "404",
      message: "Pagina nu a fost găsită",
      home: "Înapoi la pagina principală",
    },
    productPage: {
      notFound: "Produs negăsit",
      backHome: "Înapoi la pagina principală",
      back: "Înapoi",
      chooseModel: "Alege modelul",
      addToCart: "ADAUGĂ ÎN COȘ →",
      specsHeading: "Specificații tehnice",
      certMedical: "CE Clasa II",
      certMedicalSub: "Dispozitiv medical",
      certEmf: "Zero EMF",
      certEmfSub: "La distanță recomandată",
      certSafety: "ETL / UL",
      certSafetySub: "Siguranță electrică",
    },
    maskProduct: {
      specsColSpec: "Specificație",
      specsColDetails: "Detalii",
      certYear: "1 an",
    },
  },
  ru: {
    nav: {
      therapyMasks: "Терапевтические маски",
      lampsAndAccessories: "Лампы и аксессуары",
      bed: "Кровать",
      star: "Star",
    },
    searchPlaceholder: "Поиск по магазину",
    searchNoResults: "Ничего не найдено.",
    searchAriaLabel: "Поиск товаров",
    cart: {
      title: "Корзина",
      empty: "Корзина пуста.",
      subtotal: "Итого",
      remove: "Удалить",
      added: "Товар добавлен в корзину",
      continueShopping: "Продолжить покупки",
      viewCart: "Перейти в корзину",
      checkout: "Оформить заказ",
      checkoutHint:
        "Откроется почта с текстом заказа. Вы можете изменить сообщение перед отправкой.",
      contactInstead: "Связаться с нами",
    },
    homeBanners: {
      "therapy-masks": {
        subtitle: "Продвинутые LED-маски для светотерапии",
      },
      "lamps-accessories": {
        subtitle: "LED-панели FS7 · профессиональные лампы",
      },
      pat: {
        subtitle: "Кровать для красной светотерапии",
      },
    },
    seeProduct: "Смотреть товар",
    masksPage: {
      eyebrow: "Терапевтические маски",
      title: "Продвинутые LED-маски для светотерапии",
      seeMask: "Смотреть маску",
    },
    lampsPage: {
      eyebrow: "Лампы и аксессуары",
      title: "LED-панели FS7 и аксессуары",
      lead:
        "Четыре модели панелей FS7 и аксессуары к ним — единый стандарт качества. Видео-презентация на модели RD Pro 3000.",
      seeLamp: "Смотреть панель",
      toAccessories: "Аксессуары",
    },
    accessoriesPage: {
      eyebrow: "Аксессуары",
      title: "Аксессуары для панелей",
      lead: "Дополнения для монтажа и эксплуатации. Подробные описания будут добавлены позже.",
      seeProduct: "Смотреть товар",
      toLamps: "LED-панели",
    },
    bedPage: {
      eyebrow: "Кровать для терапии",
      title: "Кровать для красной светотерапии",
      lead: "Изделие для сеансов терапии — подробности скоро.",
      seeProduct: "Смотреть товар",
      toLamps: "LED-панели",
    },
    hero: {
      title: "Red Light Therapy",
      subtitle: "Откройте силу красного света для здоровья и восстановления",
      prevVideo: "Предыдущее видео",
      nextVideo: "Следующее видео",
      videoDot: "Видео",
    },
    footer: {
      tagline:
        "Поставщик оборудования для красной светотерапии в Республике Молдова. Продукция для здоровья и восстановления с локальной поддержкой.",
      navTitle: "Навигация",
      products: "Товары",
      benefits: "Преимущества",
      about: "О нас",
      contact: "Контакты",
      legalTitle: "Правовая информация",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      cookies: "Файлы cookie",
      contactTitle: "Контакты",
      location: "Кишинэу, Республика Молдова",
      copyright: "© 2026. Все права защищены.",
    },
    legal: {
      backHome: "На главную",
      termsTitle: "Условия использования",
      termsP1:
        "Этот документ описывает общие условия использования сайта и приобретения продукции Red Light Therapy. Содержание может обновляться в соответствии с коммерческой политикой и законодательством Республики Молдова.",
      termsP2:
        "По вопросам заказов, доставки или гарантии вы можете связаться с нами по адресу, указанному в подвале сайта.",
      privacyTitle: "Политика конфиденциальности",
      privacyP1:
        "Мы уважаем конфиденциальность ваших персональных данных. Эта политика в общих чертах описывает, какие сведения могут собираться через сайт и с какой целью, в соответствии с обычной практикой интернет-магазинов.",
      cookiesTitle: "Файлы cookie",
      cookiesP:
        "Сайт может использовать необходимые cookie для работы и, при необходимости, аналитические cookie. Настройки можно изменить в браузере.",
    },
    notFound: {
      code: "404",
      message: "Страница не найдена",
      home: "На главную",
    },
    productPage: {
      notFound: "Товар не найден",
      backHome: "На главную",
      back: "Назад",
      chooseModel: "Выберите модель",
      addToCart: "ДОБАВИТЬ В КОРЗИНУ →",
      specsHeading: "Технические характеристики",
      certMedical: "CE класс II",
      certMedicalSub: "Медицинское изделие",
      certEmf: "Zero EMF",
      certEmfSub: "На рекомендованном расстоянии",
      certSafety: "ETL / UL",
      certSafetySub: "Электробезопасность",
    },
    maskProduct: {
      specsColSpec: "Спецификация",
      specsColDetails: "Подробности",
      certYear: "1 год",
    },
  },
};

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale];
}
