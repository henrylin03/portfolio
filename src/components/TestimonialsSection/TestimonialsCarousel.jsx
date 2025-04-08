import { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import testimonials from "../../data/testimonials";
import styles from "./TestimonialsSection.module.css";

const TestimonialsCarousel = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 449px)");
  const autoplay = useRef(Autoplay({ delay: 12000 }));

  const slides = testimonials.map((testimonial) => (
    <Carousel.Slide
      key={testimonial.id}
      role="group"
      aria-labelledby={`testimonial-${testimonial.id}-author`}
    >
      <article className={styles.card}>
        <p className={styles.testimonialText}>"{testimonial.fullText}"</p>
        <div className={styles.authorContainer}>
          <img
            src={testimonial.author.img}
            alt={`Photo of ${testimonial.author.name}`}
            className={styles.authorImage}
          />

          <div className={styles.authorText}>
            <h3
              className={styles.authorName}
              id={`testimonial-${testimonial.id}-author`}
            >
              {testimonial.author.name}
            </h3>
            <p className={styles.authorDetails}>
              {testimonial.author.title}, {testimonial.clientName}
            </p>
          </div>
        </div>
      </article>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withControls={!isNarrowScreen}
      withIndicators
      loop
      slideSize={{ base: "100%", md: "50%" }}
      slideGap={{ base: "md", md: "xl" }}
      align="start"
      className={styles.carousel}
      px={isNarrowScreen ? 0 : { base: "xl", xs: "3rem" }}
      pb="3rem"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.pause}
      onMouseLeave={autoplay.current.reset}
      role="region"
      aria-label="A carousel of testimonials from clients"
    >
      {slides}
    </Carousel>
  );
};

export default TestimonialsCarousel;
