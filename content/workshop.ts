import { routes } from "@/content/site";
import type { Video } from "@/content/video";

/**
 * All Crypto Clarity Workshop information.
 * Copy here is preserved verbatim from the original workshop and payment pages.
 */

export const workshop = {
  title: ["Crypto Clarity", "Workshop"],
  with: "with NelsonXBT",
  cohort: "Cohort 1 · 22nd to 28th September 2026",
  cohortCaps: "COHORT 1 · 22ND TO 28TH SEPTEMBER 2026",
  cohortDash: "Cohort 1 · 22nd – 28th September 2026",
  price: { amount: "$50", currency: "USDT" },
  reserveHref: routes.payment,
  /**
   * Hosted on Bunny Stream. To move this back to YouTube, replace the
   * three provider lines with `provider: "youtube"` and the video id —
   * the player reads the provider and needs no change.
   */
  video: {
    provider: "bunny",
    libraryId: "745906",
    id: "7d40a663-7fd5-41d2-a7be-b687dfe111c2",
    cdnHost: "vz-468a1901-975.b-cdn.net",
    poster: "/workshop-poster.jpg",
    posterAlt: "NelsonXBT Crypto Clarity Workshop",
    title: "Crypto Clarity Workshop with NelsonXBT",
  } satisfies Video,
} as const;

/**
 * The two dates that decide whether someone acts now or forgets. Shown
 * directly under the video, where attention already is, rather than being
 * held back for the pricing section at the bottom of the page.
 */
export const keyDates = {
  items: [
    { label: "Registration closes", value: "September 18th" },
    { label: "Cohort 1 begins", value: "September 22nd" },
  ],
  cta: "Reserve my seat",
} as const;

export const coverage = {
  title: "What We’ll Cover",
  intro:
    "A practical 7-day workshop to help you think clearly, make better decisions, and build your own approach to navigating crypto.",
} as const;

export const topics = [
  {
    number: "01",
    title: "Stop Chasing. Start Taking Charge",
    body: "Understand how money is actually made in crypto and discover the different paths available to you.",
  },
  {
    number: "02",
    title: "Learn to See Opportunities",
    body: "Identify and evaluate opportunities without chasing what’s trending. Distinguish real opportunities from noise, hype and FOMO.",
  },
  {
    number: "03",
    title: "Do Your Own Research",
    body: "Investigate projects, ask the right questions, identify red flags and develop your own conviction.",
  },
  {
    number: "04",
    title: "Find Your Way to Trade",
    body: "Understand different trading approaches and develop a method that fits your personality, capital, time and risk tolerance.",
  },
  {
    number: "05",
    title: "Uncover the Hidden Wealth Opportunities",
    body: "Learn how to approach crypto investing strategically and build a portfolio designed for long-term opportunities.",
  },
  {
    number: "06",
    title: "Your Crypto, Your Questions",
    body: "A personal session where we address your specific questions, challenges, mistakes and situations. This isn’t a generic Q&A.",
  },
  {
    number: "07",
    title: "Build Your Crypto Clarity Framework",
    body: "Bring everything together and create your own practical framework — how you discover opportunities, research them, trade or invest, manage risk, and decide what deserves your attention.",
  },
] as const;

export const reserve = {
  eyebrow: "Ready to join?",
  cta: "Reserve my seat",
  note: "Limited spots for the first cohort.",
  benefits: [
    { label: "7 days", body: "Live and interactive" },
    { label: "Practical", body: "Real examples and case studies" },
    { label: "A clearer you", body: "Make better decisions with confidence" },
  ],
} as const;

