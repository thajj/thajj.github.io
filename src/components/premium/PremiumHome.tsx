import { PremiumHero } from "./PremiumHero";
import { PremiumProjects } from "./PremiumProjects";
import { PremiumPillars } from "./PremiumPillars";
import { PremiumExperience } from "./PremiumExperience";
import { PremiumQuote } from "./PremiumQuote";
import { PremiumCTA } from "./PremiumCTA";

export function PremiumHome() {
  return (
    <main>
      <PremiumHero />
      <PremiumProjects />
      <PremiumPillars />
      <PremiumExperience />
      <PremiumQuote />
      <PremiumCTA />
    </main>
  );
}
