import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_B9Cda0Qq3AtM3ny8o65puPXL00utjUWwH8'
    const onToken = token => {
        axios.post('/payment', {
            amount: priceForStripe,
            token: token
        }).then(resp => {
            alert('Payment succesful')
        }).catch(err => {
            console.log('Payment error: ' + err)
            alert('Issue with payment')
        })
    }
    return (
            <StripeCheckout
                label='Pay Now'
                name='CRWM Clothing Ltd.'
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total price is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
    )
}

export default StripeButton
