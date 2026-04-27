import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";

const HERO_VIDEOS = ["U2JulLyhQ6U", "YG-svcr1u8c"];

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

const HeroSection = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isApiReady, setIsApiReady] = useState(false);

  const loadVideo = useCallback((index: number) => {
    const videoId = HERO_VIDEOS[index];
    if (!playerRef.current || !videoId) return;

    playerRef.current.loadVideoById(videoId);
    playerRef.current.playVideo();
    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    const next = (currentIndexRef.current + 1) % HERO_VIDEOS.length;
    loadVideo(next);
  }, [loadVideo]);

  const goToPrev = useCallback(() => {
    const prev = (currentIndexRef.current - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length;
    loadVideo(prev);
  }, [loadVideo]);

  const goToNextRef = useRef(goToNext);
  goToNextRef.current = goToNext;

  useEffect(() => {
    const initPlayer = () => {
      if (!containerRef.current || !window.YT?.Player) return;

      playerRef.current = new window.YT.Player("hero-video-player", {
        videoId: HERO_VIDEOS[0],
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          loop: 0,
        },
        events: {
          onStateChange: (event: YT.OnStateChangeEvent) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              goToNextRef.current();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
      setIsApiReady(true);
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
        setIsApiReady(true);
      };
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
      {/* Video Background */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <div
          id="hero-video-player"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] min-w-[177.78vh] min-h-[100vh] h-[177.78vw] pointer-events-none"
        />
        {!isApiReady && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${HERO_VIDEOS[0]}/maxresdefault.jpg)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
        aria-label={t.hero.prevVideo}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
        aria-label={t.hero.nextVideo}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => loadVideo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`${t.hero.videoDot} ${index + 1}`}
          />
        ))}
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
