import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const pillars = [
  {
    num: "01",
    title: "Platforms",
    body: "From knowledge platforms to cloud-native systems — architecture that federates content, respects rights and compliance, and runs on-prem, cloud, or hybrid.",
  },
  {
    num: "02",
    title: "Deployment",
    body: "Ideation to mass rollout for public and private organizations: cities, institutions, and enterprises that need uptime, accessibility, and multilingual reach.",
  },
  {
    num: "03",
    title: "Leadership",
    body: "Hands-on technical direction for teams of 10+. R&D roadmaps, tenders, and delivery — without leaving the craft behind.",
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
            intro="I stay close to the code while shaping architecture, delivery, and the systems that keep products healthy in production."
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
