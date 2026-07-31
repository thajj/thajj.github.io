import { PremiumHeader } from "./PremiumHeader";
import { PremiumFooter } from "./PremiumFooter";
import { RouteGuard } from "@/components/RouteGuard";

export function PremiumSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="premium-page">
      <PremiumHeader />
      <RouteGuard>{children}</RouteGuard>
      <PremiumFooter />
    </div>
  );
}
