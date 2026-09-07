import Container from "@/components/ui/Container";
import styles from "./Syllabus.module.css";

type Topic = {
  readonly number: string;
  readonly title: string;
  readonly body: string;
};

type SyllabusProps = {
  title: string;
  intro: string;
  topics: readonly Topic[];
  /** Anchors the section heading for aria-labelledby. */
  id?: string;
};

/**
 * The numbered outline of what an offer covers. Shared by the workshop's
 * seven days and the 1-on-1's six areas.
 */
export default function Syllabus({
  title,
  intro,
  topics,
  id = "coverage-title",
}: SyllabusProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <Container className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title} id={id}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </div>

        <ol className={styles.list}>
          {topics.map((topic) => (
            <li className={styles.item} key={topic.number}>
              <span className={styles.number} aria-hidden="true">
                {topic.number}
              </span>

              <div>
                <h3 className={styles.itemTitle}>{topic.title}</h3>
                <p className={styles.itemBody}>{topic.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
