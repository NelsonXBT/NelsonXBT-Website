import { actions } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./PrimaryActions.module.css";

/** The two commercial actions. Only the first is button-styled. */
export default function PrimaryActions() {
  return (
    <section className={styles.section} aria-labelledby="work-with-me">
      <Container>
        <Eyebrow rule>
          <span id="work-with-me">{actions.eyebrow}</span>
        </Eyebrow>

        <div className={styles.grid}>
          {actions.items.map((item) => (
            <div className={styles.action} key={item.href}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.body}>{item.body}</p>

              <Button
                href={item.href}
                variant={item.variant}
                arrow={item.variant === "secondary"}
                className={styles.cta}
              >
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
