const containSlugs = new Set(["open-trivia", "chalons", "banq"]);

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

  return (
    <div
      className={`premium-media${contain ? " contain" : ""}${className ? ` ${className}` : ""}`}
      style={{ aspectRatio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export { containSlugs };
