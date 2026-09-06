import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import StackedList from "@/components/ui/StackedList";
import styles from "./Reserve.module.css";

type ReserveProps = {
  eyebrow: string;
  price: { readonly amount: string; readonly currency: string };
  /** One line under the price — a cohort date, or what the price covers. */
  detail: string;
  cta: string;
  href: string;
  /** Opens the CTA in a new tab (used when it points at Telegram). */
  external?: boolean;
  note: string;
  benefits: readonly { readonly label: string; readonly body: string }[];
};

/**
 * Price, action and what's included. Shared by /workshop and /1-on-1
 * so both offers present their terms identically.
 */
export default function Reserve({
  eyebrow,
  price,
  detail,
  cta,
  href,
  external = false,
  note,
  benefits,
}: ReserveProps) {
  return (
    <section className={styles.section} id="reserve">
      <Container>
        <div className={styles.grid}>
          <div className={styles.main}>
            <Eyebrow rule>{eyebrow}</Eyebrow>

            {/* The price is the visual heading; this keeps the outline sound. */}
            <h2 className="visuallyHidden">Reserve your seat</h2>

            <p className={styles.price}>
              {price.amount}
              <span className={styles.currency}>{price.currency}</span>
            </p>

            <p className={styles.cohort}>{detail}</p>

            <Button
              href={href}
              variant="primary"
              external={external}
              arrow
              className={styles.cta}
            >
              {cta}
            </Button>

            <p className={styles.note}>{note}</p>
          </div>

          <StackedList items={benefits} className={styles.benefits} />
        </div>
      </Container>
    </section>
  );
}
