import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { publicAssetUrl } from "@/lib/public-asset-url";

const certificates = Array.from({ length: 18 }, (_, index) => {
  const number = index + 1;
  return {
    id: number,
    src: publicAssetUrl(`certificate/${number}.jpg`),
    alt: `Certificat Red Light Therapy ${number}`,
  };
});

const LogoTicker = () => {
  const [selected, setSelected] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-white py-8">
      <div className="relative">
        <div className="flex w-max animate-marquee items-center gap-5 hover:[animation-play-state:paused]">
          {[...certificates, ...certificates].map((certificate, index) => (
            <button
              key={`${certificate.id}-${index}`}
              type="button"
              onClick={() => setSelected(certificate)}
              className="group h-28 w-40 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md md:h-32 md:w-48"
              aria-label={`Mărește ${certificate.alt}`}
            >
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="h-full w-full object-contain transition group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-[92vw] border-0 bg-white p-3 shadow-2xl sm:max-w-4xl">
          <DialogTitle className="sr-only">{selected?.alt}</DialogTitle>
          <DialogDescription className="sr-only">
            Certificat deschis în dimensiune mare.
          </DialogDescription>
          {selected ? (
            <img
              src={selected.src}
              alt={selected.alt}
              className="mx-auto max-h-[84vh] w-auto max-w-full rounded-md object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LogoTicker;
