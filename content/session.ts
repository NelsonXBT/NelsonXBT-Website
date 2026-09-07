import { routes } from "@/content/site";
import type { Video } from "@/content/video";

/**
 * 1-on-1 coaching. Mirrors the workshop's information structure —
 * hero with video, what we cover, reserve, checkout — with its own terms.
 */

export const oneOnOne = {
  title: ["Private", "Coaching"],
  with: "with NelsonXBT",
  format: "3 SESSIONS · 2 HOURS EACH",
  formatDash: "3 sessions · 2 hours each",
  price: { amount: "$150", currency: "USDT" },
  /** Sits under the price, where the workshop shows its cohort date. */
  priceNote: "All three sessions · 6 hours total",
  reserveHref: routes.sessionPayment,
  /**
   * Shares the workshop's recording — it's the clearest existing footage
   * of how Nelson teaches, which is what someone weighing a private
   * session wants to see. Swap the id here if a dedicated one is made,
   * or switch `provider` to "youtube" and supply an id to host it there.
   */
  video: {
    provider: "bunny",
    libraryId: "745906",
    id: "7d40a663-7fd5-41d2-a7be-b687dfe111c2",
    cdnHost: "vz-468a1901-975.b-cdn.net",
    poster: "/workshop-poster.jpg",
    posterAlt: "NelsonXBT explaining his approach to crypto education",
    title: "How NelsonXBT teaches crypto",
  } satisfies Video,
} as const;

export const sessionCoverage = {
  title: "Built Around You",
  intro:
    "Three private sessions, two hours each, shaped entirely around your needs and the challenges you’re actually facing. Nothing generic — we start from where you are and work on what matters to you.",
} as const;

/**
 * Framed as what the sessions can cover rather than a fixed syllabus,
 * because the agenda is set by the person in the room.
 */
export const sessionTopics = [
  {
    number: "01",
    title: "Where You Are Now",
    body: "We start by understanding your situation — your experience, your capital, the time you have, and what you’re actually trying to achieve.",
  },
  {
    number: "02",
    title: "Your Specific Challenges",
    body: "The mistakes, losses, confusion and decisions you’re stuck on. We work through your real situations, not hypothetical examples.",
  },
  {
    number: "03",
    title: "Finding Your Opportunities",
    body: "How to identify and evaluate opportunities that fit you, and tell real ones apart from noise, hype and FOMO.",
  },
  {
    number: "04",
    title: "Research You Can Trust",
    body: "How to investigate a project properly, ask the right questions, spot red flags and build your own conviction.",
  },
  {
    number: "05",
    title: "Trading and Investing Your Way",
    body: "Developing an approach that fits your personality, capital, time and risk tolerance — rather than copying someone else’s.",
  },
  {
    number: "06",
    title: "Your Own Framework",
    body: "By the end you’ll have a practical framework of your own — how you find opportunities, research them, act on them, manage risk and decide what deserves your attention.",
  },
] as const;

export const sessionReserve = {
  eyebrow: "Ready to start?",
  cta: "Book my sessions",
  note: "Sessions are scheduled directly with you.",
  benefits: [
    { label: "3 sessions", body: "Two hours each, live and private" },
    { label: "Tailored", body: "Built around your needs and challenges" },
    { label: "Direct access", body: "Your questions answered one-on-one" },
  ],
} as const;

export const sessionHow = {
  title: "How scheduling works",
  body: "Once your payment is confirmed, we agree times that suit you across the three sessions — and I’ll ask what you want to work on beforehand so the first session starts on your questions rather than on introductions.",
} as const;
