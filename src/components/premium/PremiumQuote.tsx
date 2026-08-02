import { Reveal } from "./Reveal";

export function PremiumQuote() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div className="quote-band">
            <p className="eyebrow">Principle</p>
            <blockquote>
              Calculate what you can prove. Name what you will not pretend to
              know. Ship the early-warning system — not the theatre.
            </blockquote>
            <p className="quote-cite">Honest limits are a product feature.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
