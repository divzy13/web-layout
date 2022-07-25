import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePay = React.memo(function StripePay({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Jemj7JuNvlr0BgnBVfb6INJGWdxbSLLtu4kDpPkP9aabRggE7hBbsT6hBTvXI2KFJhwHfwR74DKwSGC6J5SNK3q00zhNL38wz";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful! Your order is placed.");
  };

  return (
    <StripeCheckout
      label="Pay with Card"
      name="Portal"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/iem.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      bitcoin={true}
      stripeKey={publishableKey}
    />
  );
});

export default StripePay;
