"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "../resources";
import { Flex } from "./once-ui/components";
import { NotFoundContent } from "./NotFoundContent";
import { PageTransitionLayout } from "./PageTransitionLayout";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const checkRouteEnabled = () => {
      if (!pathname) return false;

      // Normalize: strip trailing slash so /about/ matches routes["/about"] (next.config trailingSlash: true)
      const normalized = pathname.replace(/\/$/, "") || "/";

      if (normalized in routes) {
        return routes[normalized as keyof typeof routes];
      }

      const dynamicRoutes = ["/blog", "/work", "/gallery"] as const;
      for (const route of dynamicRoutes) {
        if (normalized.startsWith(route) && routes[route]) {
          return true;
        }
      }

      return false;
    };

    setIsRouteEnabled(checkRouteEnabled());
    setLoading(false);
  }, [pathname]);

  if (loading) {
    return <Flex fillWidth paddingY="128" justifyContent="center" />;
  }

  if (!isRouteEnabled) {
    return <NotFoundContent />;
  }

  return <PageTransitionLayout>{children}</PageTransitionLayout>;
};

export { RouteGuard };
