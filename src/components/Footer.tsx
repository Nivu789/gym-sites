import { siteConfig } from "@/config/site";

export default function Footer() {
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
