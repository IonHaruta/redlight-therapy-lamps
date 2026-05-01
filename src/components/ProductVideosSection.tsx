import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { homeProductBanners } from "@/data/home-banners";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

type BannerId = "therapy-masks" | "lamps-accessories" | "pat";

const base = import.meta.env.BASE_URL;
const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const youtubeEmbedSrc = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&modestbranding=1&rel=0`;

const ProductVideosSection = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <section
      id="produse"
      className="scroll-mt-20 w-full overflow-x-hidden bg-gradient-to-b from-secondary/30 via-background to-background py-6 md:py-24"
    >
      <div className="mx-auto w-full min-w-0 px-0 md:px-5 lg:px-6 xl:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6">
          {homeProductBanners.map((item, idx) => (
            <Fragment key={item.id}>
              <Link
                to={item.to}
                className={[
                  "group relative block w-full max-w-none overflow-hidden bg-neutral-950",
                  /* Mobil: feed vertical. Desktop: bandă aproape full-bleed; la xl pătrat = maxim înălțime pe coloană */
                  "aspect-[4/5] md:aspect-[4/3] lg:aspect-[5/4] xl:aspect-square",
                  "rounded-none md:rounded-2xl lg:rounded-3xl",
                  "max-md:shadow-none md:shadow-lg md:shadow-black/5 md:ring-1 md:ring-black/[0.06]",
                  "transition-all duration-300 ease-out",
                  "md:hover:shadow-2xl md:hover:shadow-primary/10 md:hover:-translate-y-1.5 md:hover:ring-primary/25",
                  "active:scale-[0.99] max-md:active:scale-[0.995] transition-transform",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  "focus-visible:ring-offset-2 md:focus-visible:ring-offset-background max-md:focus-visible:ring-offset-0",
                ].join(" ")}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {item.videoPath ? (
                    <video
                      title={t.homeBanners[item.id as BannerId].subtitle}
                      src={assetUrl(item.videoPath)}
                      className={[
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover",
                        "transition-transform duration-500 ease-out md:group-hover:scale-[1.03]",
                        "h-full w-full",
                      ].join(" ")}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <iframe
                      title={t.homeBanners[item.id as BannerId].subtitle}
                      src={youtubeEmbedSrc(item.youtubeId)}
                      className={[
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none",
                        "transition-transform duration-500 ease-out md:group-hover:scale-[1.03]",
                        "max-md:h-[165%] max-md:w-[165%]",
                        "md:h-[158%] md:w-[158%] lg:h-[162%] lg:w-[162%] xl:h-[168%] xl:w-[168%]",
                      ].join(" ")}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  )}
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25 md:via-black/45 md:to-black/15" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.07] md:rounded-2xl" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 max-md:opacity-0 md:group-hover:opacity-100">
                  <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-2 ring-white/35 backdrop-blur-md transition-transform duration-300 md:group-hover:scale-100">
                    <Play className="ml-0.5 h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                </div>

                <div className="pointer-events-none absolute right-4 top-4 opacity-0 transition-all duration-300 translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/95 ring-1 ring-white/25 backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 md:p-7 lg:p-8">
                  <p className="font-display text-xl font-bold leading-tight tracking-tight text-white text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:text-2xl lg:text-[1.75rem] xl:text-3xl">
                    {t.homeBanners[item.id as BannerId].subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 md:mt-5 md:px-5 md:py-2.5 md:text-base md:group-hover:bg-white/18 md:group-hover:ring-white/30">
                    {t.seeProduct}
                    <ArrowUpRight className="h-4 w-4 opacity-95" />
                  </span>
                </div>
              </Link>
              {idx < homeProductBanners.length - 1 ? (
                <div
                  className="flex w-full shrink-0 flex-col bg-background md:hidden"
                  aria-hidden
                >
                  <div className="h-7 w-full" />
                  <div className="w-full px-0">
                    <div
                      className="h-[3px] w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_16px_hsl(var(--primary)/0.35)]"
                    />
                  </div>
                  <div className="h-7 w-full" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVideosSection;
