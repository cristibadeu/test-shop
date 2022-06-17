import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux/es/exports";
import { AddItem } from "../../redux/cart/cart.actions";
import './collection-item.styles.scss';

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item
    return(
        <div className="collection-item">
            <div className="image" style={{ 
                backgroundImage: `url(${imageUrl})`
            }} />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => AddItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)