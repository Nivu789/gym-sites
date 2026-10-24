import type { SiteConfig } from "@/config/site";

export default function Programs({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="eyebrow">Programs</div>
        <h2 className="h2">Train your way</h2>
        <div className="cards">
          {siteConfig.programs.map((p, i) => (
            <article className="card" key={p.title}>
              <div className="card__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
