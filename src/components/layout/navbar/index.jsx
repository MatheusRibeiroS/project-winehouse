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

  return (
    <NavigationHeader>
      <Navbar.Body>
        <Navbar.Item onClick={() => navigate("/wines")} text='Wines' />
      </Navbar.Body>
    </NavigationHeader>
  );
}
