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
