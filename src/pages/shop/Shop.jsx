import React, {useEffect} from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection'
const Shop =  ({ match }) => {
    useEffect(() => {
        console.log(match)
    })
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        )
}

export default Shop
