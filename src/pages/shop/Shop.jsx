import React, {useEffect, useState} from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection'
import CollectionContainer from '../collection/CollectionContainer'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { connect } from 'react-redux'
import CollectionOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const Shop =  ({ match, fetchCollectionAsync, isCollectionLoaded }) => {

    useEffect(() => {
        fetchCollectionAsync()
        // const collectionRef = firestore.collection('collections')
        
        // collectionRef.get().then(snapshot => {
        //     const collectionMap = convertCollectionSnapshotToMap(snapshot)
        //     updateCollections(collectionMap)
        //     setLoading(false)
        // })
        
        // unsubscribeFromsnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        //     updateCollections(collectionsMap)
        //     setLoading(false)
        // })
    }, [])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
        </div>
        )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionsStartAsync())
})

// const mapStateToProps = createStructuredSelector({
//     isCollectionLoaded: selectIsCollectionLoaded
// })


export default connect(null, mapDispatchToProps)(Shop)
