import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Trailing arrow, animated on hover. */
  arrow?: boolean;
  full?: boolean;
  className?: string;
};

/**
 * The site's only action component. Renders a Next.js Link for internal
 * routes and a plain anchor for external ones, so both stay semantic.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  arrow = false,
  full = false,
  className = "",
}: ButtonProps) {
  const classes = [
    styles.base,
    styles[variant],
    full ? styles.full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
