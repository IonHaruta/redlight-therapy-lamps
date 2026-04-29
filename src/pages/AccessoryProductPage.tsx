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
import { accessoryProducts, getAccessoryBySlug } from "@/data/accessories";
import type { MaskMedia } from "@/data/masks";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const ui = {
  ro: {
    back: "Înapoi la accesorii",
    category: "Accesorii",
    chooseModel: "Alege modelul",
    addToCart: "ADAUGĂ ÎN COȘ",
    priceNote: "Preț indicativ — confirmăm la comandă.",
    notFound: "Produsul nu a fost găsit",
  },
  ru: {
    back: "Назад к аксессуарам",
    category: "Аксессуары",
    chooseModel: "Выберите модель",
    addToCart: "ДОБАВИТЬ В КОРЗИНУ",
    priceNote: "Цена ориентировочная — уточняем при заказе.",
    notFound: "Товар не найден",
  },
};

const MediaPreview = ({ media, name }: { media: MaskMedia; name: string }) => (
  <img
    src={assetUrl(media.path)}
    alt={media.alt || name}
    className="h-full w-full object-contain"
  />
);

const AccessoryProductPage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const site = getSiteCopy(locale);
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
            <Link to="/accesorii" className="text-primary hover:underline">
              {ui[locale].back}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const t = product.translations[locale];
  const thumbPath = product.media[0]?.path;
  const currentMedia = product.media[selectedMediaIndex] || product.media[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="pb-10 md:pb-14">
          <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-10">
            <Link
              to="/accesorii"
              className="mb-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui[locale].back}
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

                <p className="mt-6 leading-relaxed text-muted-foreground">{t.description}</p>

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

        {t.specsTableTitle && t.specsRows?.length ? (
          <section className="bg-secondary/20 py-12 md:py-16">
            <div className="container mx-auto max-w-4xl px-4">
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

        {t.detailBands?.length
          ? t.detailBands.map((band, bandIndex) => {
              const bandMedia: MaskMedia = {
                type: "image",
                path: band.imagePath,
                alt: t.title,
              };
              const bandMediaOnRight = band.mediaOnRight ?? false;
              return (
                <section
                  key={`${band.imagePath}-${bandIndex}`}
                  className={`py-12 md:py-16 ${
                    bandIndex % 2 === 1 ? "bg-secondary/15" : "bg-background"
                  }`}
                >
                  <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                      <div className={bandMediaOnRight ? "lg:order-2" : ""}>
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-border">
                          <MediaPreview media={bandMedia} name={t.title} />
                        </div>
                      </div>
                      <div className={bandMediaOnRight ? "lg:order-1" : ""}>
                        <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
                          {band.title}
                        </h2>
                        <ul className="mt-5 list-none space-y-5 p-0">
                          {band.bullets.map((b) => (
                            <li
                              key={`${b.title}-${b.body.slice(0, 24)}`}
                              className="flex gap-3 leading-relaxed"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                              <div>
                                <p className="font-semibold text-foreground">{b.title}</p>
                                <p className="mt-1.5 text-muted-foreground">{b.body}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })
          : null}
      </main>

      <FooterSection />
    </div>
  );
};

export default AccessoryProductPage;
