"use client";

import { useEffect } from "react";
import { analytics } from "@/utils/analytics";

interface AnalyticsTrackerProps {
  type: "blog" | "project";
  title: string;
  slug: string;
}

export function AnalyticsTracker({ type, title, slug }: AnalyticsTrackerProps) {
  useEffect(() => {
    if (type === "blog") {
      analytics.trackBlogView(title, slug);
    } else {
      analytics.trackProjectView(title, slug);
    }
  }, [type, title, slug]);

  return null;
}
