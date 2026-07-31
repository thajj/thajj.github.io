interface SectionHeadProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function SectionHead({ eyebrow, title, intro }: SectionHeadProps) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
