import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <Header />
    </MantineProvider>
  );
};

export default App;
