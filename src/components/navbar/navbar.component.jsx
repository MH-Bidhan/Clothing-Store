import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../utils/logos/crown.svg";
import { auth } from "./../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "./../../utils/redux/user/user-selectors";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";
import CartIcon from "./../cart-icon/cart-icon.component";
import "./navbar.styles.scss";

const NavBar = ({ currentUser, hidden }) => {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <a
          target={"_blank"}
          className="option"
          href="http://mahamudhassan.me/"
          rel="noreferrer"
        >
          CONTACT
        </a>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <NavLink to="/signin" className="option">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(NavBar);
