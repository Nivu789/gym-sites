import type { SiteConfig } from "@/config/site";

export default function Trainers({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section className="section section--alt" id="trainers">
      <div className="container">
        <div className="eyebrow">Coaches</div>
        <h2 className="h2">Meet the trainers</h2>
        <div className="cards">
          {siteConfig.trainers.map((t, i) => (
            <div className="trainer" key={i}>
              {t.image ? (
                <div
                  className="trainer__photo"
                  role="img"
                  aria-label={t.name}
                  style={{ background: `center / cover no-repeat url(${t.image})` }}
                />
              ) : (
                <div className="trainer__photo ph">
                  <span>Photo: coach</span>
                </div>
              )}
              <h3 className="trainer__name">{t.name}</h3>
              <div className="trainer__role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
