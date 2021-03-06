import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching,selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import CollectionOverview from '../../component/collection-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class  ShopPage extends React.Component {

  componentDidMount() {
    const {fetchCollectionsStartAsync}=this.props;
    fetchCollectionsStartAsync();
    };
  
  render() {
  const {match,isCollectionFetching,IsCollectionLoaded}=this.props;
 
   return(
      <div className="shop-page">
       <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching}{...props}/>} />
       <Route path={`${match.path}/:collectionId`} render ={(props)=><CollectionPageWithSpinner isLoading={!IsCollectionLoaded}{...props} /> } />
      </div>
    )
    
   
 }
} 
  const mapStateToProps = createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,
    IsCollectionLoaded :selectIsCollectionLoaded
  }) ;

  const mapDispatchToProps=dispatch =>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
  });

export default connect (mapStateToProps,mapDispatchToProps) (ShopPage);
