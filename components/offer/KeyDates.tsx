import Button from "@/components/ui/Button";
import styles from "./KeyDates.module.css";

type KeyDatesProps = {
  items: readonly { readonly label: string; readonly value: string }[];
  cta: string;
  href: string;
};

/**
 * The deadline, the start date, and the action — as one bar under the
 * video. Someone who has just watched has the question "when, and how do
 * I get in?" in mind, and this answers it without a scroll.
 *
 * Set as label-over-value pairs rather than sentences: two dates read
 * faster when they are scanned as a table than as prose, and it lets the
 * whole thing sit on one line beside the button on a desktop.
 */
export default function KeyDates({ items, cta, href }: KeyDatesProps) {
  return (
    <div className={styles.bar}>
      <dl className={styles.dates}>
        {items.map((item) => (
          <div className={styles.date} key={item.label}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>

      <Button href={href} variant="primary" className={styles.cta}>
        {cta}
      </Button>
    </div>
  );
}
