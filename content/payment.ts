import { external } from "@/content/site";

/**
 * Payment facts shared by every paid offer. One wallet, one network,
 * one confirmation route — so a change here can never leave the
 * workshop and the 1-on-1 quoting different details.
 */
export const wallet = {
  address: "0x4C31d64F15B82E272e6Cb642E64e57530E6E1946",
  network: "BNB Smart Chain (BEP20)",
  telegramHref: external.telegramDirect,
  telegramCta: "I’ve Paid — Confirm on Telegram",
  warning:
    "Send USDT only through BNB Smart Chain (BEP20). Sending through another network may result in loss of funds.",
} as const;

export type Price = {
  readonly amount: string;
  readonly currency: string;
};

/**
 * A price together with the exact amount to send for it. The two are always
 * derived from one another through `quoteFor`, never written down twice, so
 * the total on screen and the figure in step one cannot fall out of step.
 */
export type Quote = {
  readonly price: Price;
  /** The exact amount to send, e.g. "70 USDT". */
  readonly amount: string;
};

export function quoteFor(price: Price): Quote {
  return {
    price,
    amount: `${price.amount.replace("$", "")} ${price.currency}`,
  };
}

/**
 * The second step is identical for both offers; only the amount in
 * step one changes, so that step is supplied per offer.
 */
export const confirmStep = {
  number: "2",
  title: "Confirm on Telegram",
  /** `{what}` is replaced with the offer's own noun — a seat, or sessions. */
  body: "After payment, send your transaction hash or payment screenshot on Telegram so I can verify your payment and confirm {what}.",
} as const;
