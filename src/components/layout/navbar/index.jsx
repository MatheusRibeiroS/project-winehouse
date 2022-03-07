import { useState } from "react";
import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "./components";

import routes from "../../../config/routes";

const NavigationHeader = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export default function NavigationBar() {
  const [onHover, setOnHover] = useState({});
  const navigate = useNavigate();

  const handleHover = (id, state) => {
    setTimeout(() => {
      setOnHover({ ...onHover, [id]: state });
    }, 500);
  };

  return (
    <NavigationHeader>
      {routes
        .filter((route) => !route.hidden)
        .map(({ key, path, options, menuName: title }) => {
          return options ? (
            <Navbar.Menu.Submenu
              key={key}
              onMouseOver={() => handleHover(key, true)}
              onMouseOut={() => handleHover(key, false)}
              onClick={() => navigate(path)}
            >
              {title}
              <Navbar.Menu.List
                visible={onHover[key]}
                onMouseOver={() => handleHover(key, true)}
                onMouseOut={() => handleHover(key, false)}
              >
                {options.map(({ key, values }) =>
                  key === "wine-types"
                    ? values.map(({ name }) => (
                        <Navbar.Menu.Item
                          key={`wine-${name}`}
                          onClick={() => navigate(`${path}?type=${name}`)}
                        >
                          {name}
                        </Navbar.Menu.Item>
                      ))
                    : values.map(({ description, min, max }) => (
                        <Navbar.Menu.Item
                          key={`price-${description}`}
                          onClick={() =>
                            navigate(`${path}?min=${min}&max=${max}`)
                          }
                        >
                          {description}
                        </Navbar.Menu.Item>
                      ))
                )}
              </Navbar.Menu.List>
            </Navbar.Menu.Submenu>
          ) : (
            <Navbar.Item key={key} onClick={() => navigate(path)}>
              {title}
            </Navbar.Item>
          );
        })}
    </NavigationHeader>
  );
}
