import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { routes } from "@/content/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Navbar divider />

      <main className={styles.main}>
        <Container>
          <div className={styles.inner}>
            <p className={styles.code}>Error 404</p>
            <h1 className={styles.title}>This page doesn&rsquo;t exist</h1>
            <p className={styles.body}>
              The link may be out of date, or the page may have moved.
            </p>

            <Button href={routes.home} variant="secondary" arrow className={styles.cta}>
              Back to homepage
            </Button>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
