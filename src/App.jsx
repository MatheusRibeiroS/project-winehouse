import { BrowserRouter as Router } from "react-router-dom";

import ApplicationRouter from "./components/router";
import Header from "./components/layout/header";
import Body from "./components/layout/body";

import "./App.css"; // Initial stylesheet
import "./scss/main.scss"; // Scss stylesheet

function App() {
  const theme = {
    header: {
      background: "#3a3a3a",
      color: "#ffffff",
      borderColor: "#777777",
    },
    body: {
      background: "#fafafa",
      color: "#333",
    },
  };

  return (
    <Router>
      <Header theme={theme.header} />
      <Body theme={theme.body}>
        <ApplicationRouter />
      </Body>
    </Router>
  );
}

export default App;
