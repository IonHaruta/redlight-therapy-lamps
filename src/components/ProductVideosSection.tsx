import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { homeProductBanners } from "@/data/home-banners";

const youtubeEmbedSrc = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&modestbranding=1&rel=0`;

const ProductVideosSection = () => {
  return (
    <section id="produse" className="py-16 md:py-24 bg-gradient-to-b from-secondary/40 via-background to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-foreground">
          Descoperă produsele
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {homeProductBanners.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group relative aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden bg-muted block shadow-lg shadow-black/5 ring-1 ring-black/[0.06] transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 hover:ring-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  title={item.label}
                  src={youtubeEmbedSrc(item.youtubeId)}
                  className="absolute top-1/2 left-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Vignette + gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/45 to-black/15 md:to-transparent" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />

              {/* Center play hint */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md ring-2 ring-white/40 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white ml-0.5" strokeWidth={2} />
                </span>
              </div>

              {/* Top label chip */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 pointer-events-none">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground shadow-md">
                  {item.label}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white/95 backdrop-blur-sm ring-1 ring-white/20 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              {/* Bottom copy */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-white/80 leading-snug max-w-[95%]">
                  {item.subtitle}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:gap-2.5 transition-all">
                  Vezi produsul
                  <ArrowUpRight className="h-4 w-4 opacity-90" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVideosSection;
