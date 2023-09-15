// ThankYou.js
import React from "react";
import "./Thankyou.css"; // You can create a CSS file for styling

function ThankYou() {
  return (
    <div className="thank-you-container">
      <h2>Thank You for Your Payment!</h2>
      <p>Your payment was successful.</p>
      <p>You will receive a confirmation email shortly.</p>
    </div>
  );
}

export default ThankYou;
