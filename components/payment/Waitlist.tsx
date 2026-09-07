"use client";

import {
  createContext,
  useActionState,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import PriceTotal from "@/components/payment/PriceTotal";
import { verifyWaitlistCode } from "@/components/payment/waitlistAction";
import type { Quote } from "@/content/payment";
import { waitlistCopy, type WaitlistState } from "@/content/waitlist";
import styles from "./Waitlist.module.css";

type WaitlistValue = {
  /**
   * The quote the page must show. Derived from the verification result on
   * every render rather than held in its own state, so the total and the
   * amount in step one always read from one price — there is no second copy
   * to forget to update, and no path that lowers one without the other.
   */
  quote: Quote;
  state: WaitlistState;
  verify: (formData: FormData) => void;
  pending: boolean;
};

const WaitlistContext = createContext<WaitlistValue | null>(null);

function useWaitlist(): WaitlistValue {
  const value = useContext(WaitlistContext);

  if (!value) {
    throw new Error("Waitlist parts must be rendered inside WaitlistProvider.");
  }

  return value;
}

/**
 * Holds the one piece of state the checkout gains: whether a waitlist code has
 * been verified this visit. Nothing is persisted, so a reload returns the page
 * to its public price.
 */
export function WaitlistProvider({
  standard,
  children,
}: {
  /** The public quote. Shown unless — and until — a code verifies. */
  standard: Quote;
  children: ReactNode;
}) {
  const [state, verify, pending] = useActionState<WaitlistState, FormData>(
    verifyWaitlistCode,
    { status: "idle" },
  );

  const quote = state.status === "verified" ? state.quote : standard;

  return (
    <WaitlistContext.Provider value={{ quote, state, verify, pending }}>
      {children}
    </WaitlistContext.Provider>
  );
}

/** The total panel, reading the live quote. */
export function WaitlistTotal() {
  const { quote } = useWaitlist();

  return <PriceTotal price={quote.price} />;
}

/** The emphasised amount in step one, reading the same live quote. */
export function WaitlistAmount() {
  const { quote } = useWaitlist();

  return <strong>{quote.amount}</strong>;
}

/**
 * The access control that sits under the total: one quiet line, and a small
 * panel behind it. Someone without a code should be able to pass over it.
 */
export function WaitlistAccess() {
  const { quote, state, verify, pending } = useWaitlist();
  const [open, setOpen] = useState(false);
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);

  const verified = state.status === "verified";
  const invalid = state.status === "invalid";

  /*
    Focus follows the flow: into the field when the panel opens or a code comes
    back rejected, onto the confirmation when one is accepted — so a keyboard
    or screen-reader user is never left on a control that has just unmounted.
  */
  useEffect(() => {
    if (verified) {
      successRef.current?.focus();
    } else if (open) {
      inputRef.current?.focus();
    }
  }, [open, verified, state]);

  /*
    One live region, present from the first render so a screen reader announces
    whatever later replaces its contents. The visible messages carry no role of
    their own, which would otherwise announce them a second time.
  */
  const announcement = verified
    ? `${waitlistCopy.verified}. Your total is now ${quote.amount}.`
    : invalid
      ? waitlistCopy.invalid
      : "";

  return (
    <div className={styles.wrap}>
      {verified ? (
        <p ref={successRef} tabIndex={-1} className={styles.verified}>
          <span className={styles.tick} aria-hidden="true">
            ✓
          </span>
          {waitlistCopy.verified}
        </p>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setOpen((wasOpen) => !wasOpen)}
            className={styles.trigger}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
          >
            {waitlistCopy.trigger}
          </button>

          <div id={`${id}-panel`} className={styles.panel} hidden={!open}>
            <p id={`${id}-title`} className={styles.panelTitle}>
              {waitlistCopy.title}
            </p>
            <p className={styles.panelIntro}>{waitlistCopy.intro}</p>

            <form
              action={verify}
              className={styles.form}
              aria-labelledby={`${id}-title`}
            >
              <label htmlFor={`${id}-code`} className="visuallyHidden">
                {waitlistCopy.label}
              </label>

              <div className={styles.row}>
                <input
                  ref={inputRef}
                  id={`${id}-code`}
                  name="code"
                  type="text"
                  className={styles.input}
                  placeholder={waitlistCopy.placeholder}
                  maxLength={40}
                  autoComplete="off"
                  autoCapitalize="characters"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? `${id}-error` : undefined}
                />

                <button
                  type="submit"
                  className={styles.verify}
                  disabled={pending}
                >
                  {pending ? waitlistCopy.pending : waitlistCopy.submit}
                </button>
              </div>
            </form>

            {invalid ? (
              <p id={`${id}-error`} className={styles.error}>
                {waitlistCopy.invalid}
              </p>
            ) : null}
          </div>
        </>
      )}

      <p role="status" aria-live="polite" className="visuallyHidden">
        {announcement}
      </p>
    </div>
  );
}
