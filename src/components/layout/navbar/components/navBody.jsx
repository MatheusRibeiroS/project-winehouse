import styledComponents from "styled-components";

export default function NavBody({ alignment = "horizontal", children }) {
  const NavBody = styledComponents.ul`
    white-space: ${alignment === "horizontal" ? "nowrap" : "normal"};
    outline: 0;
    position: relative;

    list-style-type: none;
    margin: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  `;

  return <NavBody key='navbar-body'>{children}</NavBody>;
}
