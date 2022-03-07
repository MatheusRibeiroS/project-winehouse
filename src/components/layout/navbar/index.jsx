import { useState } from "react";
import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "./components";

import routes from "../../../config/routes";

const NavigationHeader = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1rem;

  max-width: 1200px;
`;

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <NavigationHeader>
      {routes
        .filter((route) => !route.hidden)
        .map(({ key, path, options, icon: Icon, menuName: title }) => {
          return options ? (
            <Navbar.Menu.Submenu key={key}>
              <span onClick={() => navigate(path)}>
                <Icon size={24} style={{ verticalAlign: "middle" }} />
                <span style={{ marginLeft: "2px", fontStyle: "bold" }}>
                  {title}
                </span>
              </span>
              <Navbar.Menu.List>
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
              <span>
                <Icon size={24} style={{ verticalAlign: "middle" }} />
                <span style={{ marginLeft: "2px", fontStyle: "bold" }}>
                  {title}
                </span>
              </span>
            </Navbar.Item>
          );
        })}
    </NavigationHeader>
  );
}
