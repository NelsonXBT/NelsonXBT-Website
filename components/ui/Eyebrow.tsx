import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Small caps label above a heading. Hierarchy comes from its size,
 * tracking and colour — no leading rule.
 */
export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={[styles.eyebrow, className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}
