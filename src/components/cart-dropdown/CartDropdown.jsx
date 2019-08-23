import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>)
                )
                :
                (<span className='empty-message'>Your cart is empty</span>)
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
