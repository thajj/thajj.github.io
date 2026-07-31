import { Reveal } from "./Reveal";
import { about, contact, social } from "@/resources";

export function PremiumCTA() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="cta-box">
            <div>
              <p className="eyebrow">{contact.label}</p>
              <h2>Let&apos;s build something lasting.</h2>
              <p>
                Open to full-stack, cloud platform, and technical leadership
                roles — especially where architecture, delivery, and AI-enabled
                tooling meet.
              </p>
            </div>
            <div className="cta-actions">
              {about.calendar.display && (
                <a
                  className="btn btn-dark"
                  href={about.calendar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a call
                </a>
              )}
              <a className="btn btn-primary" href="mailto:contact@toufichajj.dev">
                contact@toufichajj.dev
              </a>
              <p className="cta-note">Montreal · Remote-friendly · FR + EN</p>
              <div className="social-links">
                {social
                  .filter((s) => s.link && !s.link.startsWith("mailto:"))
                  .map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
