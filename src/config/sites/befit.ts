import { base } from "./base";

export const site = {
  ...base,
  brand: { before: "BE", highlight: "FIT", after: "CrossFit" },
  description:
    "CrossFit and functional training in Palluruthy, Kochi. Coach-led classes for every level. Book a free trial.",
  accent: "#E5262B",
  address: "Panchayath Raj Road, Palluruthy, Kochi, Kerala 682006",
  hours: "Open six days a week, [confirm opening hours].",
  hero: {
    ...base.hero,
    eyebrow: "CrossFit and functional training in Palluruthy",
    lines: ["Sweat together.", "Lift together.", "Win together."],
    text: "Coach-led CrossFit and functional classes where every workout is scaled to your level. Rated 5.0 by our members.",
    facts: ["Coach-led classes", "Scaled for every level", "Free trial class"],
  },
  programs: [
    { title: "CrossFit classes", text: "Daily workouts of the day that mix lifting, gymnastics and conditioning." },
    { title: "Functional training", text: "Build strength and stamina through movements you use in daily life." },
    { title: "Olympic lifting", text: "Technique-focused sessions for the snatch and clean and jerk." },
    { title: "Beginner foundations", text: "A guided on-ramp so your first weeks are safe, clear and confidence-building." },
    { title: "Open gym", text: "Space and equipment to work on your own plan between classes." },
    { title: "Nutrition guidance", text: "Practical eating advice to support your training goals." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with BE FIT's real class times." },
  trainers: [
    { name: "[Trainer name]", role: "Head coach, CrossFit" },
    { name: "[Trainer name]", role: "Functional training coach" },
    { name: "[Trainer name]", role: "Strength coach" },
  ],
  trialGoals: ["Try CrossFit", "Lose weight", "Build strength", "Functional fitness"],
};
