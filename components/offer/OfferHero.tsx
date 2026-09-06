import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./OfferHero.module.css";

type OfferHeroProps = {
  eyebrow: string;
  /** Two lines: the second is set in the accent colour. */
  title: readonly [string, string];
  /** Attribution beside the meta rule, e.g. "with NelsonXBT". */
  with: string;
  /** Small caps detail after the rule — a cohort date or a format. */
  meta: string;
  /** Optional media below the head, e.g. the workshop video. */
  children?: ReactNode;
};

/**
 * Shared hero for the two paid offers (workshop and 1-on-1). Both need
 * the same shape — eyebrow, two-line title, attribution and one line of
 * detail — so they share one component rather than two near-copies.
 */
export default function OfferHero({
  eyebrow,
  title,
  with: attribution,
  meta,
  children,
}: OfferHeroProps) {
  const [line, accent] = title;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.head}>
          <Eyebrow rule>{eyebrow}</Eyebrow>

          <h1 className={styles.title}>
            {line}
            <br />
            <span>{accent}</span>
          </h1>

          <p className={styles.meta}>
            {attribution}
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.detail}>{meta}</span>
          </p>
        </div>

        {children ? <div className={styles.media}>{children}</div> : null}
      </Container>
    </section>
  );
}
