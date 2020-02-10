import React, {useEffect} from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync, fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const Shop =  ({ match, fetchCollectionAsync, fetchCollectionsStart, isCollectionLoaded }) => {
    useEffect(() => {
        // fetchCollectionAsync()
        fetchCollectionsStart()
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
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
        )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop)
