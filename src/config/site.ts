// Each client gets its own route (see src/app/<client>/page.tsx) and its own config file
// in ./sites, so their sites never share content. To add a client: copy a sites/*.ts file,
// add it to `sites` below and create src/app/<client>/page.tsx.
import { base } from "./sites/base";
import { site as bodyShockz } from "./sites/bodyshockz";
import { site as rawStrength } from "./sites/rawstrength";

export type { Program, Plan, Trainer, TimetableRow } from "./sites/base";
export type SiteConfig = typeof base;

export const sites = { bodyshockz: bodyShockz, rawstrength: rawStrength };

export const siteNameOf = (c: SiteConfig) =>
  [c.brand.before, c.brand.highlight, c.brand.after].filter(Boolean).join(" ");
