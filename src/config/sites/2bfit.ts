import { base } from "./base";

export const site = {
  ...base,
  brand: { before: "2B", highlight: "FIT", after: "Phoenix" },
  description:
    "Air-conditioned gym in Edappally, Kochi with modern machines, free weights and coach support. Book a free trial today.",
  accent: "#FF6A1F",
  address: "Panattu Square, near Kalikalam, above Central Bank of India, Edappally Toll, Edappally, Kochi, Kerala 682024",
  hours: "Open six days a week, [confirm opening hours].",
  hero: {
    ...base.hero,
    eyebrow: "Gym in Edappally, Kochi",
    lines: ["Be your best.", "Train smart.", "Rise stronger."],
    text: "Top-tier machines, free weights and dynamic workout zones in an air-conditioned space with lockers and parking. Your first session is on us.",
    facts: ["Air conditioned", "Lockers available", "Parking available"],
  },
  programs: [
    { title: "Weights and machines", text: "A full floor of modern machines and free weights for building strength and size." },
    { title: "Strength training", text: "Progressive programmes with a coach checking your form on the big lifts." },
    { title: "Fat loss", text: "Training plans that combine resistance work and cardio around your routine." },
    { title: "Functional training", text: "Movement-based sessions to improve mobility, balance and everyday strength." },
    { title: "Personal training", text: "One-to-one coaching with a plan built around your goal and schedule." },
    { title: "Nutrition guidance", text: "Simple eating plans that fit your budget and the food you already enjoy." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with 2BFIT Phoenix's real timings." },
  trainers: [
    { name: "[Trainer name]", role: "Head coach" },
    { name: "[Trainer name]", role: "Strength and conditioning coach" },
    { name: "[Trainer name]", role: "Personal trainer" },
  ],
  trialGoals: ["Lose weight", "Build muscle", "Build strength", "General fitness"],
};
