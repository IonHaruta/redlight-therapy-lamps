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
import { resolveMediaPath } from "@/i18n/media-path";
import { getMaskBySlug, maskProducts, type Locale, type MaskMedia } from "@/data/masks";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const ui = {
  ro: {
    back: "Înapoi la măști",
    category: "Măști LED",
    chooseModel: "Alege modelul",
    addToCart: "ADAUGĂ ÎN COȘ",
    features: "Puncte forte",
    detailsHeading: "Detalii produs",
    tableHeading: "Tabel tehnic complet",
    certified: "Certificat",
    phototherapy: "Fototerapie",
    warranty: "Garanție",
    notFound: "Masca nu a fost găsită",
    expandPreview: "Deschide în mărime mare",
    expandPreviewHint: "Imagine sau video produs afișată la dimensiune completă.",
    galleryPrev: "Imaginea anterioară",
    galleryNext: "Imaginea următoare",
  },
  ru: {
    back: "Назад к маскам",
    category: "LED-маски",
    chooseModel: "Выберите модель",
    addToCart: "ДОБАВИТЬ В КОРЗИНУ",
    features: "Ключевые особенности",
    detailsHeading: "Детали продукта",
    tableHeading: "Полная техническая таблица",
    certified: "Сертификация",
    phototherapy: "Фототерапия",
    warranty: "Гарантия",
    notFound: "Маска не найдена",
    expandPreview: "Открыть в полном размере",
    expandPreviewHint: "Изображение или видео товара в увеличенном виде.",
    galleryPrev: "Предыдущее фото",
    galleryNext: "Следующее фото",
  },
  en: {
    back: "Back to masks",
    category: "LED masks",
    chooseModel: "Choose model",
    addToCart: "ADD TO CART",
    features: "Key strengths",
    detailsHeading: "Product details",
    tableHeading: "Full technical table",
    certified: "Certified",
    phototherapy: "Phototherapy",
    warranty: "Warranty",
    notFound: "Mask not found",
    expandPreview: "Open full size",
    expandPreviewHint: "Product image or video at full size.",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
  },
};

const MediaPreview = ({
  media,
  name,
  locale,
}: {
  media: MaskMedia;
  name: string;
  locale: Locale;
}) => {
  const src = resolveMediaPath(media, locale);

  if (media.type === "video") {
    return (
      <video
        src={assetUrl(src)}
        className="h-full w-full object-cover"
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
      src={assetUrl(src)}
      alt={media.alt || name}
      className="h-full w-full object-contain"
    />
  );
};

type ContentSection = {
  title: string;
  bullets: string[];
  media: MaskMedia;
};

const MaskProductPage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const site = getSiteCopy(locale);
  const { addItem } = useCart();
  const product = getMaskBySlug(slug || "");
  const topMediaLength = product
    ? Math.min(product.topGalleryCount ?? 3, product.media.length)
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
            <Link to="/masti" className="text-primary hover:underline">
              {ui[locale].back}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const t = product.translations[locale];
  const thumbImage = product.media.find((m) => m.type === "image")?.path;
  const topGalleryCount = product.topGalleryCount ?? 3;
  const topCount = Math.min(topGalleryCount, product.media.length);
  const topMedia = product.media.slice(0, topCount);
  const detailMedia = product.media.slice(topCount);
  const currentMedia = topMedia[selectedMediaIndex] || topMedia[0] || product.media[0];
  const currentMediaPath = resolveMediaPath(currentMedia, locale);
  const catalogLayout = product.slug === "cs-001" || product.slug === "f2-aurora";

  let detailPick = 0;
  const nextDetailMedia = (): MaskMedia => {
    const m =
      detailMedia[detailPick] ??
      detailMedia[Math.max(0, detailMedia.length - 1)] ??
      topMedia[0] ??
      product.media[0];
    detailPick += 1;
    return m;
  };

  const beforeSpecsSections: ContentSection[] = [
    { title: t.benefitsTitle, bullets: t.benefits, media: nextDetailMedia() },
  ];
  if (t.testimonials?.length && t.testimonialsTitle) {
    beforeSpecsSections.push({
      title: t.testimonialsTitle,
      bullets: t.testimonials,
      media: nextDetailMedia(),
    });
  }
  beforeSpecsSections.push({ title: t.usageTitle, bullets: t.usage, media: nextDetailMedia() });

  const afterSpecsSections: ContentSection[] = [];
  if (t.included?.length && t.includedTitle) {
    afterSpecsSections.push({
      title: t.includedTitle,
      bullets: t.included,
      media: nextDetailMedia(),
    });
  }
  if (t.applications?.length && t.applicationsTitle) {
    afterSpecsSections.push({
      title: t.applicationsTitle,
      bullets: t.applications,
      media: nextDetailMedia(),
    });
  }
  if (t.safety?.length && t.safetyTitle) {
    afterSpecsSections.push({
      title: t.safetyTitle,
      bullets: t.safety,
      media: nextDetailMedia(),
    });
  }
  const contentSections = [...beforeSpecsSections, ...afterSpecsSections];

  const renderSpecsTable = () => (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {t.specsIntroTitle ? (
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
            {t.specsIntroTitle}
          </h2>
        ) : null}
        <h3 className="mb-6 text-center font-display text-xl font-bold text-foreground md:text-2xl">
          {t.specsTitle}
        </h3>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-md border border-border bg-background shadow-sm">
          <div className="grid grid-cols-[0.9fr_1.1fr] bg-secondary px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
            <span>{t.specsColumnFeature ?? site.maskProduct.specsColSpec}</span>
            <span>{t.specsColumnValue ?? site.maskProduct.specsColDetails}</span>
          </div>
          {Object.entries(t.specs).map(([key, value], index) => (
            <div
              key={key}
              className={`grid grid-cols-[0.9fr_1.1fr] gap-4 px-5 py-3 text-sm ${
                index % 2 === 0 ? "bg-card" : "bg-secondary/50"
              }`}
            >
              <span className="font-medium text-muted-foreground">{key}</span>
              <span className="text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContentSections = (sections: ContentSection[], topPadding = "pt-6") => (
    <section className={`${topPadding} pb-12 md:pb-16`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="space-y-20 md:space-y-28">
          {sections.map((section, index) => (
            <div
              key={`${product.slug}-section-${section.title}-${index}`}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-white">
                  <MediaPreview media={section.media} name={t.title} locale={locale} />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
                  {section.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="pb-10 md:pb-14">
          <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-10">
            <Link
              to="/masti"
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
                    className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-sm bg-white text-left shadow-sm ring-1 ring-border transition-[box-shadow] hover:ring-primary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={ui[locale].expandPreview}
                  >
                    <MediaPreview media={currentMedia} name={t.title} locale={locale} />
                    <span
                      className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-sm bg-white/95 text-foreground shadow-sm ring-1 ring-border opacity-90 transition group-hover:opacity-100"
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
                          key={currentMediaPath}
                          src={assetUrl(currentMediaPath)}
                          className="max-h-[88vh] w-full max-w-full rounded-md object-contain"
                          controls
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img
                          key={currentMediaPath}
                          src={assetUrl(currentMediaPath)}
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
                      key={`${resolveMediaPath(media, locale)}-${index}`}
                      type="button"
                      onClick={() => setSelectedMediaIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-sm border bg-white transition-colors ${
                        selectedMediaIndex === index
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/40"
                      }`}
                      aria-label={media.alt}
                    >
                      <MediaPreview media={media} name={t.title} locale={locale} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  {ui[locale].category}
                </p>
                <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground md:text-4xl">
                  {t.title}
                </h1>
                <p className="mt-3 font-display text-xl text-primary">
                  {t.subtitle}
                </p>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {t.description}
                </p>

                <div className="mt-6">
                  <h2 className="font-display text-base font-bold text-foreground">
                    {ui[locale].features}
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {t.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
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
                  <div className="grid gap-3 sm:grid-cols-3">
                    {maskProducts.map((mask) => (
                      <Link
                        key={mask.slug}
                        to={`/masti/${mask.slug}`}
                        className={`flex h-12 items-center justify-center rounded-full border px-4 text-center font-display text-xs uppercase tracking-wide transition-colors ${
                          mask.slug === product.slug
                            ? "gradient-red border-transparent text-primary-foreground"
                            : "border-primary/50 text-primary hover:bg-primary/10"
                        }`}
                      >
                        {mask.translations[locale].modelShort}
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
                    className="gradient-red h-14 min-h-14 flex-1 rounded-full px-8 font-display text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90"
                    onClick={() => {
                      addItem({
                        kind: "mask",
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

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { icon: Award, label: "CE / FCC", sub: ui[locale].certified },
                    { icon: Zap, label: "LED", sub: ui[locale].phototherapy },
                    { icon: ShieldCheck, label: site.maskProduct.certYear, sub: ui[locale].warranty },
                  ].map((cert) => (
                    <div
                      key={cert.label}
                      className="flex flex-col items-center rounded-lg border border-border bg-card p-3 text-center"
                    >
                      <cert.icon className="mb-1 h-6 w-6 text-primary" />
                      <span className="font-display text-xs font-bold uppercase text-foreground">
                        {cert.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {cert.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {catalogLayout ? (
          <>
            <section className="pb-10 pt-6 md:pb-14 md:pt-10">
              <div className="container mx-auto max-w-5xl px-4 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {t.detailHeading || ui[locale].detailsHeading}
                </h2>
                <div className="mx-auto mt-4 h-0.5 w-14 bg-primary" />
              </div>
            </section>
            {renderContentSections(beforeSpecsSections, "pt-0")}
            {renderSpecsTable()}
            {afterSpecsSections.length ? renderContentSections(afterSpecsSections, "pt-8") : null}
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

export default MaskProductPage;
