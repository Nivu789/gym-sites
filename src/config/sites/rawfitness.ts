import { base } from "./base";

export const site = {
  ...base,
  brand: { before: "Raw", highlight: "Fitness", after: "" },
  description:
    "Functional training and weight loss coaching in Kochi. No shortcuts, just honest work. Book a free trial.",
  accent: "#C8F000",
  address: "[Street address, area, Kochi, Kerala PIN]",
  hours: "Open six days a week, [confirm opening hours].",
  hero: {
    ...base.hero,
    eyebrow: "Functional training and weight loss in Kochi",
    lines: ["No filters.", "No shortcuts.", "Just raw results."],
    text: "Honest, coach-led training focused on functional strength and sustainable weight loss. Show up and we will take care of the plan.",
    facts: ["Coach-led sessions", "All levels welcome", "Free fitness assessment"],
  },
  programs: [
    { title: "Functional training", text: "Movement-based sessions that build real-world strength, balance and stamina." },
    { title: "Weight loss", text: "Structured programmes combining training and nutrition that you can keep up." },
    { title: "Strength training", text: "Progressive lifting with coaching on form and technique." },
    { title: "Conditioning", text: "Short, hard circuits to build engine and burn fat." },
    { title: "Personal training", text: "One-to-one coaching built around your goal." },
    { title: "Nutrition guidance", text: "Simple plans that suit your budget and your kitchen." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with the gym's real class times." },
  trainers: [
    { name: "[Trainer name]", role: "Head coach" },
    { name: "[Trainer name]", role: "Functional training coach" },
    { name: "[Trainer name]", role: "Weight loss and nutrition coach" },
  ],
  trialGoals: ["Lose weight", "Build strength", "Functional fitness", "General fitness"],
};
