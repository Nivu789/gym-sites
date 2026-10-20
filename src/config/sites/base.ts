// ---------------------------------------------------------------------------
// Everything a gym owner would want to change lives in this one file.
// Edit the values below, then run `npm run dev` to preview.
// Anything in [SQUARE BRACKETS] is a placeholder to replace before sending.
// ---------------------------------------------------------------------------

export type Program = { title: string; text: string };
export type Plan = {
  name: string;
  price: string;
  badge?: string;
  featured?: boolean;
  features: string[];
};
export type Trainer = { name: string; role: string; image?: string };
export type TimetableRow = { time: string; slots: string[] };

export const base = {
  // Wordmark is rendered as: before + highlighted word + after
  brand: { before: "Northfield", highlight: "Strength", after: "Club" },
  description:
    "Coach-led strength, CrossFit and functional training in Kochi. Book a free trial class today.",

  // Main accent colour. Try #FF5A36 (orange), #3DDCFF (cyan) or #FFC400 (amber).
  accent: "#D4FF3F",

  // Shows a strip at the top saying this is a sample. Set to false for a final site.
  showSampleBanner: true,

  // WhatsApp number in international format, digits only (no + or spaces).
  // The trial form opens a WhatsApp chat with this number.
  whatsapp: "910000000000",
  phoneDisplay: "[+91 00000 00000]",
  phoneHref: "+910000000000",

  address: "[Street address, area, Kochi, Kerala PIN]",
  hours: "Monday to Saturday, [00:00 to 00:00]. Closed on Sunday.",

  // Paste a Google Maps "Embed a map" src URL here to show a live map.
  // Leave empty to show a placeholder tile.
  mapEmbedUrl: "",

  hero: {
    eyebrow: "Strength, CrossFit and functional training",
    lines: ["Train hard.", "Recover well.", "Get stronger."],
    text: "Coach-led sessions, small batches and a plan that fits your week. Whether it is your first day or your fiftieth week, there is a place for you on the floor.",
    facts: ["Coach-led sessions", "All levels welcome", "Free fitness assessment"],
    // Put a photo in /public and reference it like "/gym.jpg". Empty = placeholder tile.
    image: "",
  },

  programs: [
    {
      title: "Strength training",
      text: "Barbell and machine work built around progressive overload, with a coach checking your form on the big lifts.",
    },
    {
      title: "CrossFit",
      text: "High-intensity group workouts that mix lifting, gymnastics and conditioning, scaled to your level every session.",
    },
    {
      title: "Functional training",
      text: "Movement patterns for real life: pushing, pulling, carrying and balance, to move better and stay injury-free.",
    },
    {
      title: "Combat fitness",
      text: "Boxing and kickboxing based conditioning. No fighting experience needed, just the willingness to sweat.",
    },
    {
      title: "Yoga and mobility",
      text: "Slower sessions to build flexibility and recover between hard training days.",
    },
    {
      title: "Nutrition guidance",
      text: "Practical eating plans that suit your goal, your budget and the food you already enjoy.",
    },
  ] satisfies Program[],

  timetable: {
    note: "Sample timetable. Replace with the gym's real class times.",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    rows: [
      { time: "6:00 AM", slots: ["Strength", "CrossFit", "Strength", "CrossFit", "Strength", "Functional"] },
      { time: "7:00 AM", slots: ["Functional", "Yoga", "Combat", "Yoga", "Combat", "Open gym"] },
      { time: "9:30 AM", slots: ["Open gym", "Open gym", "Open gym", "Open gym", "Open gym", "Closed"] },
      { time: "5:30 PM", slots: ["CrossFit", "Strength", "Functional", "Strength", "CrossFit", "Closed"] },
      { time: "6:30 PM", slots: ["Combat", "Functional", "CrossFit", "Combat", "Functional", "Closed"] },
      { time: "7:30 PM", slots: ["Yoga", "Open gym", "Yoga", "Open gym", "Yoga", "Closed"] },
    ] satisfies TimetableRow[],
  },

  plans: [
    {
      name: "Monthly",
      price: "₹ [PRICE]",
      features: ["Unlimited gym access", "Coach-led group classes", "Free fitness assessment"],
    },
    {
      name: "Quarterly",
      price: "₹ [PRICE]",
      badge: "Most popular",
      featured: true,
      features: ["Everything in Monthly", "Nutrition guidance session", "Progress check every month"],
    },
    {
      name: "Annual",
      price: "₹ [PRICE]",
      features: ["Everything in Quarterly", "Personal training intro sessions", "Best price per month"],
    },
  ] satisfies Plan[],

  trainers: <Trainer[]>[
    { name: "[Trainer name]", role: "Head coach, strength and conditioning" },
    { name: "[Trainer name]", role: "CrossFit and functional coach" },
    { name: "[Trainer name]", role: "Combat fitness and yoga coach" },
  ],

  // Options shown in the trial form dropdowns.
  trialTimes: ["Morning", "Afternoon", "Evening"],
  trialGoals: ["Lose weight", "Build strength", "CrossFit", "Combat fitness", "Yoga and flexibility"],
};

