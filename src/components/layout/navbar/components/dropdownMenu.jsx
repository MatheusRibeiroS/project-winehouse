import styledComponents from "styled-components";

const Dropdown = styledComponents.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
`;

export default function DropdownMenu({ children, ...props }) {
  return <Dropdown {...props}>{children}</Dropdown>;
}
