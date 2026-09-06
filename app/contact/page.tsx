import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import StackedList from "@/components/ui/StackedList";
import { contact } from "@/content/contact";
import { routes } from "@/content/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Partnerships, collaborations, sponsorships and professional inquiries with Nelson Edeh of NelsonXBT.",
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <>
      <Navbar current={routes.contact} divider />

      <main className={styles.main}>
        <Container>
          <div className={styles.head}>
            <Eyebrow rule>{contact.eyebrow}</Eyebrow>
            <h1 className={styles.title}>{contact.title}</h1>
            <p className={styles.lead}>{contact.lead}</p>
          </div>

          <div className={styles.body}>
            <section aria-labelledby="open-to">
              <h2 className={styles.blockTitle} id="open-to">
                {contact.listTitle}
              </h2>
              <StackedList items={contact.items} roomy />
            </section>

            <section className={styles.closing} aria-labelledby="get-in-touch">
              <h2 className={styles.blockTitle} id="get-in-touch">
                {contact.closingTitle}
              </h2>
              <p className={styles.closingBody}>{contact.closingBody}</p>

              <div className={styles.ctas}>
                {contact.ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    href={cta.href}
                    variant={cta.variant}
                    external={cta.external}
                    arrow={cta.variant === "secondary"}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
