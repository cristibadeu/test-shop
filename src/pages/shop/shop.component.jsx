import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
import { Routes, Route, useParams } from 'react-router-dom';
//import CategoryPage from "../category/category.component";

const ShopPage = () => {
    let params = useParams(); 
  return(
    <div className="shop-page">
        <Routes>
            <Route index element={ <CollectionsOverview /> }/>
            <Route path='/:categoryId' element={ <CategoryPage url={params}/> }/>
        </Routes>
    </div>
  )
};



export default ShopPage;
