import { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ApplicationRouter from "./components/router";
import Header from "./components/layout/header";
import Body from "./components/layout/body";

import "./App.css"; // Initial stylesheet
import "./scss/main.scss"; // Scss stylesheet

export const ThemeContext = createContext();

function App() {
  const initialTheme = {
    theme: "dark",
    themeProps: {
      header: {
        background: "#3a3a3a",
        color: "#ffffff",
      },
      body: {
        background: "#fafafa",
        color: "#333",
      },
    },
  };
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header theme={theme.themeProps.header} />
        <Body theme={theme.themeProps.body}>
          <ApplicationRouter />
        </Body>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
