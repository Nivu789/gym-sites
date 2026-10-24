import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { sites, siteNameOf } from "@/config/site";

const siteConfig = sites.rawstrength;
const name = siteNameOf(siteConfig);

export const metadata: Metadata = {
  title: `${name} | Gym in Thrikkakara, Kochi`,
  description: siteConfig.description,
  openGraph: { title: name, description: siteConfig.description, type: "website" },
};

export default function Page() {
  return <SitePage siteConfig={siteConfig} />;
}
