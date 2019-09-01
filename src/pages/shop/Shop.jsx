import React, {useEffect, useState} from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import CollectionPage from '../collection/Collection'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const Shop =  ({ match, updateCollections }) => {
    let unsubscribeFromsnapshot = null;
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        unsubscribeFromsnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            setLoading(false)
        })
    }, [])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
        )
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
