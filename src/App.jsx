import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import "@mantine/core/styles.css";
import theme from "./styles/theme";
import "./styles/global.css";

const App = () => {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
      </main>

      <footer></footer>
    </MantineProvider>
  );
};

export default App;
