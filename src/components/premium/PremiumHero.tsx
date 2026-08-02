import Link from "next/link";
import { person } from "@/resources";

export function PremiumHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-in hero-in-1">
            Full-stack platforms · Products in production · Montreal
          </p>
          <h1 className="hero-in hero-in-2">
            {person.firstName}
            <br />
            <span className="hero-name-accent">{person.lastName}</span>
          </h1>
          <p className="lede hero-in hero-in-3">
            I ship platforms and products people can operate under real
            constraints — institutional systems, cloud-native software, and
            privacy-first tools like{" "}
            <a className="hero-inline-link" href="https://thirtynorthgst.ca/">
              Thirty North
            </a>
            .
          </p>
          <div className="hero-actions hero-in hero-in-4">
            <Link className="btn btn-primary" href="/#work">
              See proof in production
              <span aria-hidden="true"> ↘</span>
            </Link>
            <Link className="btn btn-ghost" href="/#contact">
              Get in touch
            </Link>
          </div>
          <div className="trust-row hero-in hero-in-5" aria-label="Trust signals">
            <span>
              <i className="trust-dot" aria-hidden="true" />
              15+ years shipping
            </span>
            <span>
              <i className="trust-dot" aria-hidden="true" />
              On-prem · cloud · hybrid
            </span>
            <span>
              <i className="trust-dot" aria-hidden="true" />
              FR + EN
            </span>
          </div>
        </div>

        <div className="hero-portrait-block hero-in hero-in-3">
          <div className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={person.avatar}
              alt={`${person.name}, ${person.role}`}
              width={512}
              height={512}
            />
            <div className="portrait-frame" aria-hidden="true" />
          </div>
          <p className="hero-caption">
            <strong>{person.role}</strong>
            Wisk.aero · Thirty North · Montreal
          </p>
        </div>
      </div>
    </section>
  );
}
