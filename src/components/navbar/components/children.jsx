import React from "react";

export default function Children({ options }) {
  return (
    <div className='navbar-submenu'>
      {options.map(({ key, title, value }) =>
        key === "price-range" ? (
          <div className='navbar-submenu-item' key={key}>
            <span>{title}</span>
            <div>
              {value.map(({ min, max, description }) => (
                <span key={`${min}-${max}`}>{description}</span>
              ))}
            </div>
          </div>
        ) : (
          <div className='navbar-submenu-item' key={key}>
            <span>{title}</span>
            <div>
              {value.map(({ name, color }) => (
                <span key={`${name}-${color}`}>{name}</span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
