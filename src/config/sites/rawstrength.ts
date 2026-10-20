import { base } from "./base";

// Source: @rawstrength_fitnessstudio on Instagram and the studio's Google Site.
export const site = {
  ...base,
  brand: { before: "Raw", highlight: "Strength", after: "" },
  description:
    "Strength, mobility and performance training in Thrikkakara, Kochi. Personal training, functional fitness, boxing and more. Book a free trial.",
  accent: "#1033d2",
  onAccent: "#ffffff",
  // Lighter tint of the brand blue so accent text stays readable on the dark background.
  accentText: "#7d97ff",
  whatsapp: "918939399933",
  phoneDisplay: "+91 89393 99933",
  phoneHref: "+918939399933",
  address: "Building no. 30/805, Near Model Engineering College, Thrikkakara, Ernakulam",
  hours: "[Confirm opening hours with the studio]",
  mapEmbedUrl: "",
  hero: {
    ...base.hero,
    eyebrow: "Strength • Mobility • Performance",
    lines: ["Be your", "best.", "Train raw."],
    text: "Personal training, functional fitness and combat sports in Thrikkakara. Expert coaches, a dedicated facility and a plan built around you.",
    facts: ["Personal training", "Functional fitness", "Boxing, kickboxing, BJJ and MMA"],
  },
  programs: [
    { title: "Personal training", text: "One-to-one coaching built around your goal, with form and progress tracked by an expert coach." },
    { title: "Strength and conditioning", text: "Training for every fitness level to build strength, improve well-being and reach your goals." },
    { title: "Functional training", text: "Movement for everyday life and quality of life, suited to all ages and fitness levels." },
    { title: "Boxing and combat", text: "Striking, footwork and defence across boxing, kickboxing, BJJ and MMA." },
    { title: "Sports performance", text: "Performance training for competitive athletes and recreational players." },
    { title: "Weight management", text: "Fat loss programmes combining lifestyle changes, nutrition guidance and exercise." },
    { title: "Flexibility and mobility", text: "Flexibility work for injury prevention and better movement." },
    { title: "Physiotherapy", text: "Ongoing support with home exercise programmes and injury prevention strategies." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with the studio's real class times." },
  plans: base.plans,
  trainers: [
    { name: "[Trainer name]", role: "Head coach" },
    { name: "[Trainer name]", role: "Boxing and combat coach" },
    { name: "[Trainer name]", role: "Strength and performance coach" },
  ],
  trialGoals: ["Lose weight", "Build strength", "Boxing and combat", "Sports performance", "Mobility and flexibility"],
};
