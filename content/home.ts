import { external, routes } from "@/content/site";

export const hero = {
  /**
   * The page's single H1. Kept as one string so it re-wraps naturally
   * instead of breaking at fixed points that only suit one viewport.
   */
  headline: "Practical crypto knowledge for real opportunities.",
  intro:
    "I share practical crypto education, insights and ideas to help people better understand the space and navigate its opportunities.",
} as const;

/**
 * Credibility shown before the commercial CTAs.
 * Only claims supported by the brand's own public work — no invented figures.
 */
export const credibility = [
  {
    label: "Community",
    value: "10K+",
    trail: "on YouTube",
  },
  {
    label: "Education",
    value: "Practical knowledge",
    trail: "shared through content",
  },
  {
    label: "Experience",
    value: "Hands-on",
    trail: "across crypto, markets and technology",
  },
] as const;

export const actions = {
  eyebrow: "Work with me",
  items: [
    {
      title: "Private Coaching",
      body: "Direct access to my knowledge and guidance, focused entirely on your questions.",
      cta: "Book private coaching",
      href: routes.session,
      variant: "primary" as const,
    },
    {
      title: "Partner with me",
      body: "Partnerships, collaborations, sponsorships and professional inquiries.",
      /*
        Gold rule and gold label rather than the old underlined text link:
        this is a real second action, not a footnote, and at a glance it
        now reads as one — while the filled primary above still wins.
      */
      cta: "Partner with me",
      href: routes.contact,
      variant: "outline" as const,
    },
  ],
} as const;

export const community = {
  label: "Follow the work",
  links: [
    { label: "YouTube", href: external.youtube },
    { label: "Telegram", href: external.telegramCommunity },
  ],
} as const;
