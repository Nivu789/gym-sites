import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "./globals.css";
import { siteConfig, siteName } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteName} | Gym in Kochi`,
  description: siteConfig.description,
  openGraph: {
    title: siteName,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{
          "--accent": siteConfig.accent,
          "--on-accent": siteConfig.onAccent,
          "--accent-text": siteConfig.accentText || siteConfig.accent,
        } as CSSProperties}>{children}</body>
    </html>
  );
}
