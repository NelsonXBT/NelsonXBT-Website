/**
 * Single source of truth for brand facts, routes and external links.
 * Change a value here and it updates everywhere on the site.
 */

export const site = {
  name: "NelsonXBT",
  person: "Nelson Edeh",
  role: "Crypto educator",
  tagline: "Crypto education by Nelson Edeh.",
  url: "https://nelsonxbt.com",
} as const;

export const routes = {
  home: "/",
  workshop: "/workshop",
  payment: "/workshop/payment",
  session: "/1-on-1",
  sessionPayment: "/1-on-1/payment",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
} as const;

export const external = {
  youtube: "https://www.youtube.com/@NelsonXBT",
  telegramCommunity: "https://t.me/NelsonxbtSpace",
  telegramDirect: "https://t.me/NelsonXBT",
  x: "https://x.com/nelson_xbt",
} as const;

export const nav = [
  { label: "Workshop", href: routes.workshop },
  { label: "1-on-1", href: routes.session },
  { label: "Contact", href: routes.contact },
] as const;

/** Footer only, on the copyright row — deliberately not in the main nav. */
export const legalNav = [
  { label: "Terms", href: routes.terms },
  { label: "Privacy", href: routes.privacy },
] as const;

export const socials = [
  { label: "YouTube", href: external.youtube },
  { label: "Telegram", href: external.telegramCommunity },
  { label: "X", href: external.x },
] as const;

export const portrait = {
  src: "/nelson-portrait.jpg",
  alt: "Nelson Edeh, the crypto educator behind NelsonXBT, seated at a desk in a dark cardigan",
} as const;
