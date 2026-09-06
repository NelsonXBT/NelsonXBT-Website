import Link from "next/link";
import { routes, site } from "@/content/site";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: "sm" | "md";
  /** Render as plain text — used when the logo sits inside a heading. */
  asText?: boolean;
  className?: string;
};

/**
 * The NELSONXBT wordmark. Single source for the mark used in the
 * navbar, footer and payment header.
 */
export default function Logo({
  size = "sm",
  asText = false,
  className = "",
}: LogoProps) {
  const classes = [styles.logo, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const mark = (
    <>
      Nelson<span className={styles.accent}>XBT</span>
    </>
  );

  if (asText) {
    return <span className={classes}>{mark}</span>;
  }

  return (
    <Link className={classes} href={routes.home} aria-label={`${site.name} — home`}>
      {mark}
    </Link>
  );
}
