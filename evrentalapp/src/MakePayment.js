// MakePayment.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MakePayment.css";

function MakePayment() {
  const { state } = useLocation();
  const { vehicle, booking, amount } = state || {};

  // Define state variables for credit card details
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  // Handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add your payment logic here
    const userdetails = localStorage.getItem("user_details");
    const userObj = JSON.parse(userdetails);

    console.log("Payment made with the following details:- ");
    console.log("Card Number:", cardNumber);
    console.log("Expiration Date:", expDate);
    console.log("CVV:", cvv);
    console.log("Vehicle Info:", JSON.stringify(vehicle));
    console.log("Booking Details:", JSON.stringify(booking));
    console.log("Payment Amount:", JSON.stringify(amount));
    console.log("User Details:", userObj);
    // console.log(userObj.userId);

    // Add payment processing logic here (e.g., send payment data to a payment gateway)
    var tempStart = new Date(booking["startDate"]);
    var tem2Start = tempStart.toISOString();

    var tempEnd = new Date(booking["endDate"]);
    var temp2End = tempEnd.toISOString();

    const requestBody = {
      userId: userObj.userId,
      vehicleId: vehicle.vehicleId,
      startTime: tem2Start,
      endtime: temp2End,
      totalCost: amount["finalAmount"],
      status: "Paid",
    };

    console.log(requestBody);

    const token = localStorage.getItem("token");

    fetch("http://43.204.227.4:8080/api/Booking/AddBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        console.log("Booking added successfully:", data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error adding booking:", error);
      });

    navigate("/thankyou");
  };

  return (
    <div className="make-payment-container">
      <h2 className="section-title">Make Payment</h2>
      <div className="section vehicle-details">
        <h3>Vehicle Details</h3>
        <p>Vehicle ID: {vehicle.vehicleId}</p>
        <p>Make: {vehicle.make}</p>
        <p>Model: {vehicle.model}</p>
        <p>Year: {vehicle.year}</p>
        <p>Battery Capacity: {vehicle.batteryCapacity}</p>
        <p>Charging Time: {vehicle.chargingTime}</p>
        <p>Rental Price: {vehicle.rentalPrice}</p>
      </div>
      <div className="section booking-details">
        <h3>Booking Details</h3>
        <p>Pickup Location: {booking.pickupLocation}</p>
        <p>Drop Location: {booking.dropLocation}</p>
        <p>Start Date: {booking.startDate}</p>
        <p>End Date: {booking.endDate}</p>
      </div>
      <form onSubmit={handlePaymentSubmit} className="section payment-form">
        <label className="form-label">Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="form-input"
          required
        />
        <label className="form-label">Expiration Date:</label>
        <input
          type="text"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
          className="form-input"
          required
        />
        <label className="form-label">CVV:</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">
          Pay
        </button>
      </form>
      <button className="form-button" onClick={() => navigate("/dashboard")}>
        Cancel
      </button>
    </div>
  );
}

export default MakePayment;
