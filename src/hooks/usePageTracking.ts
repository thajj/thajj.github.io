"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    const sendPageView = () => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: url,
          page_title: document.title,
        });
      }
    };

    sendPageView();
    // gtag loads with strategy="afterInteractive" — if it's not ready yet, retry once
    if (typeof window !== "undefined" && typeof window.gtag !== "function") {
      const id = setTimeout(sendPageView, 500);
      return () => clearTimeout(id);
    }
  }, [pathname, searchParams]);
};
