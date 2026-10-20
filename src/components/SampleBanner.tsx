import { siteConfig } from "@/config/site";

export default function SampleBanner() {
  if (!siteConfig.showSampleBanner) return null;
  return <div className="banner">Sample website design. Not live yet.</div>;
}
