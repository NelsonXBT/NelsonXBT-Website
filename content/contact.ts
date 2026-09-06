import { external } from "@/content/site";

/**
 * Content for the contact page. Deliberately free of unverifiable
 * specifics — no claims that aren't already established.
 */

export const contact = {
  eyebrow: "Contact",
  title: "Work With Me",
  lead: "For partnerships, collaborations, sponsorships, business opportunities and professional inquiries.",
  listTitle: "What I'm open to",
  items: [
    {
      label: "Partnerships",
      body: "Ongoing work with teams and projects building in crypto.",
    },
    {
      label: "Collaborations",
      body: "Content, education and community work with other creators.",
    },
    {
      label: "Sponsorships",
      body: "Placements across YouTube and the community, where the fit is genuine.",
    },
    {
      label: "Professional inquiries",
      body: "Speaking, advisory and other business opportunities.",
    },
  ],
  closingTitle: "Get in touch",
  closingBody:
    "Telegram is the fastest way to reach me. X works too if you would rather start there.",
  ctas: [
    {
      label: "Message on Telegram",
      href: external.telegramDirect,
      variant: "primary" as const,
      external: true,
    },
    {
      label: "X",
      href: external.x,
      variant: "secondary" as const,
      external: true,
    },
  ],
} as const;
