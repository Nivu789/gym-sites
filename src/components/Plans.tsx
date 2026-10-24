import type { SiteConfig } from "@/config/site";

export default function Plans({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section className="section" id="plans">
      <div className="container">
        <div className="eyebrow">Membership</div>
        <h2 className="h2">Simple plans</h2>
        <div className="plans">
          {siteConfig.plans.map((p) => (
            <article className={`plan${p.featured ? " plan--featured" : ""}`} key={p.name}>
              <div className="plan__head">
                <h3 className="plan__name">{p.name}</h3>
                {p.badge && <span className="plan__badge">{p.badge}</span>}
              </div>
              <div className="plan__price">{p.price}</div>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#trial" className={`btn btn--block ${p.featured ? "btn--solid" : "btn--ghost"}`}>
                Start with a free trial
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
