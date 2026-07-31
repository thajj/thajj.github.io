import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { about } from "@/resources";

export function PremiumExperience() {
  const recent = about.work.experiences.slice(0, 5);

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Experience"
            title="Recent roles. Real ownership."
            intro="From R&D leadership on knowledge platforms to aviation and energy markets — always hands-on, always shipping under real constraints."
          />
        </Reveal>
        <div className="timeline">
          {recent.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}-${i}`} delay={i * 70}>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-when">{exp.timeframe}</span>
                  <span className="timeline-where">{exp.location}</span>
                </div>
                <div className="timeline-body">
                  <h3>{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p>{exp.achievements[0]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="view-all">
            <Link className="btn btn-dark" href="/about">
              Full career history
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
