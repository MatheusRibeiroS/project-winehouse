export default function DropdownItem({ children, onClick, ...props }) {
  return (
    <li onClick={onClick} {...props}>
      {children}
    </li>
  );
}
