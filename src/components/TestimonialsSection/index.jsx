import { Stack } from "@mantine/core";
import TestimonialsCarousel from "./TestimonialsCarousel";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = () => (
  <section
    className={styles.section}
    id="testimonials"
    aria-labelledby="testimonials-heading"
  >
    <div className="inner">
      <Stack
        justify="center"
        gap="md"
        className="sectionHeadTextContainer"
        mb={{ base: "xl", lg: "3rem", xl: "4rem" }}
      >
        <p className="sectionHeadingKeyword">Testimonials</p>
        <h2 className="sectionHeading" id="testimonials-heading">
          What my clients say
        </h2>
      </Stack>

      <TestimonialsCarousel />
    </div>
  </section>
);

export default TestimonialsSection;
