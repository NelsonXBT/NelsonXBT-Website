import { Fragment } from "react";
import { community } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./CommunityLinks.module.css";

/** YouTube and Telegram as a quiet continuation of the brand. */
export default function CommunityLinks() {
  return (
    <section className={styles.section} aria-label={community.label}>
      <Container>
        <div className={styles.row}>
          <Eyebrow>{community.label}</Eyebrow>

          <div className={styles.links}>
            {community.links.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 ? (
                  <span className={styles.dot} aria-hidden="true">
                    &middot;
                  </span>
                ) : null}

                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                  <span className={styles.mark} aria-hidden="true">
                    &#8599;
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
