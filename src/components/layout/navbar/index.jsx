import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "./components";

const NavigationHeader = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0rem;
  margin: 0;
`;

export default function NavigationBar({ routes }) {
  const navigate = useNavigate();

  const { bodyRoutes, cornerRoutes } = routes;

  return (
    routes && (
      <NavigationHeader>
        <Navbar.Body>
          {bodyRoutes.map(
            ({ key, path, icon: Icon, menuName: text, options }) => (
              <Navbar.Item
                key={key}
                onClick={() => navigate(path)}
                Icon={Icon}
                text={text}
              >
                {options && (
                  <Navbar.DropdownMenu>
                    {options.map(({ key, values }) =>
                      values.map(({ name, description, min, max }) => {
                        const keyDropdown = name
                          ? `${key}-${name}`
                          : `${key}-${min}to${max}`;
                        const queryPath = name
                          ? `${path}?type=${name}`
                          : `${path}?min=${min}&max=${max}`;

                        return (
                          <Navbar.DropdownItem
                            key={keyDropdown}
                            onClick={() => navigate(queryPath)}
                          >
                            {name ? name : description}
                          </Navbar.DropdownItem>
                        );
                      })
                    )}
                  </Navbar.DropdownMenu>
                )}
              </Navbar.Item>
            )
          )}
        </Navbar.Body>
      </NavigationHeader>
    )
  );
}
