import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
  const { vehicleId } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (!token) {
      console.error("Token is missing. Please log in.");
      return;
    }

    // Fetch vehicle details based on vehicleId
    const apiUrl = `http://43.204.227.4:8080/api/EV/GetEVById/?id=${vehicleId}`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setVehicleDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle details:", error);
      });
  }, [vehicleId]);

  const goBack = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <div className="vehicle-details-container">
      <h2>Vehicle Details</h2>
      {vehicleDetails ? (
        <div className="vehicle-details">
          <p>Vehicle ID: {vehicleDetails.vehicleId}</p>
          <p>Make: {vehicleDetails.make}</p>
          <p>Model: {vehicleDetails.model}</p>
          <p>Year: {vehicleDetails.year}</p>
          <p>Battery Capacity: {vehicleDetails.batteryCapacity}</p>
          <p>Charging Time: {vehicleDetails.chargingTime}</p>
          <p>Rental Price: {vehicleDetails.rentalPrice}</p>
          {/* Add more details as needed */}
          <button onClick={goBack}>Back</button> {/* Back button */}
          <button
            onClick={() =>
              navigate("/booking-form", { state: { vehicle: vehicleDetails } })
            }
          >
            Proceed
          </button>
        </div>
      ) : (
        <p className="loading-message">Loading vehicle details...</p>
      )}
    </div>
  );
}

export default BookingPage;
