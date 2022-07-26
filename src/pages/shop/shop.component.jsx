import React,  { useEffect, useState } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
import { Routes, Route, useParams } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utiles";
import { connect } from "react-redux/es/exports";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
//import CategoryPage from "../category/category.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage= (props) => {
  
  const unsubscribeFromSnapshot = null;
  let params = useParams(); 
  let [loading, setLoading] = useState(true);

  const getCollections = () => {
    const { updateCollections } = props;
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap); 
      setLoading(false);
    })
  }

  useEffect(() => {
    getCollections();
  });

  return(
    <div className="shop-page">
        <Routes>
            <Route index element={ <CollectionsOverviewWithSpinner isLoading={loading} /> }/>
            <Route path='/:categoryId' element={ <CategoryPageWithSpinner isLoading={loading} url={params}/> }/>
        </Routes>
    </div>
  )
}
  


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
