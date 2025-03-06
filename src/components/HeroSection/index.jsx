import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.greeting}>Hi, I'm Henry.</p>
          <h1 className={styles.heading}>Front-End Web Developer.</h1>
        </div>
        <div className={styles.bottom}>
          <Button
            variant="white"
            color="black"
            radius="xl"
            size="lg"
            rightSection={<IconArrowRight size={24} />}
            className={styles.ctaBtn}
          >
            Let's chat
          </Button>
          <p className={styles.text}>
            I design and build custom, pixel-perfect web apps that my users love
            to use.
          </p>
        </div>
      </div>

      {/* decoration */}
      <div className={styles.container}>
        <div className={styles.logoPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
    </section>
  );
};

export default HeroSection;
