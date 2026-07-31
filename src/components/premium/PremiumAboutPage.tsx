import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { PremiumContext } from "./PremiumContext";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { about, person, social } from "@/resources";

function IntroBlock({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="intro-stack">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}

export function PremiumAboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <p className="eyebrow">{about.label}</p>
              <h1>{person.name}</h1>
              <p className="page-lede">{person.role}</p>
              <div className="locale">
                {person.languages.map((lang) => (
                  <span key={lang}>{lang}</span>
                ))}
                <span>Montreal</span>
              </div>
              <div className="social-links">
                {social
                  .filter((s) => s.link)
                  .map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target={s.link.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        s.link.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                    >
                      {s.name}
                    </a>
                  ))}
              </div>
            </div>
            {about.avatar.display && (
              <PremiumImage
                src={person.avatar}
                alt={person.name}
                aspectRatio="1 / 1"
                className="avatar-media"
              />
            )}
          </div>
        </div>
      </section>

      {about.intro.display && (
        <section>
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Introduction</p>
                <h2>The short version.</h2>
              </div>
              <IntroBlock text={about.intro.description} />
            </Reveal>
          </div>
        </section>
      )}

      <PremiumContext />

      {about.work.display && (
        <section id="experience">
          <div className="wrap">
            <Reveal>
              <SectionHead
                eyebrow="Career"
                title={about.work.title}
                intro="Knowledge platforms for institutions, then aviation, energy, and product engineering — 15+ years of ownership from ideation through deployment."
              />
            </Reveal>
            <div className="experience-list">
              {about.work.experiences.map((exp, index) => (
                <Reveal
                  key={`${exp.company}-${exp.role}-${index}`}
                  delay={(index % 4) * 60}
                >
                  <article className="experience-item">
                    <div className="experience-meta">
                      <span>{exp.timeframe}</span>
                      <span>{exp.location}</span>
                    </div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <ul>
                      {exp.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {about.studies.display && (
        <section>
          <div className="wrap">
            <Reveal>
              <SectionHead eyebrow="Education" title={about.studies.title} />
            </Reveal>
            <div className="steps">
              {about.studies.institutions.map((inst) => (
                <Reveal key={inst.name}>
                  <article className="step">
                    <h3>{inst.name}</h3>
                    <p>{inst.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {about.technical.display && (
        <section>
          <div className="wrap">
            <Reveal>
              <SectionHead
                eyebrow="Technical range"
                title={about.technical.title}
              />
            </Reveal>
            <div className="skills-grid">
              {about.technical.skills.map((skill, index) => (
                <Reveal key={skill.title} delay={(index % 2) * 70}>
                  <article className="skill-card">
                    <h3>{skill.title}</h3>
                    {skill.description && <p>{skill.description}</p>}
                    <ul className="skill-list">
                      {skill.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {about.calendar.display && (
        <section className="cta">
          <div className="wrap">
            <Reveal>
              <div className="cta-box">
                <div>
                  <p className="eyebrow">Let&apos;s connect</p>
                  <h2>Schedule a conversation</h2>
                  <p>
                    Open to full-stack, cloud platform, and technical leadership
                    roles — including public-sector and institutional platforms.
                  </p>
                </div>
                <div className="cta-actions">
                  <a
                    className="btn btn-dark"
                    href={about.calendar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a call
                  </a>
                  <Link className="btn btn-primary" href="/#contact">
                    Back to contact
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}
