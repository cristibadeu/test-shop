import { connect } from "react-redux/es/exports";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import categoryComponent from "./category.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
  });

const CategoryOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(categoryComponent);

export default CategoryOverviewContainer