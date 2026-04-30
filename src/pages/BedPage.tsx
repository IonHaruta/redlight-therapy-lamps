import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { bedBanners } from "@/data/bed";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const base = import.meta.env.BASE_URL;

const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const BedPage = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="px-4 pb-8 pt-10 text-center md:pb-12 md:pt-14">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t.bedPage.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-foreground md:text-5xl">
            {t.bedPage.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.bedPage.lead}</p>
          <Link
            to="/lampi"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
          >
            {t.bedPage.toLamps}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="w-full overflow-x-hidden bg-gradient-to-b from-secondary/30 via-background to-background pb-6 md:pb-24">
          <div className="mx-auto w-full min-w-0 px-0 md:px-5 lg:px-6 xl:px-8">
            <div className="mx-auto flex max-w-md flex-col md:max-w-none md:grid md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6">
              {bedBanners.map((item, idx) => (
                <Fragment key={item.slug}>
                  <Link
                    id={item.slug}
                    to={`/pat/${item.slug}`}
                    className={[
                      "group relative block w-full max-w-none overflow-hidden bg-neutral-950",
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
                      {item.media[0].type === "video" ? (
                        <video
                          src={assetUrl(item.media[0].path)}
                          className={[
                            "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover",
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
                          alt={item.translations[locale].title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.04]"
                        />
                      )}
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 md:via-black/45 md:to-black/10" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.07] md:rounded-2xl lg:rounded-3xl" />

                    <div className="pointer-events-none absolute right-4 top-4 opacity-0 transition-all duration-300 translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/95 ring-1 ring-white/25 backdrop-blur-sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 md:p-7 lg:p-8">
                      <p className="font-display text-xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:text-2xl lg:text-[1.75rem] xl:text-3xl">
                        {item.translations[locale].title}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 md:mt-5 md:px-5 md:py-2.5 md:text-base md:group-hover:bg-white/18 md:group-hover:ring-white/30">
                        {t.bedPage.seeProduct}
                        <ArrowUpRight className="h-4 w-4 opacity-95" />
                      </span>
                    </div>
                  </Link>

                  {idx < bedBanners.length - 1 ? (
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default BedPage;
