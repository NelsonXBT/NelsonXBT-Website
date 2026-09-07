import type { Quote } from "@/content/payment";

/**
 * Copy for the waitlist-code control on the workshop checkout.
 *
 * Nothing here names a reduced price, a discount or a saving: someone who was
 * never sent a code should read the page as an ordinary checkout, and the only
 * trace of the mechanism is the one quiet line under the total. The code
 * itself, and the price it unlocks, are deliberately absent from this file —
 * they live server-side in `components/payment/waitlistAction.ts`, so neither
 * reaches the browser bundle.
 */
export const waitlistCopy = {
  trigger: "Have a waitlist code?",
  title: "Waitlist Access",
  intro: "Enter your waitlist code to unlock your special price.",
  /** Read to screen readers; the field itself shows only the placeholder. */
  label: "Waitlist code",
  placeholder: "Enter code",
  submit: "Verify",
  pending: "Verifying…",
  verified: "Waitlist access verified",
  invalid: "Invalid waitlist code. Please continue with the standard price.",
} as const;

/**
 * The outcome of one verification attempt, as the checkout sees it. Only
 * `verified` carries a quote, so no other outcome has anything the page could
 * use to change its price.
 */
export type WaitlistState =
  | { readonly status: "idle" }
  | { readonly status: "invalid" }
  | { readonly status: "verified"; readonly quote: Quote };
