import { useMediaQuery } from "@mantine/hooks";
import { ActionIcon, Group } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 589px)");

  const contactData = [
    {
      type: "Email",
      link: "mailto:hello@henrylin.io",
      icon: <IconMail />,
    },
    {
      type: "GitHub",
      link: "https://github.com/henrylin03/",
      icon: <IconBrandGithub />,
    },
    {
      type: "LinkedIn",
      link: "https://www.linkedin.com/in/henrylin03",
      icon: <IconBrandLinkedin />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <Group gap={isNarrowScreen ? "md" : "xl"}>
        {contactData.map((c, idx) => (
          <ActionIcon
            key={idx}
            variant="outline"
            color="gray"
            p=".25rem"
            size={isNarrowScreen ? "md" : "xl"}
            component="a"
            href={c.link}
            target="_blank"
            aria-label={
              c.type === "Email"
                ? "Send me an email at hello@henrylin.io"
                : `Check out my ${c.type}`
            }
          >
            {c.icon}
          </ActionIcon>
        ))}
      </Group>
    </footer>
  );
};

export default Footer;
