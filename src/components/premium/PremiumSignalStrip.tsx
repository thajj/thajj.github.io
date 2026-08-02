import Link from "next/link";
import { Reveal } from "./Reveal";

export function PremiumSignalStrip() {
  return (
    <section className="signal-strip" aria-label="Key signal">
      <div className="wrap">
        <Reveal>
          <div className="signal-strip-inner">
            <p className="signal-kicker">The pattern that keeps showing up</p>
            <p className="signal-copy">
              People do not need another demo. They need systems that warn early,
              respect privacy and compliance, and still work when the next
              invoice — or the next deployment — changes the answer.
            </p>
            <Link className="signal-link" href="/work/thirty-north">
              See how that shaped Thirty North →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
