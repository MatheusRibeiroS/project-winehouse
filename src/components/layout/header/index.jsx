import NavigationBar from "../navbar";

import routes from "../../../config/routes";

export default function Header({ theme }) {
  const style = {
    background: theme.background,
    color: theme.color,

    padding: "1rem",
    borderBottom: `0.2rem solid ${theme.borderColor}`,
  };

  // TODO: Add the logo to the header and account icon to the right
  const navigationRoutes = {
    bodyRoutes: routes.filter(({ hidden }) => !hidden),
  };

  return (
    <header style={style}>
      <NavigationBar routes={navigationRoutes} />
    </header>
  );
}
