"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, ReactNode, useCallback } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

interface PageTransitionLayoutProps {
  children: ReactNode;
}

export function PageTransitionLayout({ children }: PageTransitionLayoutProps) {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const isFirstMount = useRef(true);
  const prevPathRef = useRef(pathname);
  const [isVisible, setIsVisible] = useState(true);

  const triggerEnter = useCallback(() => {
    setIsVisible(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname;
      window.scrollTo(0, 0);
      triggerEnter();
    }
  }, [pathname, triggerEnter]);

  const duration = reducedMotion ? 0.01 : 0.32;
  const y = reducedMotion ? 0 : 10;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: isVisible
          ? `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
