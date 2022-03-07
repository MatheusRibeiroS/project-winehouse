export default function Item({ children, onClick }) {
  return <a onClick={onClick}>{children}</a>;
}
