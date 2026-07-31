import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { context } from "@/resources";

export function PremiumContext() {
  return (
    <section id="context">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow={context.eyebrow}
            title={context.title}
            intro={context.intro}
          />
        </Reveal>

        <div className="context-sectors">
          {context.sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 70}>
              <article className="context-sector">
                <p className="context-sector-label">{sector.label}</p>
                <h3>{sector.title}</h3>
                <p>{sector.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="split context-split">
          <Reveal>
            <div className="panel">
              <p className="label">{context.capabilities.label}</p>
              <h3>{context.capabilities.title}</h3>
              <p className="intro">{context.capabilities.intro}</p>
              <ul>
                {context.capabilities.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="panel dark">
              <p className="label">{context.deployment.label}</p>
              <h3>{context.deployment.title}</h3>
              <p className="intro">{context.deployment.intro}</p>
              <ul>
                {context.deployment.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="context-lifecycle">
            <p className="eyebrow">{context.lifecycle.eyebrow}</p>
            <div className="steps">
              {context.lifecycle.stages.map((stage) => (
                <article className="step" key={stage.title}>
                  <p className="meta">{stage.meta}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <aside className="context-aside">
            <p>{context.aside}</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
