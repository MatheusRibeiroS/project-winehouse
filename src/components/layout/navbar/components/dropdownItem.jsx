import styledComponents from "styled-components";

export default function DropdownItem({ children, onClick, ...props }) {
  const Item = styledComponents.li`
    cursor: pointer;
    padding: 0.2rem;
    border-top: 1px solid #7a7a7a;
  `;

  return (
    <Item onClick={onClick} {...props}>
      {children}
    </Item>
  );
}
