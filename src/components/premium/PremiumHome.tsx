import { PremiumHero } from "./PremiumHero";
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
      <PremiumContext />
      <PremiumProjects />
      <PremiumPillars />
      <PremiumExperience />
      <PremiumQuote />
      <PremiumCTA />
    </main>
  );
}
