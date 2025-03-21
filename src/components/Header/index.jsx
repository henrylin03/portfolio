import { useDisclosure } from "@mantine/hooks";
import { Group, Button, Burger, Drawer, Stack, Divider } from "@mantine/core";
import logoIcon from "/branding/logoWhite.svg";
import logoText from "/branding/textWhite.svg";
import styles from "./Header.module.css";

const LINKS_DATA = [
  { label: "Services", link: "#services" },
  { label: "Projects", link: "#projects" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
];

const navLinksArray = LINKS_DATA.map((l) => (
  <a
    href={l.link}
    className={styles.navLink}
    aria-label={`Go to ${l.label} section`}
    key={l.label}
  >
    {l.label}
  </a>
));

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/">
          <Group wrap="nowrap">
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

        <nav className={styles.nav}>
          <Group visibleFrom="xs" gap="1vmin">
            {navLinksArray}
          </Group>
        </nav>

        <Button
          color="white"
          autoContrast
          component="a"
          href="#contact"
          visibleFrom="xs"
          className={styles.ctaButton}
        >
          Let's chat
        </Button>

        <Burger
          color="lightgrey"
          opened={drawerOpened}
          onClick={toggleDrawer}
          size="sm"
          hiddenFrom="xs"
          className={styles.burger}
        />
      </div>

      {/* drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="sm"
        padding="md"
        zIndex={999}
        hiddenFrom="xs"
      >
        <Stack gap="xs">{navLinksArray}</Stack>

        <Divider my="md" />

        <Button
          color="white"
          autoContrast
          component="a"
          href="#contact"
          className={styles.ctaButton}
        >
          Let's chat
        </Button>
      </Drawer>
    </header>
  );
};

export default Header;
