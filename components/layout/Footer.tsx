import Link from "next/link";
import { legalNav, site, socials } from "@/content/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import styles from "./Footer.module.css";

/**
 * Shared across every page. Wordmark, one line of positioning,
 * direct channels. Nothing else.
 */
export default function Footer({ narrow = false }: { narrow?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container narrow={narrow}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size="md" />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <nav className={styles.links} aria-label="Elsewhere">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {social.label}
                <span className={styles.mark} aria-hidden="true">
                  &#8599;
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {year} {site.name}
          </span>

          {/* Kept on the copyright row rather than beside the socials —
              present for anyone looking, quiet for everyone else. */}
          <nav className={styles.legal} aria-label="Legal">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.legalLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
