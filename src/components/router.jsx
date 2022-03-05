import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../config/routes";

export default function ApplicationRouter() {
  return (
    <Router>
      <Routes>
        {routes.map(({ key, path, exact, component: RouteComponent }) => (
          <Route
            key={key}
            path={path}
            exact={exact}
            element={<RouteComponent />}
          />
        ))}
      </Routes>
    </Router>
  );
}
