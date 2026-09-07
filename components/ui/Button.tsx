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
  full?: boolean;
  className?: string;
};

/**
 * The site's only action component. Renders a Next.js Link for internal
 * routes and a plain anchor for anything else, so both stay semantic.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
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

  /*
    A mailto: or tel: href is handed to the OS, not routed — so it never
    goes through Link, and it must not get target="_blank" either, which
    would leave an empty tab behind.
  */
  const isProtocol = /^(mailto|tel):/.test(href);

  if (external || isProtocol) {
    return (
      <a
        className={classes}
        href={href}
        {...(external && !isProtocol
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
