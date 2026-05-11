import { Fragment } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import { publicAssetUrl } from "@/lib/public-asset-url";
import { cn } from "@/lib/utils";

/** SVG-uri vectoriale (ETL/IEC, FDA, CE/RoHS). */
const bandaFiles = [
  "banda/trust-etl-iec-medical-grade.svg",
  "banda/trust-fda-class-ii.svg",
  "banda/trust-ce-rohs.svg",
] as const;

const LogoTicker = () => {
  const { locale } = useLocale();
  const t = getSiteCopy(locale);

  const segments = bandaFiles.map((path, index) => ({
    id: index + 1,
    src: publicAssetUrl(path),
  }));

  const captionFor = (index: number) => {
    if (index === 0) {
      const { segment1Lead, segment1Emphasis, segment1Tail } = t.trustBar;
      return (
        <>
          {segment1Lead}
          {segment1Emphasis ? (
            <strong className="font-semibold">{segment1Emphasis}</strong>
          ) : null}
          {segment1Tail}
        </>
      );
    }
    if (index === 1) return t.trustBar.segment2Text;
    return t.trustBar.segment3Text;
  };

  const imgClass =
    "h-auto max-h-[2rem] w-auto shrink-0 object-contain object-center mix-blend-multiply sm:max-h-[2.35rem] md:max-h-[2.65rem]";
  const textClass =
    "max-w-[18rem] text-balance text-center font-body text-[0.6875rem] font-medium leading-snug tracking-tight text-neutral-900 sm:max-w-[20rem] sm:text-xs md:text-left md:text-sm lg:text-[0.9375rem]";
  const marqueeTextClass =
    "max-w-none whitespace-nowrap font-body text-[0.6875rem] font-medium leading-snug tracking-tight text-neutral-900 sm:text-xs";

  const renderMarqueeSegment = (index: number, keyPrefix: string) => {
    const segment = segments[index]!;
    return (
      <Fragment key={`${keyPrefix}-${segment.id}`}>
        {index > 0 ? (
          <span
            className="shrink-0 px-2 font-display text-sm font-light tracking-[0.08em] text-neutral-700 sm:text-base"
            aria-hidden
          >
            //
          </span>
        ) : null}
        <div className="flex shrink-0 items-center gap-2 pr-2 sm:gap-2.5 sm:pr-3">
          <img
            src={segment.src}
            alt=""
            aria-hidden
            className={imgClass}
            loading="lazy"
            decoding="async"
          />
          <p className={marqueeTextClass}>{captionFor(index)}</p>
        </div>
      </Fragment>
    );
  };

  return (
    <section
      className={cn(
        "relative z-20 -mt-12 bg-[#e5dfdf] px-3 pb-0 pt-0.5 md:-mt-20 md:px-4",
        "md:py-3 lg:py-4",
      )}
      aria-label={t.trustBar.ariaTitle}
    >
      <div
        className={cn(
          "relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-[#e5dfdf] px-2.5 py-2 shadow-[0_-6px_24px_-12px_rgba(0,0,0,0.14)]",
          "md:rounded-[2rem] md:px-7 md:py-3 lg:py-3.5",
        )}
      >
        {/* Mobil: bandă infinită lentă și liniară (CSS marquee) */}
        <div className="md:hidden">
          <div className="motion-reduce:hidden overflow-hidden py-0.5 [mask-image:linear-gradient(to_right,transparent,black_8px,black_calc(100%_-_8px),transparent)]">
            <div className="flex w-max animate-marquee-trust will-change-transform">
              <div className="flex shrink-0 items-center">{segments.map((_, i) => renderMarqueeSegment(i, "m1"))}</div>
              <div className="flex shrink-0 items-center" aria-hidden>
                {segments.map((_, i) => renderMarqueeSegment(i, "m2"))}
              </div>
            </div>
          </div>

          {/* Fără animație: preferința „reduce motion” */}
          <div className="hidden flex-col items-center gap-2 py-1 motion-reduce:flex">
            {segments.map((segment, index) => (
              <div key={`static-${segment.id}`} className="flex flex-col items-center justify-center gap-1">
                <img
                  src={segment.src}
                  alt=""
                  aria-hidden
                  className={imgClass}
                  loading="lazy"
                  decoding="async"
                />
                <p className={textClass}>{captionFor(index)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — aliniere verticală clară */}
        <div className="hidden flex-row flex-nowrap items-center justify-center md:flex lg:px-2">
          {segments.map((segment, index) => (
            <Fragment key={segment.id}>
              {index > 0 ? (
                <span
                  className="flex shrink-0 items-center justify-center self-center font-display text-lg font-light tracking-[0.06em] text-neutral-700 md:px-2 lg:text-xl"
                  aria-hidden
                >
                  //
                </span>
              ) : null}
              <div className="flex min-w-0 max-w-lg flex-1 basis-0 flex-row items-center justify-center gap-2 bg-[#e5dfdf] lg:gap-3">
                <img
                  src={segment.src}
                  alt=""
                  aria-hidden
                  className={imgClass}
                  loading="lazy"
                  decoding="async"
                />
                <p className={cn(textClass, "sm:max-w-none")}>{captionFor(index)}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
