import { email } from "@/content/site";

/**
 * Content for the contact page. Deliberately free of unverifiable
 * specifics — no claims that aren't already established.
 *
 * One channel only: email. Telegram stays in the payment flow, where a
 * confirmation needs to reach me quickly, but business enquiries belong
 * somewhere they can be read and answered properly.
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
    "Email is the way to reach me. Tell me what you have in mind and I will get back to you.",
  emailLabel: "Email",
  emailAddress: email.address,
  emailHref: email.href,
  cta: "Send an email",
} as const;
