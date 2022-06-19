import React from "react";
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from "react-redux/es/exports";
import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCart, itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
  });

const mapDispatchToProps = dispatch => ({
    toggleCart:() => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)