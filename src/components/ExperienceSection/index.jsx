import { Stack } from "@mantine/core";
import experiences from "../../data/experiences";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => (
  <section className={styles.section} id="about">
    <div className={styles.inner}>
      <Stack gap="md" className={styles.headTextContainer}>
        <p className={styles.headingSectionKeyword}>About</p>
        <h2 className={styles.heading}>Experience</h2>
      </Stack>

      <div className={styles.experiences}>
        {experiences.map((e, idx) => (
          <article className={styles.experience} key={idx}>
            <small className={styles.small}>
              {String(idx + 1).padStart(2, "0")}.
            </small>
            <h3 className={styles.employer}>{e.employer}</h3>
            <h4 className={styles.jobTitle}>{e.title}</h4>
            <p className={styles.dates}>
              {e.startDate} - {e.endDate}
            </p>
            <p className={styles.paragraphText}>{e.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
