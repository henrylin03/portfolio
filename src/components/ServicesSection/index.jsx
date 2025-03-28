import { Stack } from "@mantine/core";
import {
  IconCode,
  IconPalette,
  IconBrandReact,
  IconLayoutBoard,
  IconSearch,
  IconTestPipe,
} from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import styles from "./ServicesSection.module.css";

const SERVICES_DATA = [
  {
    icon: <IconCode />,
    title: "Web Development",
    text: "I code websites and web applications from scratch, helping bring your vision to life in the browser.",
    skills: [
      { label: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
      { label: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} /> },
      { label: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
      { label: "React.js", icon: <IconBrandReact /> },
    ],
  },

  {
    icon: <IconPalette />,
    title: "UI/UX Design",
    text: "I conduct user research to understand your users' needs, solving their pain points, and testing potential solutions with them.",
    skills: [
      { label: "Wireframing", icon: <IconLayoutBoard /> },
      { label: "UX research", icon: <IconSearch /> },
      { label: "User testing", icon: <IconTestPipe /> },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className={styles.services}>
    <div className={styles.inner}>
      {/* Text */}
      <Stack justify="center" gap="md" className="sectionHeadTextContainer">
        <p className="sectionHeadingKeyword">Services</p>
        <h1 className="sectionHeading">Here to help</h1>
        <p className="paragraphText">
          Whether you're starting from scratch or have an existing website or
          web app needing a revamp,{" "}
          <a href="#contact" className="link">
            let's have a chat
          </a>{" "}
          on how I can help!
        </p>
      </Stack>

      {/* Cards */}
      <div className={styles.grid}>
        {SERVICES_DATA.map((service) => (
          <article key={service.title} className={styles.card}>
            <figure className={styles.cardIcon} alt={service.title}>
              {service.icon}
            </figure>
            <div className={styles.top}>
              <h2 className={styles.cardHeading}>{service.title}</h2>
              <p className="paragraphText">{service.text}</p>
            </div>
            <ul className={styles.skillsContainer}>
              {service.skills.map((skill) => (
                <li key={skill.label} className={styles.skill}>
                  <figure className={styles.skillIcon} alt={skill.label}>
                    {skill.icon}
                  </figure>
                  <small className={styles.skillLabel}>{skill.label}</small>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
