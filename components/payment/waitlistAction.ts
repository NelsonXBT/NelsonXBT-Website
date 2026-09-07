"use server";

import { quoteFor } from "@/content/payment";
import type { WaitlistState } from "@/content/waitlist";

/*
  Cohort 1 has a single waitlist code, so it is hard-coded here. There is no
  database behind this site and none is wanted for this: payment is still
  verified by hand on Telegram, exactly as before, and this only decides which
  figure the page asks for.

  Both the code and the price it unlocks live inside this "use server" module
  on purpose. The compiler replaces the implementation with a reference in
  client bundles, so neither value is shipped to the browser, present in page
  source, or discoverable by reading the JavaScript — the browser can only POST
  a candidate back and be told yes or no. That is as far as this can be taken
  without adding accounts or a database, which are out of scope.
*/
const WAITLIST_CODE = "CLARITI50";
const WAITLIST_PRICE = { amount: "$50", currency: "USDT" } as const;

export async function verifyWaitlistCode(
  _previous: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const submitted = formData.get("code");

  /*
    A missing field, a file part, an empty field and a wrong code all take the
    same path: nothing is unlocked and the caller keeps the public price. The
    comparison is case-insensitive, and forgives surrounding whitespace only,
    so a code pasted out of a message works whatever case it arrives in.
  */
  if (typeof submitted !== "string") {
    return { status: "invalid" };
  }

  const candidate = submitted.trim().toUpperCase();

  if (candidate.length === 0 || candidate !== WAITLIST_CODE) {
    return { status: "invalid" };
  }

  return { status: "verified", quote: quoteFor(WAITLIST_PRICE) };
}
