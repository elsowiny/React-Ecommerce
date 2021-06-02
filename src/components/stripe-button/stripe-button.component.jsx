import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ixz1DE9UjPR7BTLf6OiB2xWESbMKtZDyYoJxDL5hjmsj1ieMdQZi29r2tzLhjqHdIhq70SpHIyaJH49b8tGtQd100f6L21D4q'

        const onToken = token => {
            console.log(token);
            alert('Payment Succesful');
        }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;