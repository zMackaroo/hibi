import "./footer.css";
import Home from "../../../assets/icons/home.svg";
import HomeFilled from "../../../assets/icons/home-filled.svg";
import Cart from "../../../assets/icons/cart.svg";
import CartFilled from "../../../assets/icons/cart-filled.svg";
import Favorites from "../../../assets/icons/favorites.svg";
import FavoritesFilled from "../../../assets/icons/favorites-filled.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../../context";
const navItems = [
  { name: "home", icon: Home, activeIcon: HomeFilled, path: "/" },
  { name: "cart", icon: Cart, activeIcon: CartFilled, path: "cart" },
  {
    name: "favorites",
    icon: Favorites,
    activeIcon: FavoritesFilled,
    path: "favorites",
  },
  // { name: "notifications", icon: Cart, path: "notifications" },
];

function Footer() {
  const { cart } = useContext(Store);
  const cartLength = Object.keys(cart).reduce(
    (acc, item) => acc + cart[item].quantity,
    0
  );

  return (
    <div className="footer-nav">
      {navItems.map(({ name, icon, activeIcon, path }) => (
        <NavLink key={name} to={path}>
          {({ isActive }) => (
            <div className="footer-nav-icon-container">
              <img
                className={`footer-nav-icon ${isActive ? "active" : ""}`}
                src={isActive ? activeIcon : icon}
              />
              {name === "cart" && (
                <span className="footer-nav-icon-badge">{cartLength}</span>
              )}
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default Footer;
