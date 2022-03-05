import pages from "../pages";
import * as icons from "@iconscout/react-unicons";

import { wineTypes, priceRange } from "../config/types";

/**
 * @typedef {Object} Routes
 *
 * @property {String} key id of the route
 * @property {String} path url path
 * @property {String} menuName name to be displayed in the menu
 * @property {String} icon icon from @iconscout/react-unicons
 * @property {Function} component component to render
 *
 *  Optional:
 * @property {Array} options options to pass to the component
 */
const routes = [
  {
    key: "home-page",
    path: "/",
    menuName: "Home",
    icon: icons.UilHome,
    component: pages.Home,
  },
  {
    key: "about-page",
    path: "/about",
    menuName: "About",
    icon: icons.UilInfoCircle,
    component: pages.About,
  },
  {
    key: "contact-page",
    path: "/contact",
    menuName: "Contact",
    icon: icons.UilInfoCircle,
    component: pages.Contact,
  },
  {
    key: "wines-list-page",
    path: "/wines/:selectedCategory",
    menuName: "Wines",
    icon: icons.UilGlassMartini,
    component: pages.WineList,
    options: [
      {
        key: "wine-types",
        title: "Wine Types",
        value: wineTypes,
      },
      {
        key: "price-range",
        title: "Price Range",
        value: priceRange,
      },
    ],
  },
];

export default routes;
