"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { routes } from "../resources";
import { NotFoundContent } from "./NotFoundContent";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  const isRouteEnabled = useMemo(() => {
    if (!pathname) return false;

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
  }, [pathname]);

  if (!isRouteEnabled) {
    return <NotFoundContent />;
  }

  return <>{children}</>;
};

export { RouteGuard };
