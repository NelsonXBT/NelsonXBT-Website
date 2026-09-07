import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { legalUpdated } from "@/content/legal";
import styles from "./LegalPage.module.css";

type LegalContent = {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly sections: readonly {
    readonly heading: string;
    readonly body: readonly string[];
  }[];
  readonly contact: {
    readonly heading: string;
    readonly body: string;
    readonly cta: string;
    readonly href: string;
  };
};

/**
 * Shared shell for the two legal pages. A single measured column — these
 * are read, not skimmed, so nothing competes with the prose.
 */
export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <Navbar divider />

      <main className={styles.main}>
        <Container narrow>
          <div className={styles.head}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.lead}>{content.lead}</p>
            <p className={styles.updated}>Last updated {legalUpdated}</p>
          </div>

          <div className={styles.body}>
            {content.sections.map((section) => (
              <section className={styles.section} key={section.heading}>
                <h2 className={styles.heading}>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p className={styles.paragraph} key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className={styles.section}>
              <h2 className={styles.heading}>{content.contact.heading}</h2>
              <p className={styles.paragraph}>{content.contact.body}</p>

              <div className={styles.cta}>
                {/* A mailto, so it hands off to the mail client rather
                    than opening a tab. */}
                <Button href={content.contact.href} variant="secondary">
                  {content.contact.cta}
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer narrow />
    </>
  );
}
