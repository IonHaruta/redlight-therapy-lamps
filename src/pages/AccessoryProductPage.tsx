import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import {
  accessoryProducts,
  getAccessoryBySlug,
  type AccessoryDetailBand,
  type AccessoryTranslation,
} from "@/data/accessories";
import type { MaskMedia } from "@/data/masks";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const ui = {
  ro: {
    category: "Accesorii",
    chooseModel: "Alege modelul",
    addToCart: "ADAUGĂ ÎN COȘ",
    priceNote: "Preț indicativ — confirmăm la comandă.",
    notFound: "Produsul nu a fost găsit",
  },
  ru: {
    category: "Аксессуары",
    chooseModel: "Выберите модель",
    addToCart: "ДОБАВИТЬ В КОРЗИНУ",
    priceNote: "Цена ориентировочная — уточняем при заказе.",
    notFound: "Товар не найден",
  },
  en: {
    category: "Accessories",
    chooseModel: "Choose model",
    addToCart: "ADD TO CART",
    priceNote: "Indicative price — confirmed when you order.",
    notFound: "Product not found",
  },
};

const MediaPreview = ({ media, name }: { media: MaskMedia; name: string }) => (
  <img
    src={assetUrl(media.path)}
    alt={media.alt || name}
    className="h-full w-full object-contain"
  />
);

export function renderAccessoryDetailBand(
  band: AccessoryDetailBand,
  bandIndex: number,
  productTitle: string,
) {
  const textOnly = band.textOnly ?? false;

  if (textOnly) {
    return (
      <section
        key={`detail-text-${bandIndex}`}
        className={`py-12 md:py-16 ${
          bandIndex % 2 === 1 ? "bg-secondary/15" : "bg-background"
        }`}
      >
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-display text-xl font-bold text-primary md:text-2xl">{band.title}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {band.paragraphs?.map((p, i) => (
              <p key={i} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const bandMedia: MaskMedia = {
    type: "image",
    path: band.imagePath ?? "",
    alt: productTitle,
  };
  const bandMediaSecondary: MaskMedia | null = band.splitImagePath
    ? { type: "image", path: band.splitImagePath, alt: productTitle }
    : null;
  const bandMediaOnRight = band.mediaOnRight ?? false;
  const titleCentered = band.titleCentered ?? false;
  const headlineRule = Boolean(band.centeredHeadlineRule && band.eyebrow);
  const useDisc = band.bulletStyle === "disc";

  const imageColumn = (
    <div className={bandMediaOnRight ? "lg:order-2" : ""}>
      {bandMediaSecondary ? (
        <div className="flex aspect-[4/3] w-full gap-0 overflow-hidden">
          <div className="relative min-h-0 min-w-0 flex-1">
            <img
              src={assetUrl(bandMedia.path)}
              alt={bandMedia.alt || productTitle}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative min-h-0 min-w-0 flex-1">
            <img
              src={assetUrl(bandMediaSecondary.path)}
              alt={bandMediaSecondary.alt || productTitle}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="aspect-[4/3] overflow-hidden">
          <MediaPreview media={bandMedia} name={productTitle} />
        </div>
      )}
    </div>
  );

  const listUlClass = [
    titleCentered ? "mt-0 lg:mt-0" : "mt-5",
    useDisc
      ? "list-disc space-y-3 pl-5 text-foreground marker:text-foreground"
      : "list-none space-y-5 p-0",
  ].join(" ");

  const bulletList = (
    <ul className={listUlClass}>
      {(band.bullets ?? []).map((b, bulletIndex) =>
        useDisc ? (
          <li
            key={`${bandIndex}-${bulletIndex}-${b.title.slice(0, 48)}`}
            className="pl-1 leading-relaxed text-foreground"
          >
            <span className="font-normal">{b.title}</span>
            {b.body.trim() ? (
              <p className="mt-1.5 text-muted-foreground">{b.body}</p>
            ) : null}
          </li>
        ) : (
          <li
            key={`${bandIndex}-${bulletIndex}-${b.title.slice(0, 48)}`}
            className="flex gap-3 leading-relaxed"
          >
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="font-semibold text-foreground">{b.title}</p>
              {b.body.trim() ? (
                <p className="mt-1.5 text-muted-foreground">{b.body}</p>
              ) : null}
            </div>
          </li>
        ),
      )}
    </ul>
  );

  return (
    <section
      key={`${band.imagePath ?? "band"}-${bandIndex}`}
      className={`py-12 md:py-16 ${
        bandIndex % 2 === 1 ? "bg-secondary/15" : "bg-background"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {headlineRule ? (
          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
            <p className="text-balance font-display text-lg font-bold leading-snug tracking-tight text-foreground md:text-xl">
              {band.eyebrow}
            </p>
            <div
              className="mx-auto mt-4 h-1 w-14 rounded-sm bg-primary md:w-16"
              aria-hidden
            />
          </div>
        ) : null}

        {titleCentered ? (
          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {band.title}
            </h2>
          </div>
        ) : null}

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {imageColumn}
          <div className={bandMediaOnRight ? "lg:order-1" : ""}>
            {!titleCentered && !headlineRule ? (
              <>
                {band.eyebrow ? (
                  <p className="mb-3 text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
                    {band.eyebrow}
                  </p>
                ) : null}
                <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
                  {band.title}
                </h2>
              </>
            ) : null}

            {headlineRule ? (
              <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
                {band.title}
              </h2>
            ) : null}

            {titleCentered && band.titleSupplement ? (
              <p className="mb-5 text-balance font-display text-lg font-bold leading-snug text-primary md:mb-6 md:text-xl">
                {band.titleSupplement}
              </p>
            ) : null}

            {(band.bullets?.length ?? 0) > 0 ? bulletList : null}
            {band.paragraphs?.length ? (
              <div
                className={`${
                  (band.bullets?.length ?? 0) > 0 ? "mt-6" : "mt-5"
                } space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base`}
              >
                {band.paragraphs.map((p, i) => (
                  <p key={i} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function renderAccessoryDetailCardGrid(
  grid: NonNullable<AccessoryTranslation["detailCardGrid"]>,
  sectionIndex: number,
) {
  if (!grid.cards.length) return null;
  const stripe = sectionIndex % 2 === 1 ? "bg-secondary/15" : "bg-background";
  return (
    <section className={`py-12 md:py-16 ${stripe}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-4xl text-balance text-center font-display text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
          {grid.headline}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {grid.cards.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="flex flex-col rounded-lg border border-border bg-card px-6 py-8 text-center md:min-h-[280px] md:justify-center md:py-10"
            >
              <h3 className="font-display text-base font-bold text-foreground md:text-lg">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function renderAccessoryModelCompareTable(
  table: NonNullable<AccessoryTranslation["modelCompareTable"]>,
) {
  if (!table.rows.length) return null;
  return (
    <section className="bg-secondary/20 py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-center font-display text-xl font-bold text-foreground md:text-2xl">
          {table.title}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-background shadow-sm">
          <div className="min-w-[min(100%,46rem)] md:min-w-0">
            <div className="grid grid-cols-[minmax(7rem,1.15fr)_minmax(5.5rem,1fr)_minmax(5.5rem,1fr)] border-b border-border bg-secondary px-3 py-2.5 text-xs font-semibold leading-snug sm:px-4 sm:text-sm">
              <span>{table.featureLabel}</span>
              <span className="text-center">{table.modelALabel}</span>
              <span className="text-center">{table.modelBLabel}</span>
            </div>
            {table.rows.map((row, index) => (
              <div
                key={`${row.label}-${index}`}
                className={`grid grid-cols-[minmax(7rem,1.15fr)_minmax(5.5rem,1fr)_minmax(5.5rem,1fr)] gap-x-2 gap-y-1 border-b border-border/80 px-3 py-3 text-xs leading-relaxed last:border-b-0 sm:gap-x-3 sm:px-4 sm:text-sm ${
                  index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                }`}
              >
                <span className="font-medium text-foreground">{row.label}</span>
                <span className="text-muted-foreground">{row.modelA}</span>
                <span className="text-muted-foreground">{row.modelB}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const AccessoryProductPage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const site = getSiteCopy(locale);
  const backToListingLabel =
    locale === "ro"
      ? `Înapoi la ${site.lampsPage.eyebrow}`
      : locale === "ru"
        ? `Назад: ${site.lampsPage.eyebrow}`
        : `Back to ${site.lampsPage.eyebrow}`;
  const { addItem } = useCart();
  const product = getAccessoryBySlug(slug || "");
  const [qty, setQty] = useState(1);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  useEffect(() => {
    setSelectedMediaIndex(0);
  }, [slug]);

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
              {backToListingLabel}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const t = product.translations[locale];
  const thumbPath = product.media[0]?.path;
  const currentMedia = product.media[selectedMediaIndex] || product.media[0];
  const allDetailBands = t.detailBands ?? [];
  const bandsBeforeSpecs = allDetailBands.filter((b) => !b.afterSpecs);
  const bandsAfterSpecs = allDetailBands.filter((b) => b.afterSpecs);
  const hasCardGrid = Boolean(t.detailCardGrid?.cards?.length);
  const cardGridInsertAfter = hasCardGrid
    ? Math.min(
        Math.max(0, t.detailCardGrid!.insertAfterBandCount ?? 1),
        bandsBeforeSpecs.length,
      )
    : 0;
  const bandsBeforeCardGrid = bandsBeforeSpecs.slice(0, cardGridInsertAfter);
  const bandsAfterCardGrid = bandsBeforeSpecs.slice(cardGridInsertAfter);
  const detailSectionsBeforeSpecs =
    bandsBeforeCardGrid.length + (hasCardGrid ? 1 : 0) + bandsAfterCardGrid.length;
  const firstDetailBandIndexAfterSpecs = detailSectionsBeforeSpecs;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="pb-10 md:pb-14">
          <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-10">
            <Link
              to="/lampi"
              className="mb-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {backToListingLabel}
            </Link>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-border">
                  {currentMedia ? <MediaPreview media={currentMedia} name={t.title} /> : null}
                </div>

                <div
                  className={
                    product.media.length > 4
                      ? "mt-3 grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-6"
                      : "mt-3 grid grid-cols-3 gap-2"
                  }
                >
                  {product.media.map((media, index) => (
                    <button
                      key={`${media.path}-${index}`}
                      type="button"
                      onClick={() => setSelectedMediaIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-sm border bg-white transition-colors ${
                        selectedMediaIndex === index
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/40"
                      }`}
                      aria-label={media.alt}
                    >
                      <MediaPreview media={media} name={t.title} />
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
                {(t.subtitle ?? "").trim() ? (
                  <p className="mt-3 font-display text-xl text-primary">{t.subtitle}</p>
                ) : null}

                <p className="mt-6 whitespace-pre-line leading-relaxed text-muted-foreground">
                  {t.description}
                </p>

                {t.featuresTitle && t.features?.length ? (
                  <div className="mt-8">
                    <h2 className="font-display text-lg font-bold text-foreground md:text-xl">
                      {t.featuresTitle}
                    </h2>
                    <ul className="mt-4 list-none space-y-5 p-0">
                      {t.features.map((f) => (
                        <li
                          key={`${f.title}-${f.body.slice(0, 32)}`}
                          className="flex gap-3 leading-relaxed"
                        >
                          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          <div>
                            <p className="font-semibold text-foreground">{f.title}</p>
                            <p className="mt-1.5 text-muted-foreground">{f.body}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8">
                  <p className="mb-3 font-display text-sm uppercase tracking-wider text-foreground">
                    {ui[locale].chooseModel}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {accessoryProducts.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/accesorii/${a.slug}`}
                        className={`flex h-12 items-center justify-center rounded-full border px-4 text-center font-display text-xs uppercase tracking-wide transition-colors ${
                          a.slug === product.slug
                            ? "gradient-red border-transparent text-primary-foreground"
                            : "border-primary/50 text-primary hover:bg-primary/10"
                        }`}
                      >
                        {a.translations[locale].modelShort}
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
                        kind: "accessory",
                        slug: product.slug,
                        name: t.title,
                        price: product.price,
                        priceValue: product.priceValue,
                        thumb: thumbPath,
                        qty,
                      });
                      toast.success(site.cart.added);
                    }}
                  >
                    {product.price} {ui[locale].addToCart} →
                  </Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{ui[locale].priceNote}</p>
              </div>
            </div>
          </div>
        </section>

        {bandsBeforeCardGrid.map((band, i) =>
          renderAccessoryDetailBand(band, i, t.title),
        )}

        {hasCardGrid
          ? renderAccessoryDetailCardGrid(t.detailCardGrid!, bandsBeforeCardGrid.length)
          : null}

        {bandsAfterCardGrid.map((band, i) =>
          renderAccessoryDetailBand(
            band,
            bandsBeforeCardGrid.length + (hasCardGrid ? 1 : 0) + i,
            t.title,
          ),
        )}

        {t.modelCompareTable?.rows.length ? (
          renderAccessoryModelCompareTable(t.modelCompareTable)
        ) : t.specsTableTitle && t.specsRows?.length ? (
          <section className="bg-secondary/20 py-12 md:py-16">
            <div className="container mx-auto max-w-4xl px-4">
              {t.specsTableLead?.trim() ? (
                <p className="mx-auto mb-6 max-w-3xl text-center text-base font-semibold leading-relaxed text-foreground md:mb-8 md:text-lg">
                  {t.specsTableLead}
                </p>
              ) : null}
              <h2 className="mb-6 text-center font-display text-xl font-bold text-foreground md:text-2xl">
                {t.specsTableTitle}
              </h2>
              <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
                <div className="grid grid-cols-[0.9fr_1.1fr] border-b border-border bg-secondary px-4 py-2.5 text-sm font-semibold">
                  <span>{t.specsColumnFeature}</span>
                  <span>{t.specsColumnValue}</span>
                </div>
                {t.specsRows.map((row, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className={`grid grid-cols-[0.9fr_1.1fr] gap-4 border-b border-border/80 px-4 py-3 text-sm last:border-b-0 ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                    }`}
                  >
                    <span className="font-medium text-foreground">{row.label}</span>
                    <span className="text-muted-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {bandsAfterSpecs.length
          ? bandsAfterSpecs.map((band, i) =>
              renderAccessoryDetailBand(band, firstDetailBandIndexAfterSpecs + i, t.title),
            )
          : null}
      </main>

      <FooterSection />
    </div>
  );
};

export default AccessoryProductPage;
