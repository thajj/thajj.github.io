import { person } from "@/resources";

export function PremiumBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`badge${dark ? " dark" : ""}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="badge-photo"
        src={person.avatar}
        alt=""
        width={44}
        height={44}
      />
    </span>
  );
}
