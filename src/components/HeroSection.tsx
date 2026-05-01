import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const HERO_VIDEO_PATH = "main-video/main-video.mp4";

const base = import.meta.env.BASE_URL;
const assetUrl = (path: string) =>
  `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

const HeroSection = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={assetUrl(HERO_VIDEO_PATH)}
          className="absolute inset-0 h-full w-full object-cover scale-[1.06] pointer-events-none bg-black"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-20 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary text-glow mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90">{t.hero.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
