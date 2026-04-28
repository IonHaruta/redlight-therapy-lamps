import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
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
                <p className="mt-3 font-display text-xl text-primary">{t.subtitle}</p>

                <p className="mt-6 leading-relaxed text-muted-foreground">{t.description}</p>

                <div className="mt-8">
                  <p className="mb-3 font-display text-sm uppercase tracking-wider text-foreground">
                    {ui[locale].chooseModel}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {accessoryProducts.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/accesorii/${a.slug}`}
                        className={`flex min-h-16 items-center justify-center rounded-full border px-4 py-3 text-center font-display text-xs uppercase tracking-wide transition-colors ${
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
                  <div className="flex w-full items-center justify-between rounded-full border border-border sm:w-40">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      −
                    </button>
                    <span className="font-display text-xl text-foreground">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(qty + 1)}
                      className="px-5 py-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    type="button"
                    size="lg"
                    className="gradient-red flex-1 rounded-full py-7 font-display text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90"
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
      </main>

      <FooterSection />
    </div>
  );
};

export default AccessoryProductPage;
