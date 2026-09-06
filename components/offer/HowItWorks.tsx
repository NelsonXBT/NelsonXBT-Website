import Container from "@/components/ui/Container";
import styles from "./HowItWorks.module.css";

type HowItWorksProps = {
  title: string;
  body: string;
};

/**
 * A closing note on what happens after payment. Carries no action of its
 * own — the Reserve section above it is the page's single call to act.
 */
export default function HowItWorks({ title, body }: HowItWorksProps) {
  return (
    <section className={styles.section} aria-labelledby="how-it-works">
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title} id="how-it-works">
            {title}
          </h2>
          <p className={styles.body}>{body}</p>
        </div>
      </Container>
    </section>
  );
}
