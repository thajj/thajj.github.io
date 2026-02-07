"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "../resources";
import { Flex } from "./once-ui/components";

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

      if (pathname in routes) {
        return routes[pathname as keyof typeof routes];
      }

      const dynamicRoutes = ["/blog", "/work"] as const;
      for (const route of dynamicRoutes) {
        if (pathname?.startsWith(route) && routes[route]) {
          return true;
        }
      }

      return false;
    };

    setIsRouteEnabled(checkRouteEnabled());
    setLoading(false);
  }, [pathname]);

  if (loading || !isRouteEnabled) {
    return (
      <Flex fillWidth paddingY="128" justifyContent="center" />
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
