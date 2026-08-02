import { PremiumHero } from "./PremiumHero";
import { PremiumSignalStrip } from "./PremiumSignalStrip";
import { PremiumProjects } from "./PremiumProjects";
import { PremiumContext } from "./PremiumContext";
import { PremiumPillars } from "./PremiumPillars";
import { PremiumExperience } from "./PremiumExperience";
import { PremiumQuote } from "./PremiumQuote";
import { PremiumCTA } from "./PremiumCTA";

export function PremiumHome() {
  return (
    <main>
      <PremiumHero />
      <PremiumSignalStrip />
      <PremiumProjects />
      <PremiumContext />
      <PremiumPillars />
      <PremiumExperience />
      <PremiumQuote />
      <PremiumCTA />
    </main>
  );
}
