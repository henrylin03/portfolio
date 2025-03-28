import { Button, Divider, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.largeText}>
          <span className={styles.headingTop}>Let's build something</span>
        </h2>
        <div className={styles.newLine}>
          <Title
            order={2}
            hiddenFrom="xs"
            ta="center"
            c="gray.6"
            fw="normal"
            size="md"
            mb={-10}
          >
            Let's build something together
          </Title>
          <h2 className={styles.largeText}>together</h2>
          <Divider size="lg" w="100%" color="gray.7" visibleFrom="xs" />

          <div className={styles.buttonWrapper}>
            <Button
              variant="white"
              color="black"
              radius="xl"
              size="lg"
              rightSection={<IconArrowRight size={24} />}
              className="primaryBtn"
              component="a"
              href="mailto:hello@henrylin.io"
              target="_blank"
              aria-label="Send email to Henry at email address hello@henrylin.io"
            >
              Send email
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.curve}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
