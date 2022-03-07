import { BrowserRouter as Router } from "react-router-dom";

import ApplicationRouter from "./components/router";
import NavigationBar from "./components/layout/navbar";

import "./App.css"; // Initial stylesheet
import "./scss/main.scss"; // Scss stylesheet

function App() {
  return (
    <Router>
      <NavigationBar />
      <ApplicationRouter />
    </Router>
  );
}

export default App;
