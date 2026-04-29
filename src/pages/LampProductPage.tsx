import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowLeft,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import { getLampBySlug, lampProducts, type MaskMedia } from "@/data/lamps";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const ui = {
  ro: {
    back: "Înapoi la lampi",
    category: "Lampi LED",
    chooseModel: "Alege modelul",
    addToCart: "ADAUGĂ ÎN COȘ",
    features: "Puncte forte",
    detailsHeading: "Detalii produs",
    certified: "Certificat",
    phototherapy: "Fototerapie",
    warranty: "Garanție",
    priceNote: "Preț indicativ — confirmăm la comandă.",
    notFound: "Lampa nu a fost găsită",
    expandPreview: "Deschide în mărime mare",
    expandPreviewHint: "Imagine sau video produs afișată la dimensiune completă.",
    galleryPrev: "Imaginea anterioară",
    galleryNext: "Imaginea următoare",
  },
  ru: {
    back: "Назад к панелям",
    category: "LED-панели",
    chooseModel: "Выберите модель",
    addToCart: "ДОБАВИТЬ В КОРЗИНУ",
    features: "Ключевые особенности",
    detailsHeading: "Детали продукта",
    certified: "Сертификация",
    phototherapy: "Фототерапия",
    warranty: "Гарантия",
    priceNote: "Цена ориентировочная — уточняем при заказе.",
    notFound: "Панель не найдена",
    expandPreview: "Открыть в полном размере",
    expandPreviewHint: "Изображение или видео товара в увеличенном виде.",
    galleryPrev: "Предыдущее фото",
    galleryNext: "Следующее фото",
  },
};

const MediaPreview = ({
  media,
  name,
  variant = "default",
}: {
  media: MaskMedia;
  name: string;
  variant?: "default" | "clean";
}) => {
  const fitClass =
    variant === "clean"
      ? "h-full w-full object-contain object-center"
      : media.type === "video"
        ? "h-full w-full object-cover"
        : "h-full w-full object-contain";

  if (media.type === "video") {
    return (
      <video
        src={assetUrl(media.path)}
        className={fitClass}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    );
  }

  return (
    <img
      src={assetUrl(media.path)}
      alt={media.alt || name}
      className={fitClass}
    />
  );
};

type ContentSection = {
  title: string;
  bullets: string[];
  media: MaskMedia;
  intro?: string;
  /** Subtitlu accent (roșu) imediat sub titlul secțiunii (ex. control / aplicații). */
  sectionLead?: string;
  /** Listă ca citat (fără bifă). */
  quoteBlock?: boolean;
  listHeading?: string;
  /** Listă „Etichetă: text” cu bullet disc, fără subtitlu (ex. inginerie). */
  colonBullets?: boolean;
};

/** Formatare „Etichetă: descriere” ca pe site-ul sursă (control / liste tehnice). */
const ColonLeadLine = ({ text, clean }: { text: string; clean: boolean }) => {
  const i = text.indexOf(": ");
  if (i === -1) {
    return (
      <span className={clean ? "text-neutral-700" : "text-muted-foreground"}>{text}</span>
    );
  }
  return (
    <span className={clean ? "text-neutral-800" : "text-muted-foreground"}>
      <strong className={`text-neutral-900 ${clean ? "font-bold" : "font-semibold"}`}>
        {text.slice(0, i)}:
      </strong>{" "}
      {text.slice(i + 2)}
    </span>
  );
};

const LampProductPage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const site = getSiteCopy(locale);
  const { addItem } = useCart();
  const product = getLampBySlug(slug || "");
  const topMediaLength = product
    ? Math.min(product.topGalleryCount, product.media.length)
    : 0;
  const [qty, setQty] = useState(1);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [topGalleryLightboxOpen, setTopGalleryLightboxOpen] = useState(false);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setSelectedMediaIndex(0);
  }, [slug]);

  useEffect(() => {
    if (!topGalleryLightboxOpen || topMediaLength <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        lightboxVideoRef.current?.pause();
        setSelectedMediaIndex((i) => (i - 1 + topMediaLength) % topMediaLength);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        lightboxVideoRef.current?.pause();
        setSelectedMediaIndex((i) => (i + 1) % topMediaLength);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [topGalleryLightboxOpen, topMediaLength]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center px-4 pt-24 text-center">
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              {ui[locale].notFound}
            </h1>
            <Link to="/lampi" className="text-primary hover:underline">
              {ui[locale].back}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const t = product.translations[locale];
  const clean = product.cleanProductPage ?? false;
  const mpVariant = clean ? "clean" : "default";
  const thumbImage = product.media.find((m) => m.type === "image")?.path;
  const topGalleryCount = product.topGalleryCount;
  const topCount = Math.min(topGalleryCount, product.media.length);
  const topMedia = product.media.slice(0, topCount);
  const detailMedia = product.media.slice(topCount);
  const currentMedia = topMedia[selectedMediaIndex] || topMedia[0] || product.media[0];
  const catalogLayout = detailMedia.length > 0;

  const createMediaPicker = () => {
    let pick = 0;
    return (): MaskMedia => {
      const m =
        detailMedia[pick] ??
        detailMedia[Math.max(0, detailMedia.length - 1)] ??
        topMedia[0] ??
        product.media[0];
      pick += 1;
      return m;
    };
  };

  const benefitsSection = (media: MaskMedia): ContentSection => ({
    title: t.benefitsTitle,
    bullets: t.benefits,
    media,
    ...(t.benefitsIntro ? { intro: t.benefitsIntro } : {}),
    ...(t.benefitsListHeading ? { listHeading: t.benefitsListHeading } : {}),
  });

  const nextDefault = createMediaPicker();
  const defaultBeforeSpecs: ContentSection[] = [benefitsSection(nextDefault())];
  if (t.engineering?.length && t.engineeringTitle) {
    defaultBeforeSpecs.push({ title: t.usageTitle, bullets: t.usage, media: nextDefault() });
    defaultBeforeSpecs.push({
      title: t.engineeringTitle,
      bullets: t.engineering,
      media: nextDefault(),
      colonBullets: true,
    });
  } else {
    if (t.testimonials?.length && t.testimonialsTitle && !t.testimonialsAfterMetrics) {
      defaultBeforeSpecs.push({
        title: t.testimonialsTitle,
        bullets: t.testimonials,
        media: nextDefault(),
        ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
      });
    }
    defaultBeforeSpecs.push({ title: t.usageTitle, bullets: t.usage, media: nextDefault() });
  }

  if (t.metrics?.length && t.metricsTitle) {
    defaultBeforeSpecs.push({
      title: t.metricsTitle,
      bullets: t.metrics,
      media: nextDefault(),
      colonBullets: true,
    });
  }

  if (
    t.engineering?.length &&
    t.engineeringTitle &&
    t.testimonials?.length &&
    t.testimonialsTitle
  ) {
    defaultBeforeSpecs.push({
      title: t.testimonialsTitle,
      bullets: t.testimonials,
      media: nextDefault(),
      ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
    });
  } else if (
    t.testimonialsAfterMetrics &&
    t.testimonials?.length &&
    t.testimonialsTitle
  ) {
    defaultBeforeSpecs.push({
      title: t.testimonialsTitle,
      bullets: t.testimonials,
      media: nextDefault(),
      ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
    });
  }

  const defaultAfterSpecs: ContentSection[] = [];
  const defaultAfterSpecsPostTable: ContentSection[] = [];
  const applicationsSectionsContainer = product.applicationsAfterSpecsTable
    ? defaultAfterSpecsPostTable
    : defaultAfterSpecs;
  if (t.included?.length && t.includedTitle) {
    defaultAfterSpecs.push({
      title: t.includedTitle,
      bullets: t.included,
      media: nextDefault(),
    });
  }
  if (t.safety?.length && t.safetyTitle) {
    defaultAfterSpecs.push({
      title: t.safetyTitle,
      bullets: t.safety,
      media: nextDefault(),
    });
  }
  if (t.applications?.length && t.applicationsTitle) {
    const applicationsMedia = (() => {
      if (product.applicationsMediaPath) {
        const found = product.media.find((m) => m.path === product.applicationsMediaPath);
        if (found) {
          nextDefault();
          return found;
        }
      }
      return nextDefault();
    })();
    applicationsSectionsContainer.push({
      title: t.applicationsTitle,
      bullets: t.applications,
      media: applicationsMedia,
      ...(t.applicationsLead ? { sectionLead: t.applicationsLead } : {}),
      ...(t.applicationsIntro ? { intro: t.applicationsIntro } : {}),
      colonBullets: true,
    });
  }

  const nextClean = createMediaPicker();
  const cleanNarrativeBeforeSpecs: ContentSection[] = [benefitsSection(nextClean())];
  if (t.engineering?.length && t.engineeringTitle) {
    cleanNarrativeBeforeSpecs.push({ title: t.usageTitle, bullets: t.usage, media: nextClean() });
    cleanNarrativeBeforeSpecs.push({
      title: t.engineeringTitle,
      bullets: t.engineering,
      media: nextClean(),
      colonBullets: true,
    });
  } else {
    if (t.testimonials?.length && t.testimonialsTitle && !t.testimonialsAfterMetrics) {
      cleanNarrativeBeforeSpecs.push({
        title: t.testimonialsTitle,
        bullets: t.testimonials,
        media: nextClean(),
        ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
      });
    }
    cleanNarrativeBeforeSpecs.push({
      title: t.usageTitle,
      bullets: t.usage,
      media: nextClean(),
    });
  }

  if (t.metrics?.length && t.metricsTitle) {
    cleanNarrativeBeforeSpecs.push({
      title: t.metricsTitle,
      bullets: t.metrics,
      media: nextClean(),
      colonBullets: true,
    });
  }

  if (
    t.engineering?.length &&
    t.engineeringTitle &&
    t.testimonials?.length &&
    t.testimonialsTitle
  ) {
    cleanNarrativeBeforeSpecs.push({
      title: t.testimonialsTitle,
      bullets: t.testimonials,
      media: nextClean(),
      ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
    });
  } else if (
    t.testimonialsAfterMetrics &&
    t.testimonials?.length &&
    t.testimonialsTitle
  ) {
    cleanNarrativeBeforeSpecs.push({
      title: t.testimonialsTitle,
      bullets: t.testimonials,
      media: nextClean(),
      ...(t.testimonialsQuote ? { quoteBlock: true } : {}),
    });
  }
  if (t.included?.length && t.includedTitle) {
    cleanNarrativeBeforeSpecs.push({
      title: t.includedTitle,
      bullets: t.included,
      media: nextClean(),
    });
  }

  const cleanApplicationsMedia =
    t.applications?.length && t.applicationsTitle
      ? (() => {
          if (product.applicationsMediaPath) {
            const found = product.media.find((m) => m.path === product.applicationsMediaPath);
            if (found) {
              nextClean();
              return found;
            }
          }
          return nextClean();
        })()
      : null;
  const cleanSafetySection: ContentSection | null =
    t.safety?.length && t.safetyTitle
      ? { title: t.safetyTitle, bullets: t.safety, media: nextClean() }
      : null;

  const contentSections = [...defaultBeforeSpecs, ...defaultAfterSpecs];

  const therapyBandLocale = product.therapyRulesBand?.[locale];
  const defaultBeforeLead = therapyBandLocale ? defaultBeforeSpecs.slice(0, 1) : defaultBeforeSpecs;
  const defaultBeforeTail = therapyBandLocale ? defaultBeforeSpecs.slice(1) : [];

  const renderSpecsTable = () => (
    <section className={clean ? "py-14 md:py-20 bg-white" : "py-12 md:py-16"}>
      <div className="container mx-auto px-4">
        {t.specsIntroTitle ? (
          <h2
            className={`mb-6 text-center font-display text-2xl font-bold md:text-3xl ${
              clean ? "text-neutral-900" : "text-foreground"
            }`}
          >
            {t.specsIntroTitle}
          </h2>
        ) : null}
        <h3
          className={
            clean
              ? "mb-6 text-center font-display text-lg font-semibold text-neutral-800 md:text-xl"
              : "mb-6 text-center font-display text-xl font-bold text-foreground md:text-2xl"
          }
        >
          {t.specsTitle}
        </h3>
        <div
          className={
            clean
              ? "mx-auto max-w-4xl overflow-hidden rounded-lg border border-neutral-200 bg-white"
              : "mx-auto max-w-5xl overflow-hidden rounded-md border border-border bg-background shadow-sm"
          }
        >
          <div
            className={
              clean
                ? "grid grid-cols-[0.9fr_1.1fr] border-b border-neutral-200 bg-neutral-100 px-4 py-2.5 text-sm font-semibold text-neutral-900"
                : "grid grid-cols-[0.9fr_1.1fr] bg-secondary px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground"
            }
          >
            <span>{t.specsColumnFeature ?? site.maskProduct.specsColSpec}</span>
            <span>{t.specsColumnValue ?? site.maskProduct.specsColDetails}</span>
          </div>
          {Object.entries(t.specs).map(([key, value], index) => (
            <div
              key={key}
              className={
                clean
                  ? `grid grid-cols-[0.9fr_1.1fr] gap-4 border-b border-neutral-100 px-4 py-3 text-sm last:border-b-0 ${
                      index % 2 === 0 ? "bg-white" : "bg-neutral-50/80"
                    }`
                  : `grid grid-cols-[0.9fr_1.1fr] gap-4 px-5 py-3 text-sm ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/50"
                    }`
              }
            >
              <span className={clean ? "font-medium text-neutral-600" : "font-medium text-muted-foreground"}>
                {key}
              </span>
              <span className={clean ? "text-neutral-900" : "text-foreground"}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContentSections = (sections: ContentSection[], topPadding = "pt-6") => (
    <section className={`${topPadding} pb-12 md:pb-16 ${clean ? "bg-white" : ""}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className={clean ? "space-y-20 md:space-y-24" : "space-y-20 md:space-y-28"}>
          {sections.map((section, index) => (
            <div
              key={`${product.slug}-section-${section.title}-${index}`}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={
                    clean
                      ? "aspect-[4/3] overflow-hidden rounded-xl bg-[#f5f5f5] ring-1 ring-neutral-100"
                      : "aspect-[4/3] overflow-hidden rounded-sm bg-white"
                  }
                >
                  <MediaPreview media={section.media} name={t.title} variant={mpVariant} />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
                  {section.title}
                </h3>
                {section.sectionLead ? (
                  <p className="mt-3 font-display text-lg font-semibold text-primary md:text-xl">
                    {section.sectionLead}
                  </p>
                ) : null}
                {section.intro ? (
                  <p
                    className={`${section.sectionLead ? "mt-3" : "mt-4"} text-sm leading-relaxed md:text-base ${
                      clean ? "text-neutral-800" : "text-muted-foreground"
                    }`}
                  >
                    {section.intro}
                  </p>
                ) : null}
                {section.listHeading ? (
                  <p
                    className={`mt-5 font-semibold text-neutral-900 ${
                      clean ? "text-sm md:text-base" : "text-sm"
                    }`}
                  >
                    {section.listHeading}
                  </p>
                ) : null}
                {section.quoteBlock ? (
                  <div
                    className={`mt-5 space-y-4 ${
                      clean ? "text-neutral-800" : "text-muted-foreground"
                    }`}
                  >
                    {section.bullets.map((item, i) => (
                      <p
                        key={`quote-${i}-${item.slice(0, 24)}`}
                        className={
                          i === 0
                            ? "text-sm leading-relaxed md:text-base"
                            : `text-sm font-medium ${clean ? "text-neutral-900" : "text-foreground"}`
                        }
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                ) : (
                (() => {
                  const useColonDiscList = Boolean(section.listHeading || section.colonBullets);
                  return (
                    <ul
                      className={
                        useColonDiscList
                          ? clean
                            ? `list-disc space-y-3 pl-5 text-sm marker:text-neutral-900 md:text-base ${
                                section.listHeading ? "mt-3" : section.intro ? "mt-4" : "mt-5"
                              }`
                            : `list-disc space-y-3 pl-5 text-sm marker:text-foreground ${
                                section.listHeading ? "mt-3" : section.intro ? "mt-4" : "mt-5"
                              }`
                          : "mt-5 space-y-3"
                      }
                    >
                      {section.bullets.map((item) =>
                        useColonDiscList ? (
                          <li key={item} className="leading-relaxed">
                            <ColonLeadLine text={item} clean={clean} />
                          </li>
                        ) : (
                          <li
                            key={item}
                            className={`flex gap-3 text-sm leading-relaxed ${
                              clean ? "text-neutral-700" : "text-muted-foreground"
                            }`}
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  );
                })()
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTherapyRulesBand = () => {
    const band = product.therapyRulesBand?.[locale];
    if (!band?.cards?.length) return null;
    return (
      <section
        className={
          clean
            ? "border-t border-neutral-100 bg-white py-14 md:py-20"
            : "border-t border-border/80 bg-background py-12 md:py-16"
        }
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            className={`text-center font-display text-2xl font-bold leading-tight md:text-3xl lg:text-4xl ${
              clean ? "text-neutral-900" : "text-foreground"
            }`}
          >
            {band.headline}
          </h2>
          {band.subheadline ? (
            <p
              className={`mt-4 text-center font-display text-lg font-bold leading-snug md:mt-5 md:text-xl ${
                clean ? "text-neutral-900" : "text-foreground"
              }`}
            >
              {band.subheadline}
            </p>
          ) : null}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
            {band.cards.map((card) => (
              <div
                key={card.title}
                className={
                  clean
                    ? "flex min-h-[12rem] flex-col items-center justify-center border border-neutral-200 bg-[#f5f5f5] px-5 py-8 text-center md:min-h-[14rem] md:py-10"
                    : "flex min-h-[12rem] flex-col items-center justify-center border border-border bg-[#f5f5f5] px-5 py-8 text-center md:min-h-[14rem] md:py-10"
                }
              >
                <h3
                  className={`font-display text-base font-bold leading-snug md:text-[1.0625rem] ${
                    clean ? "text-neutral-900" : "text-foreground"
                  }`}
                >
                  {card.title}
                </h3>
                <div
                  className={`my-4 h-px w-10 shrink-0 ${clean ? "bg-neutral-900/20" : "bg-foreground/20"}`}
                  aria-hidden
                />
                <p
                  className={`text-sm leading-relaxed md:text-[0.9375rem] ${
                    clean ? "text-neutral-800" : "text-muted-foreground"
                  }`}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderApplicationsBandClean = (media: MaskMedia) => (
    <section className="border-t border-neutral-100 bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mx-auto max-w-5xl text-center font-display text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl">
          {t.applicationsTitle}
        </h2>
        <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="min-h-0 w-full md:order-1">
            <div className="overflow-hidden rounded-2xl bg-[#f5f0e8] shadow-sm ring-1 ring-neutral-200/50">
              <div className="aspect-[4/3] w-full">
                <MediaPreview media={media} name={t.title} variant={mpVariant} />
              </div>
            </div>
          </div>
          <div className="min-w-0 md:order-2">
            {t.applicationsLead ? (
              <p className="font-display text-xl font-bold text-primary md:text-2xl">{t.applicationsLead}</p>
            ) : null}
            {t.applicationsIntro ? (
              <p className="mt-4 text-base font-normal leading-relaxed text-neutral-900">{t.applicationsIntro}</p>
            ) : null}
            <div className="mt-6 space-y-5">
              {(t.applications ?? []).map((item) => (
                <p key={item} className="text-base leading-relaxed text-neutral-800">
                  <ColonLeadLine text={item} clean />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSafetyBandClean = (section: ContentSection) => (
    <section className="border-t border-neutral-100 bg-white py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-h-0 space-y-5 lg:order-1">
            <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-0 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#f5f5f5] ring-1 ring-neutral-100">
              <MediaPreview media={section.media} name={t.title} variant={mpVariant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen ${clean ? "bg-white" : "bg-background"}`}>
      <Navbar />

      <main className="pt-16">
        <section className={clean ? "pb-12 md:pb-16" : "pb-10 md:pb-14"}>
          <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-10">
            <Link
              to="/lampi"
              className="mb-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui[locale].back}
            </Link>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Dialog
                  open={topGalleryLightboxOpen}
                  onOpenChange={(open) => {
                    if (!open) lightboxVideoRef.current?.pause();
                    setTopGalleryLightboxOpen(open);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setTopGalleryLightboxOpen(true)}
                    className={
                      clean
                        ? "group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-50 text-left ring-1 ring-neutral-200/80 transition-[box-shadow] hover:ring-primary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        : "group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-sm bg-white text-left shadow-sm ring-1 ring-border transition-[box-shadow] hover:ring-primary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    }
                    aria-label={ui[locale].expandPreview}
                  >
                    <MediaPreview media={currentMedia} name={t.title} variant={mpVariant} />
                    <span
                      className={
                        clean
                          ? "pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 opacity-90 transition group-hover:opacity-100"
                          : "pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-sm bg-white/95 text-foreground shadow-sm ring-1 ring-border opacity-90 transition group-hover:opacity-100"
                      }
                      aria-hidden
                    >
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </button>
                  <DialogContent className="max-h-[92vh] max-w-[95vw] border-0 bg-white p-3 shadow-2xl sm:max-w-6xl">
                    <DialogTitle className="sr-only">
                      {currentMedia.alt || t.title} ({selectedMediaIndex + 1} / {topMedia.length})
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {ui[locale].expandPreviewHint}
                    </DialogDescription>
                    <div className="relative flex max-h-[88vh] items-center justify-center">
                      {topMedia.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              lightboxVideoRef.current?.pause();
                              setSelectedMediaIndex(
                                (i) => (i - 1 + topMedia.length) % topMedia.length,
                              );
                            }}
                            className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-800 shadow-md ring-1 ring-black/5 transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:left-2 md:h-11 md:w-11"
                            aria-label={ui[locale].galleryPrev}
                          >
                            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              lightboxVideoRef.current?.pause();
                              setSelectedMediaIndex((i) => (i + 1) % topMedia.length);
                            }}
                            className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-800 shadow-md ring-1 ring-black/5 transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:right-2 md:h-11 md:w-11"
                            aria-label={ui[locale].galleryNext}
                          >
                            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                          </button>
                        </>
                      ) : null}
                      {currentMedia.type === "video" ? (
                        <video
                          ref={lightboxVideoRef}
                          key={currentMedia.path}
                          src={assetUrl(currentMedia.path)}
                          className="max-h-[88vh] w-full max-w-full rounded-md object-contain"
                          controls
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img
                          key={currentMedia.path}
                          src={assetUrl(currentMedia.path)}
                          alt={currentMedia.alt || t.title}
                          className="max-h-[88vh] w-auto max-w-full object-contain"
                        />
                      )}
                    </div>
                  </DialogContent>
                </Dialog>

                <div
                  className={
                    topMedia.length > 4
                      ? "mt-3 grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-8"
                      : "mt-3 grid grid-cols-3 gap-2"
                  }
                >
                  {topMedia.map((media, index) => (
                    <button
                      key={`${media.path}-${index}`}
                      type="button"
                      onClick={() => setSelectedMediaIndex(index)}
                      className={
                        clean
                          ? `relative aspect-square overflow-hidden rounded-lg border bg-neutral-50 transition-colors ${
                              selectedMediaIndex === index
                                ? "border-primary ring-2 ring-primary/25"
                                : "border-neutral-200 hover:border-primary/40"
                            }`
                          : `relative aspect-square overflow-hidden rounded-sm border bg-white transition-colors ${
                              selectedMediaIndex === index
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-border hover:border-primary/40"
                            }`
                      }
                      aria-label={media.alt}
                    >
                      <MediaPreview media={media} name={t.title} variant={mpVariant} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className={
                    clean
                      ? "text-xs font-medium tracking-wide text-neutral-500"
                      : "font-display text-sm font-semibold uppercase tracking-[0.28em] text-primary"
                  }
                >
                  {ui[locale].category}
                </p>
                <h1
                  className={
                    clean
                      ? "mt-2 font-display text-3xl font-bold leading-tight text-neutral-900 md:text-4xl"
                      : "mt-3 font-display text-2xl font-bold leading-tight text-foreground md:text-4xl"
                  }
                >
                  {t.title}
                </h1>
                {(t.subtitle ?? "").trim() ? (
                  <p
                    className={
                      clean
                        ? "mt-3 font-display text-lg font-semibold text-primary md:text-xl"
                        : "mt-3 font-display text-xl text-primary"
                    }
                  >
                    {t.subtitle}
                  </p>
                ) : null}

                <p
                  className={
                    clean
                      ? "mt-5 text-base leading-relaxed text-neutral-600"
                      : "mt-6 leading-relaxed text-muted-foreground"
                  }
                >
                  {t.description}
                </p>

                <div className={clean ? "mt-6" : "mt-6"}>
                  <h2
                    className={
                      clean
                        ? "font-display text-sm font-bold uppercase tracking-wide text-neutral-800"
                        : "font-display text-base font-bold text-foreground"
                    }
                  >
                    {t.featuresTitle ?? ui[locale].features}
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {t.highlights.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-sm ${
                          clean ? "text-neutral-600" : "text-muted-foreground"
                        }`}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="mb-3 font-display text-sm uppercase tracking-wider text-foreground">
                    {ui[locale].chooseModel}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {lampProducts.map((lamp) => (
                      <Link
                        key={lamp.slug}
                        to={`/lampi/${lamp.slug}`}
                        className={`flex h-12 items-center justify-center rounded-full border px-4 text-center font-display text-xs uppercase tracking-wide transition-colors ${
                          lamp.slug === product.slug
                            ? "gradient-red border-transparent text-primary-foreground"
                            : "border-primary/50 text-primary hover:bg-primary/10"
                        }`}
                      >
                        {lamp.translations[locale].modelShort}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-full rounded-full border border-border sm:w-40">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="flex flex-1 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                    >
                      −
                    </button>
                    <span className="flex shrink-0 items-center justify-center px-2 font-display text-lg text-foreground tabular-nums">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(qty + 1)}
                      className="flex flex-1 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    type="button"
                    className={
                      clean
                        ? "gradient-red h-14 min-h-14 flex-1 rounded-full px-8 font-display text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90"
                        : "gradient-red h-14 min-h-14 flex-1 rounded-full px-8 font-display text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90"
                    }
                    onClick={() => {
                      addItem({
                        kind: "lamp",
                        slug: product.slug,
                        name: t.title,
                        price: product.price,
                        priceValue: product.priceValue,
                        thumb: thumbImage,
                        qty,
                      });
                      toast.success(site.cart.added);
                    }}
                  >
                    {product.price} {ui[locale].addToCart} →
                  </Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{ui[locale].priceNote}</p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { icon: Award, label: "CE / FCC", sub: ui[locale].certified },
                    { icon: Zap, label: "LED", sub: ui[locale].phototherapy },
                    { icon: ShieldCheck, label: site.maskProduct.certYear, sub: ui[locale].warranty },
                  ].map((cert) => (
                    <div
                      key={cert.label}
                      className={
                        clean
                          ? "flex flex-col items-center rounded-lg border border-neutral-200 bg-white p-3 text-center shadow-sm"
                          : "flex flex-col items-center rounded-lg border border-border bg-card p-3 text-center"
                      }
                    >
                      <cert.icon className="mb-1 h-6 w-6 text-primary" />
                      <span className="font-display text-xs font-bold uppercase text-foreground">
                        {cert.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{cert.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {clean && product.strategicBand ? (
          <section className="border-t border-neutral-100 bg-white py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
              <h2 className="mx-auto max-w-5xl text-center font-display text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl">
                {product.strategicBand[locale].headline}
              </h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
                {product.strategicBand[locale].cards.map((card) => (
                  <div
                    key={card.title}
                    className="flex min-h-[14rem] flex-col items-center justify-center border border-[#e0e0e0] bg-[#f9f9f9] px-5 py-10 text-center md:min-h-[16rem] md:px-6 md:py-12"
                  >
                    <h3 className="font-display text-base font-bold leading-snug text-neutral-900 md:text-[1.0625rem]">
                      {card.title}
                    </h3>
                    <div
                      className="my-4 h-px w-10 shrink-0 bg-neutral-900/25"
                      aria-hidden
                    />
                    <p className="text-sm leading-relaxed text-neutral-800 md:text-[0.9375rem]">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {catalogLayout ? (
          <>
            {!(clean && product.strategicBand) ? (
              <section
                className={
                  clean ? "bg-white pb-12 pt-8 md:pb-16 md:pt-12" : "pb-10 pt-6 md:pb-14 md:pt-10"
                }
              >
                <div className="container mx-auto max-w-5xl px-4 text-center">
                  <h2
                    className={
                      clean
                        ? "font-display text-2xl font-bold leading-snug text-neutral-900 md:text-3xl"
                        : "font-display text-2xl font-bold text-foreground md:text-3xl"
                    }
                  >
                    {t.detailHeading || ui[locale].detailsHeading}
                  </h2>
                  <div
                    className={
                      clean ? "mx-auto mt-5 h-px w-16 bg-primary" : "mx-auto mt-4 h-0.5 w-14 bg-primary"
                    }
                  />
                </div>
              </section>
            ) : null}
            {clean ? (
              <>
                {renderContentSections(cleanNarrativeBeforeSpecs, "pt-4 md:pt-10")}
                {renderSpecsTable()}
                {cleanApplicationsMedia ? renderApplicationsBandClean(cleanApplicationsMedia) : null}
                {cleanSafetySection ? renderSafetyBandClean(cleanSafetySection) : null}
              </>
            ) : (
              <>
                {renderContentSections(defaultBeforeLead, "pt-0")}
                {therapyBandLocale ? renderTherapyRulesBand() : null}
                {defaultBeforeTail.length
                  ? renderContentSections(defaultBeforeTail, "pt-8 md:pt-12")
                  : null}
                {product.specsAfterDetailSections ? (
                  <>
                    {defaultAfterSpecs.length
                      ? renderContentSections(defaultAfterSpecs, "pt-8")
                      : null}
                    {renderSpecsTable()}
                    {defaultAfterSpecsPostTable.length
                      ? renderContentSections(defaultAfterSpecsPostTable, "pt-8")
                      : null}
                  </>
                ) : (
                  <>
                    {renderSpecsTable()}
                    {defaultAfterSpecs.length
                      ? renderContentSections(defaultAfterSpecs, "pt-8")
                      : null}
                    {defaultAfterSpecsPostTable.length
                      ? renderContentSections(defaultAfterSpecsPostTable, "pt-8")
                      : null}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {renderSpecsTable()}
            {renderContentSections(contentSections, "pt-8")}
          </>
        )}
      </main>

      <FooterSection />
    </div>
  );
};

export default LampProductPage;
