import type { SiteConfig } from "@/config/site";

export default function Visit({ siteConfig }: { siteConfig: SiteConfig }) {
  const { address, hours, phoneDisplay, phoneHref, whatsapp, mapEmbedUrl } = siteConfig;
  return (
    <section className="section" id="visit">
      <div className="container visit__inner">
        <div className="visit__info">
          <div>
            <div className="eyebrow">Visit</div>
            <h2 className="h2">Come train with us</h2>
          </div>
          <div>
            <div className="info-label">Address</div>
            <div>{address}</div>
          </div>
          <div>
            <div className="info-label">Hours</div>
            <div>{hours}</div>
          </div>
          <div>
            <div className="info-label">Phone</div>
            <div>{phoneDisplay}</div>
          </div>
          <div className="hero__actions">
            <a
              className="btn btn--solid"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <a className="btn btn--ghost" href={`tel:${phoneHref}`}>
              Call
            </a>
          </div>
        </div>
        {mapEmbedUrl ? (
          <div className="visit__map">
            <iframe src={mapEmbedUrl} title="Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        ) : (
          <div className="visit__map ph">
            <span>Map goes here</span>
          </div>
        )}
      </div>
    </section>
  );
}
