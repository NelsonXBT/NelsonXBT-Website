import { routes } from "@/content/site";
import type { Video } from "@/content/video";

/**
 * 1-on-1 coaching. Mirrors the workshop's information structure —
 * hero, reserve, checkout — with its own terms. The hero video and the
 * "what we cover" section are commented out for now (see below).
 */

export const oneOnOne = {
  title: ["Private", "Coaching"],
  with: "with NelsonXBT",
  format: "1 SESSION · 2 HOURS",
  formatDash: "1 session · 2 hours",
  price: { amount: "$150", currency: "USDT" },
  /** Sits under the price, where the workshop shows its cohort date. */
  priceNote: "One session · 2 hours total",
  reserveHref: routes.sessionPayment,
  /**
   * Sits directly under the hero's format line, in place of the
   * "Built Around You" section below — so the promise still reads
   * before the price while that section is commented out.
   */
  intro:
    "One private session, two hours, shaped entirely around your needs and the challenges you’re actually facing. Nothing generic, I will start from where you are and work on what matters to you.",
  /**
   * Shares the workshop's recording — it's the clearest existing footage
   * of how Nelson teaches, which is what someone weighing a private
   * session wants to see. Swap the id here if a dedicated one is made,
   * or switch `provider` to "youtube" and supply an id to host it there.
   *
   * Currently unused: the hero video is commented out on the page.
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

/* ---------------------------------------------------------------
   "Built Around You" — commented out. The intro line now lives in
   `oneOnOne.intro` and renders in the hero instead. Restore both
   exports and their use in app/private-coaching/page.tsx to bring
   the section back.

export const sessionCoverage = {
  title: "Built Around You",
  intro:
    "One private session, two hours, shaped entirely around your needs and the challenges you’re actually facing. Nothing generic — we start from where you are and work on what matters to you.",
} as const;

// Framed as what the session can cover rather than a fixed syllabus,
// because the agenda is set by the person in the room.
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

--------------------------------------------------------------- */

export const sessionReserve = {
  eyebrow: "Ready to start?",
  cta: "Book my session",
  note: "Your session is scheduled directly with you.",
  benefits: [
    { label: "1 session", body: "Two hours, live and private" },
    { label: "Tailored", body: "Built around your needs and challenges" },
    { label: "Direct access", body: "Your questions answered one-on-one" },
  ],
} as const;

export const sessionHow = {
  title: "How scheduling works",
  body: "Once your payment is confirmed, we’ll agree on a time that works for you. The session is personalized around your current level in crypto, your goals, and your specific challenges, whether you’re trying to understand the crypto market, improve your trading or investment strategy, navigate a difficult decision, or figure out what to do next. Whatever your situation, the goal is to help you leave the session with a solution and a clear way forward.",
} as const;
