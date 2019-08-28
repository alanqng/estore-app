import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_B9Cda0Qq3AtM3ny8o65puPXL00utjUWwH8'
    const onToken = token => {
        console.log(token)
        alert('Payment Succesfull')
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
                toke={onToken}
                stripeKey={publishableKey}
            />
    )
}

export default StripeButton
