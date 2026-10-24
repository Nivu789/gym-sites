import type { SiteConfig } from "@/config/site";

export default function SampleBanner({ siteConfig }: { siteConfig: SiteConfig }) {
  if (!siteConfig.showSampleBanner) return null;
  return <div className="banner">Sample website design. Not live yet.</div>;
}
