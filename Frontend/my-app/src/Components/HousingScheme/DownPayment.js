import React from "react";
// import HeaderNavBar from "../Components/HeaderNavBar";
import StripeCheckout from "react-stripe-checkout";
// import "../Styles/ComponentStyles/Downpayment.css";
import axios from "axios";

export default function DownPayment(props) {
  const handleToken = async (token) => {
    // Process the token on your server or handle the payment logic here
    console.log("Payment token:", token);
    try {
      const response = await axios.post(
        "http://localhost:3000/payment/createpayment",
        {
          token: {
            id: 'token_id_here'
          },
          amount: props.price
        }
        
        );
      if (response) {
        console.log("success");
      }
    } catch (error) {
      console.log("An Error occured");
    }
  };

  const stripeKey =
    "pk_test_51N5kR5AHUmt4BX2AiORBeGUfKjZRhNIreprl0UbzsH3CPvDXwmIbDchH1b3AVqLzE1ZivesgCu6UVDMJ0RWM2laB001HKeBkks";

  return (
    <>
     

      <p className="total-price">
        The Total Down Payment Payable is: {props.price}
      </p>
      <div className="container">
        <div className="form">
          <StripeCheckout
            token={handleToken}
            stripeKey={stripeKey}
            amount={props.price} // Amount in cents
            name="Pay via Card"
            description={`Your Total is $ ${props.price}`}
            currency="USD"
            billingAddress
            zipCode
          />
        </div>
      </div>
    </>
  );
}
