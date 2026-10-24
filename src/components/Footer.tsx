import type { SiteConfig } from "@/config/site";

export default function Footer({ siteConfig }: { siteConfig: SiteConfig }) {
  const { before, highlight, after } = siteConfig.brand;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="wordmark">
          {before} <span className="accent">{highlight}</span> {after}
        </span>
        <span>
          © {new Date().getFullYear()} {before} {highlight} {after}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
