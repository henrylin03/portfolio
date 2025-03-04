import { Box, Group } from "@mantine/core";
import logoIcon from "/assets/branding/transparent logo - logo only.svg";
import logoText from "/assets/branding/transparent logo - text only.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <Group>
          <img
            src={logoIcon}
            className={styles.logoIcon}
            alt="Henry Lin logo"
          />
          <img
            src={logoText}
            className={styles.logoText}
            alt="Henry Lin logo"
          />
        </Group>
      </a>
    </header>
  );
};

export default Header;
