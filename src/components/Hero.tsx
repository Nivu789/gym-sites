import type { SiteConfig } from "@/config/site";

export default function Hero({ siteConfig }: { siteConfig: SiteConfig }) {
  const { hero } = siteConfig;
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1 className="hero__title">
            {hero.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <a href="#trial" className="btn btn--solid">
              Book a free trial
            </a>
            <a href="#timetable" className="btn btn--ghost">
              See the timetable
            </a>
          </div>
          <div className="hero__facts">
            {hero.facts.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
        {hero.image ? (
          <div
            className="hero__media"
            role="img"
            aria-label="Training floor"
            style={{ background: `center / cover no-repeat url(${hero.image})` }}
          />
        ) : (
          <div className="hero__media ph">
            <span>Photo: training floor</span>
          </div>
        )}
      </div>
    </section>
  );
}
