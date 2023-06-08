import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
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
            id: "token_id_here",
          },
          amount: props.price,
        }
      );
      if (response) {
        console.log("success");
      }
    } catch (error) {
      console.log("An Error occurred");
    }
  };

  const stripeKey =
    "pk_test_51N5kR5AHUmt4BX2AiORBeGUfKjZRhNIreprl0UbzsH3CPvDXwmIbDchH1b3AVqLzE1ZivesgCu6UVDMJ0RWM2laB001HKeBkks";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Houzz
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <span className="text-danger">Logout!</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Down Payment</h5>
            <p className="card-text">
              The Total Down Payment Payable is: {props.price}
            </p>
            <StripeCheckout
              token={handleToken}
              stripeKey={stripeKey}
              amount={props.price} // Amount in cents
              name="Pay via Card"
              description={`Your Total is $ ${props.price}`}
              currency="USD"
              billingAddress
              zipCode
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
