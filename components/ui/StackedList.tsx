import styles from "./StackedList.module.css";

type Item = {
  readonly label: string;
  readonly body: string;
};

type StackedListProps = {
  items: readonly Item[];
  /** Slightly larger type and padding, for use as a page's main list. */
  roomy?: boolean;
  className?: string;
};

/**
 * Hairline-separated label/description rows. The site's one list pattern —
 * used for workshop inclusions and for the service pages.
 */
export default function StackedList({
  items,
  roomy = false,
  className = "",
}: StackedListProps) {
  const classes = [styles.list, roomy ? styles.roomy : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <dl className={classes}>
      {items.map((item) => (
        <div className={styles.item} key={item.label}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.body}>{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}
