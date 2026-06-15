import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { lampBanners } from "@/data/lamps";
import { accessoryBanners, type AccessoryProduct } from "@/data/accessories";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const cardShellShared = [
  "group relative block w-full max-w-none overflow-hidden",
  "aspect-[4/5] md:aspect-[5/6] lg:aspect-[5/6] xl:aspect-[4/5]",
  "rounded-none md:rounded-2xl lg:rounded-3xl",
  "transition-all duration-300 ease-out",
  "active:scale-[0.99] max-md:active:scale-[0.995] transition-transform",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
  "focus-visible:ring-offset-2 md:focus-visible:ring-offset-background max-md:focus-visible:ring-offset-0",
].join(" ");

const cardShellClass = [
  cardShellShared,
  "bg-white",
  "max-md:shadow-none md:shadow-md md:shadow-black/5 md:ring-1 md:ring-border",
  "md:hover:shadow-xl md:hover:shadow-primary/10 md:hover:-translate-y-1.5 md:hover:ring-primary/30",
].join(" ");

type Tile =
  | { kind: "lamp"; slug: string }
  | { kind: "accessory"; slug: string };

const LampsPage = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  const tiles: Tile[] = [
    ...lampBanners.map((l) => ({ kind: "lamp" as const, slug: l.slug })),
    ...accessoryBanners.map((a) => ({ kind: "accessory" as const, slug: a.slug })),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="px-4 pb-6 pt-10 text-center md:pb-10 md:pt-14">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t.lampsPage.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-foreground md:text-5xl">
            {t.lampsPage.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.lampsPage.lead}</p>
        </section>

        <section className="w-full overflow-x-hidden bg-gradient-to-b from-secondary/30 via-background to-background pb-6 md:pb-24">
          <div className="mx-auto w-full min-w-0 max-w-[1600px] px-0 md:px-5 lg:px-8 xl:px-10">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-8">
              {tiles.map((tile, idx) => {
                const isLamp = tile.kind === "lamp";
                const item = isLamp
                  ? lampBanners.find((l) => l.slug === tile.slug)!
                  : accessoryBanners.find((a) => a.slug === tile.slug)!;
                const accessoryCover =
                  !isLamp && (item as AccessoryProduct).listingCardImageFit === "cover";
                const tr = item.translations[locale];
                const cardTitle = isLamp ? item.name : tr.title;
                const to = isLamp ? `/lampi/${tile.slug}` : `/accesorii/${tile.slug}`;
                const cta = isLamp ? t.lampsPage.seeLamp : t.accessoriesPage.seeProduct;

                return (
                  <Fragment key={`${tile.kind}-${tile.slug}`}>
                    <Link
                      id={tile.slug}
                      to={to}
                      className={`${cardShellClass} flex flex-col`}
                    >
                      <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
                        {isLamp && item.media[0].type === "video" ? (
                          <video
                            src={assetUrl(item.media[0].path)}
                            className={[
                              "absolute left-1/2 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 bg-white object-cover object-center",
                              "transition-transform duration-500 ease-out md:group-hover:scale-[1.04]",
                            ].join(" ")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={assetUrl(item.media[0].path)}
                            alt={cardTitle}
                            className={[
                              "absolute inset-0 h-full w-full bg-white object-center transition-transform duration-500 ease-out md:group-hover:scale-[1.04]",
                              isLamp || accessoryCover ? "object-cover" : "object-contain",
                            ].join(" ")}
                          />
                        )}

                        {isLamp && item.media[0].type === "video" ? (
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 max-md:opacity-0 md:group-hover:opacity-100">
                            <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-primary/85 text-primary-foreground shadow-lg ring-2 ring-background transition-transform duration-300 md:group-hover:scale-100">
                              <Play className="ml-0.5 h-6 w-6" strokeWidth={2} />
                            </span>
                          </div>
                        ) : null}

                        <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-all duration-300 translate-y-1 md:right-4 md:top-4 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-sm ring-1 ring-border">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] md:rounded-2xl lg:rounded-3xl" />

                      <div className="relative z-[1] flex min-h-[11rem] flex-col gap-2 border-t border-border/50 bg-white px-4 py-4 sm:min-h-[12rem] sm:px-5 sm:py-5 md:min-h-[13rem] md:gap-2.5 md:px-6 md:py-5 lg:min-h-[14rem] lg:px-7 lg:py-6">
                        <p className="font-display text-lg font-bold leading-normal tracking-tight text-balance text-foreground md:text-xl lg:text-2xl">
                          {cardTitle}
                        </p>
                        <p className="max-w-none flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {tr.subtitle}
                        </p>
                        <span className="inline-flex w-fit max-w-full shrink-0 items-center gap-1.5 self-start rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold leading-snug text-primary ring-1 ring-primary/15 transition-colors duration-300 md:px-3.5 md:py-2 md:text-xs md:group-hover:bg-primary/15">
                          {cta}
                          <ArrowUpRight className="h-2.5 w-2.5 shrink-0 opacity-95 md:h-3 md:w-3" />
                        </span>
                      </div>
                    </Link>

                    {idx < tiles.length - 1 ? (
                      <div
                        className="flex w-full shrink-0 flex-col bg-background md:hidden"
                        aria-hidden
                      >
                        <div className="h-7 w-full" />
                        <div className="w-full px-0">
                          <div className="h-[3px] w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_16px_hsl(var(--primary)/0.35)]" />
                        </div>
                        <div className="h-7 w-full" />
                      </div>
                    ) : null}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default LampsPage;
