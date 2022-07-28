import React, { useEffect, useCallback } from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CategoryOverviewContainer from "../category/category.container";
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from "react-redux/es/exports";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage= (props) => {
  let params = useParams();  
  const callbackFetch = useCallback(() => {
    const { fetchCollectionsStart} = props;
    fetchCollectionsStart();
  },[props])

  useEffect(() => {
    callbackFetch();
  },[callbackFetch]);

  return(
    <div className="shop-page">
        <Routes>
            <Route index element={ <CollectionsOverviewContainer /> }/>
            <Route path='/:categoryId' element={ <CategoryOverviewContainer url={params}/> }/>
        </Routes>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
