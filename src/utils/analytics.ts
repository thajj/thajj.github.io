"use client";

type EventNames =
  | "view_blog_post"
  | "view_project"
  | "click_social_link"
  | "filter_projects"
  | "search_content";

interface AnalyticsEvent {
  eventName: EventNames;
  properties?: Record<string, any>;
}

export const trackEvent = ({ eventName, properties = {} }: AnalyticsEvent) => {
  if (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
    typeof window !== "undefined"
  ) {
    window.gtag("event", eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
};

// Predefined tracking functions for common events
export const analytics = {
  trackBlogView: (title: string, slug: string) => {
    trackEvent({
      eventName: "view_blog_post",
      properties: {
        blog_title: title,
        blog_slug: slug,
      },
    });
  },

  trackProjectView: (title: string, slug: string) => {
    trackEvent({
      eventName: "view_project",
      properties: {
        project_title: title,
        project_slug: slug,
      },
    });
  },

  trackSocialClick: (platform: string, url: string) => {
    trackEvent({
      eventName: "click_social_link",
      properties: {
        platform,
        url,
      },
    });
  },
};
