import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collections-overview.scss'
import PreviewCollection from '../preview-collection/PreviewCollection';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => {
    return (
        <div className={'collections-overview'}>
        {collections.map(({id, ...otherCollectionsProps }) =>(
            <PreviewCollection key={id} {...otherCollectionsProps} />
        ))}
    </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionsOverview)