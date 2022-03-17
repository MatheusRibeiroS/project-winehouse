export default function Body({ children, theme }) {
  const style = {
    width: "100%",
    height: "100vh",

    color: theme.color,
    background: theme.background,

    padding: "1rem",
  };

  return (
    <div key='body' style={style}>
      {children}
    </div>
  );
}
