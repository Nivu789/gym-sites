import type { SiteConfig } from "@/config/site";

const links = [
  ["Programs", "#programs"],
  ["Timetable", "#timetable"],
  ["Plans", "#plans"],
  ["Trainers", "#trainers"],
  ["Visit", "#visit"],
] as const;

export default function Header({ siteConfig }: { siteConfig: SiteConfig }) {
  const { before, highlight, after } = siteConfig.brand;
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="wordmark">
          {before} <span className="accent">{highlight}</span> {after}
        </a>
        <nav className="nav" aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="#trial" className="btn btn--solid btn--small">
            Free trial
          </a>
        </nav>
      </div>
    </header>
  );
}
