import { PremiumBadge } from "./PremiumBadge";
import { person } from "@/resources";

export function PremiumFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="left">
          <PremiumBadge dark />
          <span className="tag">
            © {year} {person.name} · {person.role}
          </span>
        </div>
        <span className="place">Montreal, QC</span>
      </div>
      <div className="wrap">
        <div
          className="ratio"
          title="Brand color ratio: Ivory 62% · Charcoal 23% · Sage 10% · Gold 5%"
        >
          <span style={{ width: "62%", background: "var(--ivory)" }} />
          <span style={{ width: "23%", background: "var(--charcoal)" }} />
          <span style={{ width: "10%", background: "var(--sage)" }} />
          <span style={{ width: "5%", background: "var(--gold)" }} />
        </div>
      </div>
    </footer>
  );
}
