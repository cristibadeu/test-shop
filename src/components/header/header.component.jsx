import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utiles";
import { connect } from "react-redux/es/exports";
import CartIcon from "../cart-icon/cart-icon.comonent";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  console.log(hidden)
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACTS
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  );
};

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);