import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "@mantine/core/styles.css";
import "./styles/global.css";

const App = () => {
  return (
    <MantineProvider forceColorScheme="dark">
      <Header />

      <main>
        <HeroSection />
      </main>

      <footer></footer>
    </MantineProvider>
  );
};

export default App;
