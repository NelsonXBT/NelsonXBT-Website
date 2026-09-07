import { email, site } from "@/content/site";

/**
 * Terms and privacy. Written to describe what this site actually does —
 * two services paid in USDT, a deferred YouTube embed, no analytics and
 * no forms — rather than boilerplate that claims practices we don't have.
 *
 * `updated` is shown on both pages. Bump it whenever the terms change.
 */
export const legalUpdated = "September 2026";

export const terms = {
  eyebrow: "Legal",
  title: "Terms of Service",
  lead: `The terms below apply to the ${site.name} website and to the services sold through it — the Crypto Clarity Workshop and private coaching.`,
  sections: [
    {
      heading: "Education, not financial advice",
      body: [
        "Everything offered here is educational. Nothing on this site, in the workshop, or in a coaching session is financial, investment, legal or tax advice, and none of it is a recommendation to buy, sell or hold any asset.",
        "Crypto markets carry real risk, including the total loss of what you put in. Every decision you make with your own money is yours alone, and you are responsible for its outcome. If you need advice specific to your circumstances, speak to a licensed professional in your jurisdiction.",
      ],
    },
    {
      heading: "No guarantee of results",
      body: [
        "No outcome is promised or implied. What you take from the workshop or from a coaching session depends on your own effort, judgement, circumstances and the state of the market. Past results — mine or anyone else's — do not predict future results.",
      ],
    },
    {
      heading: "Payment",
      body: [
        "Both services are priced in USDT and paid on BNB Smart Chain (BEP20) to the address shown at checkout. Send only USDT, and only on BEP20. Payments sent on another network, or in another asset, are usually unrecoverable and cannot be credited or refunded.",
        "Your place is confirmed only after I have verified the payment on-chain. Send your transaction hash or a screenshot on Telegram so I can do that, and treat your place as reserved once I have confirmed it to you directly.",
        "On-chain payments are final and cannot be reversed by me.",
      ],
    },
    {
      heading: "Refunds and rescheduling",
      body: [
        "Because access and materials are delivered immediately at the start of a cohort, workshop fees are non-refundable once the cohort has begun. If you pay and can no longer attend, contact me before it starts and I will move you to the next cohort.",
        "Coaching sessions can be rescheduled by giving reasonable notice. Repeated missed sessions without notice may be treated as delivered.",
        "If I cancel a cohort or a session and cannot offer you a replacement, you get a full refund of the amount you paid.",
      ],
    },
    {
      heading: "Your place is yours",
      body: [
        "Access is personal to you. Workshop sessions, recordings, materials and coaching are not to be shared, resold, republished or used to run your own paid programme.",
        "All content on this site and in the services remains mine unless stated otherwise.",
      ],
    },
    {
      heading: "Conduct",
      body: [
        "Sessions are live and shared with other people. I may remove anyone whose behaviour is abusive, disruptive or harmful to others, without a refund.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent the law allows, I am not liable for trading losses, missed opportunities, or any indirect or consequential loss arising from your use of this site or the services. Where liability cannot be excluded, it is limited to the amount you paid.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "These terms may change. The terms that apply to you are the ones published when you paid.",
      ],
    },
  ],
  contact: {
    heading: "Questions",
    body: "If anything here is unclear before you pay, ask first.",
    cta: `Email ${email.address}`,
    href: email.href,
  },
} as const;

export const privacy = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  lead: `What ${site.name} does and does not collect. The short version: this site has no analytics, no tracking pixels, no advertising and no forms.`,
  sections: [
    {
      heading: "What this site collects",
      body: [
        "Nothing. There is no analytics script, no advertising network, no tracking pixel, no cookie banner and no form on any page. Browsing the site does not create an account or a profile, and I cannot identify you from a visit.",
        "The copy button on the checkout pages writes the payment address to your own clipboard, in your browser. Nothing about that is sent anywhere.",
      ],
    },
    {
      heading: "Hosting",
      body: [
        "The site is served by a hosting provider that keeps standard server logs — typically IP address, timestamp, requested page and browser user agent — for security and reliability. These are ordinary infrastructure logs, they are not used to build a profile of you, and I do not combine them with anything else.",
      ],
    },
    {
      heading: "The embedded video",
      body: [
        "The workshop page shows a video. It loads as a still image held on this site, and nothing is requested from the video host until you press play. Until then, the host knows nothing about your visit.",
        "Once you press play, the player loads from the host — currently Bunny Stream — which receives the request and may collect technical data under its own privacy policy, including your IP address and details about your device. If a video is ever served from YouTube instead, the same applies to YouTube. If you would rather not share anything with a video host, don't press play.",
      ],
    },
    {
      heading: "When you get in touch",
      body: [
        `Business enquiries reach me by email at ${email.address}, so my email provider handles those messages under its own privacy policy. Payment confirmations happen on Telegram, and Telegram handles those under its own policy — I have no more access to them than any other person you message.`,
        "When you buy something, I keep what I need to deliver it and to keep my own records: your Telegram handle, the transaction hash or payment screenshot you send, which service you bought, and anything you tell me about what you want to work on. I keep this only as long as I need it for the service and for record-keeping.",
      ],
    },
    {
      heading: "Payments",
      body: [
        "Payments are made directly on-chain to the address shown at checkout. There is no payment processor on this site, and I never see or store card details.",
        "Note that a public blockchain is public and permanent: the transaction, both addresses and the amount are visible to anyone, and I cannot delete or alter that record.",
      ],
    },
    {
      heading: "Sharing",
      body: [
        "I don't sell your information, and I don't share it for advertising. The only parties involved are the ones described above — the host that serves the site, the video host if you press play, my email provider if you write to me, and Telegram if you send a payment confirmation.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can ask me what I hold about you and ask me to delete it, and I will unless I need to keep it for my own records. Depending on where you live you may have further rights over your data. On-chain transactions are the exception — those cannot be deleted by anyone.",
      ],
    },
    {
      heading: "Children",
      body: [
        "These services are not intended for anyone under 18.",
      ],
    },
  ],
  contact: {
    heading: "Questions",
    body: "Ask me anything about this and I will answer plainly.",
    cta: `Email ${email.address}`,
    href: email.href,
  },
} as const;
