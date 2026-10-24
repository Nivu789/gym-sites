import { base } from "./base";

// Source: @bodyshockz on Instagram, plus public directory listings for the address.
export const site = {
  ...base,
  brand: { before: "Body", highlight: "Shockz", after: "Fitness Studio" },
  description:
    "Aerial yoga, bungee fitness, boxing, Animal Flow and HYROX training in Kaloor, Kochi. Transform your body. Elevate your mind. Book a free trial.",
  // Brand colour not confirmed. Replace with the colour from their logo.
  accent: "#FFD400",
  whatsapp: "919633779911",
  phoneDisplay: "+91 96337 79911",
  phoneHref: "+919633779911",
  address: "Kaloor - Kadavanthara Road, Kathrikadavu, Kaloor, Ernakulam, Kochi, Kerala 682017",
  hours: "[Confirm opening hours with the studio]",
  hero: {
    ...base.hero,
    eyebrow: "Aerial yoga, bungee fitness and boxing in Kaloor",
    lines: ["Transform", "your body.", "Elevate your mind."],
    text: "A fitness studio in Kaloor, Kochi for aerial yoga, bungee fitness, boxing, Animal Flow and race training. Group sessions where you can move differently.",
    facts: ["Group sessions", "All levels welcome", "Free trial class"],
  },
  programs: [
    { title: "Aerial yoga", text: "Yoga in a hammock: stretch, decompress and build core strength off the ground." },
    { title: "Bungee fitness", text: "Low-impact, high-energy workouts suspended on bungee cords. Fun, joint-friendly and a serious sweat." },
    { title: "Boxing", text: "Pads, bag work and footwork for fitness, whether or not you ever plan to spar." },
    { title: "Animal Flow", text: "Ground-based movement flows that build strength, mobility and body control." },
    { title: "HYROX training", text: "Structured training for HYROX races, combining running with functional stations." },
    { title: "Marathon training", text: "Coached running programmes to build endurance and get you to the start line ready." },
    { title: "Yoga", text: "Mobility and recovery sessions to keep you flexible and injury-free." },
    { title: "Group sessions", text: "Coach-led classes that keep you motivated and accountable." },
  ],
  timetable: { ...base.timetable, note: "Sample timetable. Replace with Body Shockz's real class times." },
  trainers: [
    { name: "[Trainer name]", role: "Head coach" },
    { name: "[Trainer name]", role: "Aerial yoga and bungee coach" },
    { name: "[Trainer name]", role: "Boxing and performance coach" },
  ],
  trialGoals: ["Lose weight", "Aerial yoga", "Bungee fitness", "Boxing", "HYROX or marathon training"],
};
