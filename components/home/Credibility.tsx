import { credibility } from "@/content/home";
import Container from "@/components/ui/Container";
import styles from "./Credibility.module.css";

/**
 * Evidence, placed before the commercial actions so trust is
 * established first. Rendered from data — edit content/home.ts.
 */
export default function Credibility() {
  return (
    <section className={styles.band} aria-label="Background">
      <Container>
        <dl className={styles.grid}>
          {credibility.map((item) => (
            <div className={styles.item} key={item.label}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value}>
                {item.value}
                <span className={styles.trail}>{item.trail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
