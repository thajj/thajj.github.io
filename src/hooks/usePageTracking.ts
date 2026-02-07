"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : "");

      // Send pageview event to Google Analytics
      window.gtag("event", "page_view", {
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);
};
