import { Group } from "@mantine/core";
import logoIcon from "/assets/branding/transparent logo - logo only.svg";
import logoText from "/assets/branding/transparent logo - text only.svg";

import styles from "./Header.module.css";

const Nav = () => {
  const LINKS_DATA = [
    { label: "Services", link: "#services" },
    { label: "Projects", link: "#projects" },
    { label: "About", link: "#about" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className={styles.nav}>
      {LINKS_DATA.map((l) => (
        <a
          href={l.link}
          className={styles.navLink}
          aria-label={`Go to ${l.label} section`}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* branding */}
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

        {/* nav */}
        <Nav />

        {/* button(s) */}
      </div>
    </header>
  );
};

export default Header;
