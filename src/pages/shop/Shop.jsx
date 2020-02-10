import React, {useEffect} from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection'
import CollectionContainer from '../collection/CollectionContainer'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
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
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
        </div>
        )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

// const mapStateToProps = createStructuredSelector({
//     isCollectionLoaded: selectIsCollectionLoaded
// })


export default connect(null, mapDispatchToProps)(Shop)
