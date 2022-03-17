import NavigationBar from "../navbar";

export default function Header({ theme }) {
  const style = {
    width: "100vw",

    background: theme.background,
    color: theme.color,

    padding: "1rem",
    borderBottom: `0.2rem solid ${theme.borderColor}`,
  };

  return (
    <header style={style}>
      <NavigationBar />
    </header>
  );
}
