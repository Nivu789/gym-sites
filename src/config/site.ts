// Selects which gym's config to build. Set NEXT_PUBLIC_SITE to one of:
// 2bfit | bodyshockz | befit | rawfitness   (default: the generic Northfield sample)
import { base } from "./sites/base";
import { site as twoBfit } from "./sites/2bfit";
import { site as bodyShockz } from "./sites/bodyshockz";
import { site as beFit } from "./sites/befit";
import { site as rawFitness } from "./sites/rawfitness";

export type { Program, Plan, Trainer, TimetableRow } from "./sites/base";

const sites = { "2bfit": twoBfit, bodyshockz: bodyShockz, befit: beFit, rawfitness: rawFitness };

export const siteConfig: typeof base =
  sites[process.env.NEXT_PUBLIC_SITE as keyof typeof sites] ?? base;

export const siteName = [siteConfig.brand.before, siteConfig.brand.highlight, siteConfig.brand.after]
  .filter(Boolean)
  .join(" ");
