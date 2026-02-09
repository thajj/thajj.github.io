"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DEFAULT_DURATION = 0.28;
const REDUCED_DURATION = 0.01;

const variants = {
  initial: (reducedMotion: boolean) => ({
    opacity: 0,
    y: reducedMotion ? 0 : 10,
  }),
  animate: (reducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? REDUCED_DURATION : DEFAULT_DURATION,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: (reducedMotion: boolean) => ({
    opacity: 0,
    y: reducedMotion ? 0 : -6,
    transition: {
      duration: reducedMotion ? REDUCED_DURATION : DEFAULT_DURATION * 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

interface PageTransitionLayoutProps {
  children: React.ReactNode;
}

export function PageTransitionLayout({ children }: PageTransitionLayoutProps) {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        custom={reducedMotion}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ width: "100%", minHeight: "min-content" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
