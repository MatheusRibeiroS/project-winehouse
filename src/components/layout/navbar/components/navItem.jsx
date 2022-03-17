import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import styledComponents from "styled-components";

export default function NavItem({ onClick, Icon, text, children }) {
  const { theme } = useContext(ThemeContext);

  const NavigationItem = styledComponents.li`
    background-color: ${theme?.themeProps?.header?.background};
  `;

  const ButtomItem = styledComponents.a`
    margin: 0!important;
    text-decoration: none;
    border-radius: 0;
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

    transition: all 0.2s ease-in-out;

    & > div {
      display: none;
    }

    &:hover {
      background-color: #7a7a7a;

      & > div {
        display: block;
      }
    }
  `;

  const iconStyle = {
    verticalAlign: "middle",
    marginRight: "2px",
  };

  return (
    <NavigationItem key='nav-item'>
      <ButtomItem onClick={onClick}>
        {Icon && <Icon size={24} style={iconStyle} />}
        {text}
        {children && children}
      </ButtomItem>
    </NavigationItem>
  );
}
