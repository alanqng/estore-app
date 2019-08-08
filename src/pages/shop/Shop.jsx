import React, { Component } from 'react'
import SHOP_DATA from './data';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

export default class Shop extends Component {
    state = {
        collection: SHOP_DATA
    }
    render() {
        const {collection} = this.state
        return (
            <div className='shop-page'>
                {
                    collection.map(({ id, ...otherProps}) => (
                        <PreviewCollection key={id} {...otherProps}/> 
                            
                    ))
                }
            </div>
        )
    }
}
