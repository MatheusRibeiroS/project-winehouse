import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import styledComponents from "styled-components";

export default function NavItem({ onClick, Icon, text, children }) {
  const { theme } = useContext(ThemeContext);

  const NavigationItem = styledComponents.li`
    background-color: ${theme?.themeProps?.header?.background};

    & > .dropdown-menu {
      display: none;
    }
    &:hover {
      & > a {
        border-radius: 8px 8px 0 0;
      }

      & > .dropdown-menu {
        display: block;
      }
    }

  `;

  const ButtomItem = styledComponents.a`
    margin: 0!important;
    text-decoration: none;
    position: relative;
    font-weight: bold;

    display: flex;
    align-items: center;
    color: inherit;
    float: left;
    overflow: hidden;
    
    background-color: #7a7a7a94;
    border-radius: 8px;
    padding: 0.5rem 1rem;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #7a7a7a;
    }
  `;

  const iconStyle = {
    verticalAlign: "middle",
    marginRight: "5px",
  };

  return (
    <NavigationItem key='nav-item'>
      <ButtomItem onClick={onClick}>
        {Icon && <Icon size={24} style={iconStyle} />}
        {text}
      </ButtomItem>
      {children && children}
    </NavigationItem>
  );
}
