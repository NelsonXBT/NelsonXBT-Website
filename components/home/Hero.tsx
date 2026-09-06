import Image from "next/image";
import { hero } from "@/content/home";
import { portrait } from "@/content/site";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./Hero.module.css";

/**
 * Answers "who is this and what does he do" in one headline and
 * one sentence. Everything else on the page comes after.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <Eyebrow rule>{hero.eyebrow}</Eyebrow>
          <h1 className={styles.headline}>{hero.headline}</h1>
          <p className={styles.intro}>{hero.intro}</p>
        </div>

        <div className={styles.media}>
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={1500}
            height={1500}
            priority
            sizes="(max-width: 899px) 82vw, 46vw"
            className={styles.image}
          />
          <div className={styles.veil} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
