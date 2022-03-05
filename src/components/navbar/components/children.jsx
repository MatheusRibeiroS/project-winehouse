import { Link } from "react-router-dom";

export default function Children({ options }) {
  const styles = {
    submenu: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
    },
  };

  return (
    <div className='navbar-submenu'>
      {options.map(({ key, title, value }) =>
        key === "price-range" ? (
          <div className='navbar-submenu-item' key={key}>
            <span>{title}</span>
            <div style={styles.submenu}>
              {value.map(({ min, max, description }) => (
                <Link to={`wines?min=${min}&max=${max}`}>
                  <span key={`${min}-${max}`}>{description}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className='navbar-submenu-item' key={key}>
            <span>{title}</span>
            <div style={styles.submenu}>
              {value.map(({ name, color }) => (
                <Link to={`wines?type=${name}`}>
                  <span key={`${name}-${color}`}>{name}</span>
                </Link>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
