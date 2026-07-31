import { Reveal } from "./Reveal";

export function PremiumQuote() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div className="quote-band">
            <p className="eyebrow">Principle</p>
            <blockquote>
              Ideation is cheap. Mass deployment across on-prem, cloud, and
              hybrid — for cities and institutions that cannot go down — is the
              real craft.
            </blockquote>
            <cite>Not demos that impress. Platforms that endure.</cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
