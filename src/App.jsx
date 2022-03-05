import { BrowserRouter as Router } from "react-router-dom";

import ApplicationRouter from "./components/router";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ApplicationRouter />
    </Router>
  );
}

export default App;
