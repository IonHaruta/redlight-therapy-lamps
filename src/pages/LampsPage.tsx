import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { lampBanners } from "@/data/lamps";
import { accessoryBanners } from "@/data/accessories";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const cardShellShared = [
  "group relative block w-full max-w-none overflow-hidden",
  "aspect-[4/5] md:aspect-[4/3] lg:aspect-[5/4] xl:aspect-square",
  "rounded-none md:rounded-2xl lg:rounded-3xl",
  "transition-all duration-300 ease-out",
  "active:scale-[0.99] max-md:active:scale-[0.995] transition-transform",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
  "focus-visible:ring-offset-2 md:focus-visible:ring-offset-background max-md:focus-visible:ring-offset-0",
].join(" ");

function cardShellClass(isLamp: boolean) {
  return [
    cardShellShared,
    isLamp
      ? [
          "bg-white",
          "max-md:shadow-none md:shadow-md md:shadow-black/5 md:ring-1 md:ring-border",
          "md:hover:shadow-xl md:hover:shadow-primary/10 md:hover:-translate-y-1.5 md:hover:ring-primary/30",
        ].join(" ")
      : [
          "bg-neutral-950",
          "max-md:shadow-none md:shadow-lg md:shadow-black/5 md:ring-1 md:ring-black/[0.06]",
          "md:hover:shadow-2xl md:hover:shadow-primary/10 md:hover:-translate-y-1.5 md:hover:ring-primary/25",
        ].join(" "),
  ].join(" ");
}

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
          <div className="mx-auto w-full min-w-0 px-0 md:px-5 lg:px-6 xl:px-8">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
              {tiles.map((tile, idx) => {
                const isLamp = tile.kind === "lamp";
                const item = isLamp
                  ? lampBanners.find((l) => l.slug === tile.slug)!
                  : accessoryBanners.find((a) => a.slug === tile.slug)!;
                const tr = item.translations[locale];
                const to = isLamp ? `/lampi/${tile.slug}` : `/accesorii/${tile.slug}`;
                const cta = isLamp ? t.lampsPage.seeLamp : t.accessoriesPage.seeProduct;

                return (
                  <Fragment key={`${tile.kind}-${tile.slug}`}>
                    <Link id={tile.slug} to={to} className={cardShellClass(isLamp)}>
                      <div className={`absolute inset-0 overflow-hidden ${isLamp ? "bg-white" : ""}`}>
                        {isLamp && item.media[0].type === "video" ? (
                          <video
                            src={assetUrl(item.media[0].path)}
                            className={[
                              "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-white object-contain md:object-cover",
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
                            alt={tr.title}
                            className={[
                              "h-full w-full transition-transform duration-500 ease-out md:group-hover:scale-[1.04]",
                              isLamp
                                ? "bg-white object-contain object-center md:object-cover"
                                : "object-cover",
                            ].join(" ")}
                          />
                        )}
                      </div>

                      {isLamp ? (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background from-25% via-background/50 to-transparent md:from-35%" />
                      ) : (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 md:via-black/45 md:to-black/10" />
                      )}
                      <div
                        className={`pointer-events-none absolute inset-0 ring-1 ring-inset md:rounded-2xl lg:rounded-3xl ${
                          isLamp ? "ring-black/[0.06]" : "ring-white/[0.07]"
                        }`}
                      />

                      {isLamp && item.media[0].type === "video" ? (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 max-md:opacity-0 md:group-hover:opacity-100">
                          <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-primary/85 text-primary-foreground shadow-lg ring-2 ring-background transition-transform duration-300 md:group-hover:scale-100">
                            <Play className="ml-0.5 h-6 w-6" strokeWidth={2} />
                          </span>
                        </div>
                      ) : null}

                      <div className="pointer-events-none absolute right-4 top-4 opacity-0 transition-all duration-300 translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <span
                          className={
                            isLamp
                              ? "flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm"
                              : "flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/95 ring-1 ring-white/25 backdrop-blur-sm"
                          }
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
                        <p
                          className={
                            isLamp
                              ? "font-display text-xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-2xl lg:text-[1.75rem] xl:text-3xl"
                              : "font-display text-xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:text-2xl lg:text-[1.75rem] xl:text-3xl"
                          }
                        >
                          {tr.title}
                        </p>
                        <p
                          className={
                            isLamp
                              ? "mt-1.5 max-w-[95%] text-xs text-muted-foreground md:mt-2 md:text-sm"
                              : "mt-1.5 max-w-[95%] text-xs text-white/75 md:mt-2 md:text-sm"
                          }
                        >
                          {tr.subtitle}
                        </p>
                        <span
                          className={
                            isLamp
                              ? "mt-2 inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-primary/35 bg-primary/10 px-2 py-1 text-[10px] font-semibold leading-tight text-primary shadow-sm ring-1 ring-primary/15 backdrop-blur-sm transition-all duration-300 md:mt-2.5 md:gap-1 md:px-2.5 md:py-1 md:text-xs md:group-hover:bg-primary/15"
                              : "mt-2 inline-flex w-fit max-w-full items-center gap-1 rounded-full bg-white/12 px-2 py-1 text-[10px] font-semibold leading-tight text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 md:mt-2.5 md:gap-1 md:px-2.5 md:py-1 md:text-xs md:group-hover:bg-white/18 md:group-hover:ring-white/30"
                          }
                        >
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
