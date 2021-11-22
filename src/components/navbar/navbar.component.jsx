import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../utils/logo/crown.svg";
import "./navbar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="option" to="/signin">
          SIGNIN
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
