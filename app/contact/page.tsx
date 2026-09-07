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
            <Eyebrow>{contact.eyebrow}</Eyebrow>
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

              {/* The address is shown in full as well as linked, so it can
                  be copied by anyone who'd rather not open a mail client. */}
              <a className={styles.email} href={contact.emailHref}>
                <span className={styles.emailLabel}>{contact.emailLabel}</span>
                <span className={styles.emailAddress}>
                  {contact.emailAddress}
                </span>
              </a>

              <div className={styles.ctas}>
                <Button href={contact.emailHref} variant="primary">
                  {contact.cta}
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
