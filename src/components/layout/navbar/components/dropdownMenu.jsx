import styledComponents from "styled-components";

const Dropdown = styledComponents.div`
  padding: 0.5rem 1rem;
  border-radius: 0px 8px 8px 0;
  background-color: #7a7a7a94;

  display: flex;
  flex-direction: column;

  position: absolute;
  margin-top: 40px;
  z-index: 10;

  &:hover {
    display: block;
  }
`;

export default function DropdownMenu({ children, ...props }) {
  return <Dropdown className="dropdown-menu" {...props}>{children}</Dropdown>;
}
