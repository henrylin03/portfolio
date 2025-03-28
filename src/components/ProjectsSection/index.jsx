import { Button, Image, List, Stack, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import projectsData from "../../data/projects";
import styles from "./ProjectsSection.module.css";
import { useMediaQuery } from "@mantine/hooks";

const ProjectsSection = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 499px)");

  const cards = projectsData.map((project) => (
    <article key={project.id} className={styles.card}>
      <div className={styles.left}>
        <p className={styles.small}>{project.type}</p>
        <h3 className={styles.projectName}>{project.title}</h3>
        <p className={styles.paragraphText}>{project.copy}</p>
        <List
          className={styles.calloutList}
          spacing="xs"
          size="sm"
          icon={
            <ThemeIcon color="gray.7" size={25} radius="xl">
              <IconCheck size="60%" stroke={4} color="white" />
            </ThemeIcon>
          }
        >
          {project.callouts.map((callout, idx) => (
            <List.Item key={idx}>{callout}</List.Item>
          ))}
        </List>
        <div className={styles.buttons}>
          {project.buttons.map((btn, idx) => (
            <Button
              key={idx}
              mt="lg"
              size={isNarrowScreen ? "sm" : "md"}
              color={btn[0].includes("code") ? "gray" : "white"}
              variant={btn[0].includes("code") ? "outline" : "filled"}
              autoContrast
              component="a"
              href={btn[1]}
              target="_blank"
              className={
                btn[0].includes("code") ? "secondaryBtn" : "primaryBtn"
              }
              aria-label={`View ${btn[0].includes("code") ? "source code for" : "live link of"} ${project.title}`}
            >
              {btn[0]}
            </Button>
          ))}
        </div>
      </div>
      <a
        href={project.buttons[0][1]}
        target="_blank"
        aria-label={`See ${project.title} live`}
        className={styles.screenshotAnchor}
      >
        <Image
          src={project.imgPaths[0]}
          visibleFrom="sm"
          className={styles.screenshot}
        />
        <Image
          src={project.imgPaths[1]}
          className={styles.screenshot}
          hiddenFrom="sm"
        />
      </a>
    </article>
  ));

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <Stack justify="center" gap="sm" className="sectionHeadTextContainer">
          <p className="sectionHeadingKeyword">Projects</p>
          <h2 className="sectionHeading">My recent work</h2>
        </Stack>

        <Stack justify="center" className={styles.projectCards}>
          {cards}
        </Stack>

        <Button
          color="gray"
          variant="outline"
          autoContrast
          component="a"
          href="https://github.com/henrylin03/"
          target="_blank"
          className={styles.viewMoreOnGitHubButton}
          size="md"
          aria-label="Go to Henry Lin's GitHub to view more of Henry's projects."
        >
          View more on GitHub
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
