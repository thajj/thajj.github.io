import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const pillars = [
  {
    num: "01",
    title: "Platforms",
    body: "From knowledge platforms to privacy-first products — architecture that federates content, respects rights and compliance, and runs where the user actually lives.",
  },
  {
    num: "02",
    title: "Deployment",
    body: "Ideation to mass rollout for public and private organizations: cities, institutions, and operators who need early warning — not another dashboard demo.",
  },
  {
    num: "03",
    title: "Leadership",
    body: "Hands-on technical direction for teams of 10+. R&D roadmaps, tenders, and product shipping — without leaving the craft behind.",
  },
];

export function PremiumPillars() {
  return (
    <section id="focus">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Focus"
            title="Where I create leverage."
            intro="Platform architecture, institutional deployment, and hands-on leadership — the same muscles from knowledge technologies, applied to cloud-native and AI-enabled systems."
          />
        </Reveal>
        <div className="pillars">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 90}>
              <article className="pillar">
                <span className="num">{pillar.num}</span>
                <h3>{pillar.title}</h3>
                <hr className="rule" />
                <p>{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
