const containSlugs = new Set(["open-trivia", "chalons", "banq"]);
/** Portrait mobile screenshots — need phone aspect, not 16:9 letterbox */
const portraitSlugs = new Set(["open-trivia"]);

interface PremiumImageProps {
  src: string;
  alt: string;
  slug?: string;
  aspectRatio?: string;
  className?: string;
}

export function PremiumImage({
  src,
  alt,
  slug,
  aspectRatio = "16 / 9",
  className = "",
}: PremiumImageProps) {
  const contain = slug ? containSlugs.has(slug) : false;
  const portrait = aspectRatio === "9 / 16" || aspectRatio === "9/16";

  return (
    <div
      className={`premium-media${contain ? " contain" : ""}${portrait ? " portrait" : ""}${className ? ` ${className}` : ""}`}
      style={{ aspectRatio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export { containSlugs, portraitSlugs };
