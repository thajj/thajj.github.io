"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PremiumBadge } from "./PremiumBadge";
import { person } from "@/resources";

const navLinks = [
  { href: "/#context", label: "Context" },
  { href: "/#work", label: "Work" },
  { href: "/#focus", label: "Focus" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function PremiumHeader() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const contactHref = isHome ? "#contact" : "/#contact";
  const brandHref = isHome ? "#top" : "/";

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <Link className="brand" href={brandHref} onClick={closeMenu}>
            <PremiumBadge />
            <span className="brandmark">{person.name}</span>
          </Link>
          <div className="nav-actions">
            <nav className="desktop-nav" aria-label="Primary">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className="btn btn-dark nav-cta" href={contactHref}>
                Get in touch
              </Link>
            </nav>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-dark" href={contactHref} onClick={closeMenu}>
          Get in touch
        </Link>
      </nav>
    </>
  );
}
