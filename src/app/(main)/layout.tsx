import "@/styles/premium/global.css";

import { PremiumSiteLayout } from "@/components/premium/PremiumSiteLayout";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <PremiumSiteLayout>{children}</PremiumSiteLayout>;
}
