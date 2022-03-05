import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Children from "./components/children";

import routes from "../../config/routes";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  return (
    <Router>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='brand-logo'>
            Logo
          </Link>
          <div className='navbar-menu'>
            <ul className='navbar-menu-list'>
              {routes
                .filter(({ hidden }) => !hidden)
                .map(
                  ({
                    key,
                    path,
                    exact,
                    menuName,
                    options,
                    icon: IconComponent,
                  }) => {
                    return (
                      <li key={key} className='navbar-item'>
                        <Link to={path} exact={exact}>
                          <IconComponent />
                          <span>{menuName}</span>
                        </Link>
                        {options && <Children options={options} />}
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
