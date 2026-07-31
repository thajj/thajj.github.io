export function PremiumBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`badge${dark ? " dark" : ""}`} aria-hidden="true">
      <span className="initials">TH</span>
    </span>
  );
}
