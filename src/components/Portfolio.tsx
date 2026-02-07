"use client";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import ScrollToTopButton from "./ScrollToTopButton";
import { Footer } from "./Footer";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [_activeSection, setActiveSection] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <MainContent
      // activeSection={activeSection}
      // setActiveSection={setActiveSection}
      />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
