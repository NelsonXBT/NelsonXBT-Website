import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  /** Small gold rule before the label. The site's one recurring accent. */
  rule?: boolean;
  className?: string;
};

export default function Eyebrow({
  children,
  rule = false,
  className = "",
}: EyebrowProps) {
  return (
    <p className={[styles.eyebrow, className].filter(Boolean).join(" ")}>
      {rule ? <span className={styles.rule} aria-hidden="true" /> : null}
      {children}
    </p>
  );
}
