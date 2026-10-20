import { base } from "./base";

export const site = {
  ...base,
  brand: { before: "Body", highlight: "Shockz", after: "Fitness Studio" },
  description:
    "CrossFit, functional training, strength and yoga in Kaloor, Kochi. Clean, motivating studio. Book a free trial.",
  accent: "#FFD400",
  address: "Kaloor - Kadavanthara Road, Kathrikadavu, Kaloor, Ernakulam, Kochi, Kerala 682017",
  hours: "Open six days a week, [confirm opening hours].",
  hero: {
    ...base.hero,
    eyebrow: "CrossFit and functional training in Kaloor",
    lines: ["Shock your body.", "Break your limits.", "Own the change."],
    text: "A clean, motivating studio for CrossFit, functional training, strength work and yoga. Small groups and coaches who know your name.",
    facts: ["Rated 4.8 by 119 members", "All levels welcome", "Free trial class"],
  },
  programs: [
    { title: "CrossFit", text: "High-intensity group workouts mixing lifting, gymnastics and conditioning, scaled to you." },
    { title: "Functional training", text: "Move better with pushing, pulling, carrying and balance work built for real life." },
    { title: "Strength training", text: "Barbell and dumbbell programmes with form coaching on every big lift." },
    { title: "Yoga", text: "Mobility and recovery sessions to keep you flexible and injury-free." },
    { title: "Weight loss programmes", text: "Structured plans combining conditioning, strength and eating guidance." },
    { title: "Personal training", text: "One-to-one coaching for faster, safer progress." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with Body Shockz's real class times." },
  trainers: [
    { name: "[Trainer name]", role: "Head coach, CrossFit" },
    { name: "[Trainer name]", role: "Functional training coach" },
    { name: "[Trainer name]", role: "Yoga and mobility coach" },
  ],
  trialGoals: ["Lose weight", "Build strength", "CrossFit", "Functional fitness", "Yoga and flexibility"],
};
