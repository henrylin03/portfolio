import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import "./styles/global.css";

const App = () => {
  return (
    <MantineProvider forceColorScheme="dark">
      <Header />
    </MantineProvider>
  );
};

export default App;
