import React from "react";
import './category.styles.scss';
import { connect } from "react-redux/es/exports";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCategory } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ collection }) =>{
    const { title, items } = collection;
    return (
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.url[Object.keys(ownProps.url)[0]])(state)
})

export default connect(mapStateToProps)(CategoryPage);