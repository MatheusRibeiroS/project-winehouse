import styledComponents from "styled-components";

export default function NavBody({ children }) {
  const NavBody = styledComponents.ul`
    outline: 0;
    position: relative;
    display: contents;

    list-style-type: none;
    margin: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  `;

  return <NavBody key='navbar-body'>{children}</NavBody>;
}
