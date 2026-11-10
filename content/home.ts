import type { HomeContent } from "./types";

// All copy for the Home page lives here. Edit text in this file only —
// components never hard-code copy, so a content change is never a code change.
export const home: HomeContent = {
  meta: {
    title: "Crewline — run your trade business without holding it all together",
    description:
      "Demo: purchasing, job costing and crews in one place. A scroll-driven Next.js + GSAP concept page.",
  },
  hero: {
    eyebrow: "For landscapers, roofers, electricians and pool builders",
    title: "Stop being the person who holds everything together.",
    lead: "Purchase orders, job costs and crews in one calm place — so the business keeps moving when you step away.",
    cta: "See how a job flows",
  },
  scene: {
    heading: "One job, from order to evening off",
    steps: [
      {
        id: "order",
        eyebrow: "01 · Purchasing",
        title: "The order is placed before anyone calls you.",
        body: "Materials are ordered from the job's bill of materials, with supplier and delivery date attached.",
      },
      {
        id: "costing",
        eyebrow: "02 · Job costing",
        title: "Costs update while the work happens.",
        body: "Every receipt and hour lands on the right job, so margin is visible today, not at month end.",
      },
      {
        id: "crew",
        eyebrow: "03 · Crews",
        title: "Crews know where to be tomorrow.",
        body: "Schedules and subcontractors sit in one board, and changes reach phones instantly.",
      },
      {
        id: "free",
        eyebrow: "04 · Your time",
        title: "And you get your evening back.",
        body: "The business runs on a system, not on your memory.",
      },
    ],
  },
  trades: {
    heading: "Built around how trades actually work",
    items: [
      { name: "Landscaping", stat: "Seasonal crews" },
      { name: "Pool building", stat: "Multi-phase jobs" },
      { name: "Roofing", stat: "Weather-driven schedules" },
      { name: "Electrical", stat: "Permit tracking" },
      { name: "General contracting", stat: "Subcontractor hand-offs" },
    ],
  },
  cta: {
    title: "This is a concept demo",
    body: "Fictional product, built to show a scroll-driven page that stays fast, accessible and fully server-rendered.",
    button: "View source on GitHub",
  },
};
