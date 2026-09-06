import Link from "next/link";
import { nav } from "@/content/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

type NavbarProps = {
  /** Href of the page being viewed, so its nav link reads as current. */
  current?: string;
  /** Hairline under the bar. Off on the homepage, where the hero carries it. */
  divider?: boolean;
};

/**
 * Three destinations and the wordmark. Small enough to stay inline on
 * every screen size, which keeps it a Server Component with no menu JS.
 */
export default function Navbar({ current, divider = false }: NavbarProps) {
  return (
    <header
      className={[styles.header, divider ? styles.divider : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => {
            const isCurrent = item.href === current;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[styles.link, isCurrent ? styles.current : ""]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
