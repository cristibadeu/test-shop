import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utiles";
import { connect } from "react-redux/es/exports";
import './header.styles.scss';

const Header = ({ currentUser }) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACTS</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
                    : 
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)