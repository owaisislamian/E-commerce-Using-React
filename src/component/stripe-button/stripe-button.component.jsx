import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price/176.5*100;
  const publishableKey = 'pk_test_51KEua3EauerpsyquwUwoCpNr4Bkyo2Gl0DcARrzC9pe0BBGICCrUWqGa9nfL8ec4RPGq5nUxhIOqMvBAcQSNFRVV00U4ESWg3k';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Shop Online'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is   Rs:${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;