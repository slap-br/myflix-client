import { createRoot } from "react-dom/client";
import { MainView } from "./components/Main-View/main-view";
import Container from "react-bootstrap/Container";

import "./index.scss";

const App = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
