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
 * The NELSONXBT wordmark. One weight, one colour — a mark reads as a mark
 * because of its letterform and tracking, not because half of it is tinted.
 */
export default function Logo({
  size = "sm",
  asText = false,
  className = "",
}: LogoProps) {
  const classes = [styles.logo, styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (asText) {
    return <span className={classes}>{site.name}</span>;
  }

  return (
    <Link
      className={classes}
      href={routes.home}
      aria-label={`${site.name} — home`}
    >
      {site.name}
    </Link>
  );
}
