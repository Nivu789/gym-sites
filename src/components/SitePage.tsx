import type { CSSProperties } from "react";
import type { SiteConfig } from "@/config/site";
import SampleBanner from "@/components/SampleBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Timetable from "@/components/Timetable";
import Plans from "@/components/Plans";
import Trainers from "@/components/Trainers";
import TrialForm from "@/components/TrialForm";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function SitePage({ siteConfig }: { siteConfig: SiteConfig }) {
  const style = {
    "--accent": siteConfig.accent,
    "--on-accent": siteConfig.onAccent,
    "--accent-text": siteConfig.accentText || siteConfig.accent,
  } as CSSProperties;
  return (
    <div style={style}>
      <SampleBanner siteConfig={siteConfig} />
      <Header siteConfig={siteConfig} />
      <main>
        <Hero siteConfig={siteConfig} />
        <Programs siteConfig={siteConfig} />
        <Timetable siteConfig={siteConfig} />
        <Plans siteConfig={siteConfig} />
        <Trainers siteConfig={siteConfig} />
        <TrialForm siteConfig={siteConfig} />
        <Visit siteConfig={siteConfig} />
      </main>
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
