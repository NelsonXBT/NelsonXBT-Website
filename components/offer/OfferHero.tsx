import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./OfferHero.module.css";

type OfferHeroProps = {
  /** Optional small caps label above the title. */
  eyebrow?: string;
  /**
   * Two parts. By default they stack, with the second in the accent
   * colour; with `inlineTitle` they sit on one line in a single colour.
   */
  title: readonly [string, string];
  /**
   * Sets the title on one line in the plain text colour, at every width.
   * For short titles — a long one would either wrap or shrink too far.
   */
  inlineTitle?: boolean;
  /** Attribution under the title, e.g. "with NelsonXBT". */
  with: string;
  /** Small caps detail — a cohort date or a format. */
  meta: string;
  /** Optional paragraph under the meta line, e.g. the coaching promise. */
  intro?: string;
  /** Optional media below the head, e.g. the workshop video. */
  children?: ReactNode;
  /** Optional block under the media, aligned to it — dates and an early CTA. */
  footer?: ReactNode;
};

/**
 * Shared hero for the two paid offers (workshop and private coaching).
 * Both need the same shape — an optional eyebrow, two-line title,
 * attribution and one line of detail — so they share one component
 * rather than two near-copies.
 */
export default function OfferHero({
  eyebrow,
  title,
  inlineTitle = false,
  with: attribution,
  meta,
  intro,
  children,
  footer,
}: OfferHeroProps) {
  const [line, accent] = title;

  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.head}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

          <h1 className={inlineTitle ? styles.titleInline : styles.title}>
            {inlineTitle ? (
              `${line} ${accent}`
            ) : (
              <>
                {line}
                <br />
                <span>{accent}</span>
              </>
            )}
          </h1>

          <p className={styles.meta}>
            <span>{attribution}</span>
            <span className={styles.detail}>{meta}</span>
          </p>

          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </div>

        {children ? <div className={styles.media}>{children}</div> : null}

        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </Container>
    </section>
  );
}
