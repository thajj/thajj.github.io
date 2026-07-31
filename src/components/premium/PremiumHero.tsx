import Link from "next/link";
import { person } from "@/resources";

export function PremiumHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-in hero-in-1">
            Senior Full-Stack &amp; Cloud · Montreal
          </p>
          <h1 className="hero-in hero-in-2">
            {person.firstName}
            <br />
            <span className="hero-name-accent">{person.lastName}</span>
          </h1>
          <p className="lede hero-in hero-in-3">
            I build cloud-native platforms and full-stack products that teams
            can ship, operate, and trust — from architecture through production.
          </p>
          <div className="hero-actions hero-in hero-in-4">
            <Link className="btn btn-primary" href="/work">
              View selected work
            </Link>
            <Link className="btn btn-ghost" href="/#contact">
              Get in touch
            </Link>
          </div>
          <div className="hero-meta hero-in hero-in-5">
            <span>15+ years shipping</span>
            <span className="meta-sep" />
            <span>Teams of 10+</span>
            <span className="meta-sep" />
            <span>FR + EN</span>
          </div>
        </div>

        <div className="hero-portrait hero-in hero-in-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.avatar}
            alt={`${person.name}, ${person.role}`}
            width={512}
            height={512}
          />
          <div className="portrait-frame" aria-hidden="true" />
          <p className="hero-caption">
            <strong>{person.role}</strong>
            Currently at Wisk.aero · Montreal
          </p>
        </div>
      </div>
    </section>
  );
}
