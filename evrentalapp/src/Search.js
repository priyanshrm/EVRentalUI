import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function FetchDataButton() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");

      // Check if the token exists
      if (!token) {
        navigate("/");
        console.error("Token is missing. Please log in.");
        return;
      }

      const response = await fetch("http://43.204.227.4:8080/api/EV/GetAllEV", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBookClick = (vehicleId) => {
    navigate(`/booking/${vehicleId}`);
    // console.log(`Booking Vehicle ID: ${vehicleId}`);
  };

  return (
    <div className="container">
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
      <div className="table-container">
        {data ? (
          <table className="data-table">
            <thead className="table-header">
              <tr>
                <th>Vehicle ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Battery Capacity</th>
                <th>Charging Time</th>
                <th>Rental Price</th>
                <th>Action</th> {/* Added a new column for the "Book" button */}
              </tr>
            </thead>
            <tbody>
              {data.map((vehicle) => (
                <tr className="table-row" key={vehicle.vehicleId}>
                  <td className="table-cell">{vehicle.vehicleId}</td>
                  <td className="table-cell">{vehicle.make}</td>
                  <td className="table-cell">{vehicle.model}</td>
                  <td className="table-cell">{vehicle.year}</td>
                  <td className="table-cell">{vehicle.batteryCapacity}</td>
                  <td className="table-cell">{vehicle.chargingTime}</td>
                  <td className="table-cell">{vehicle.rentalPrice}</td>
                  <td className="table-cell">
                    <button
                      className="book-button"
                      onClick={() => handleBookClick(vehicle.vehicleId)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="fetch-message">Click the button to fetch data</p>
        )}
      </div>
    </div>
  );
}

export default FetchDataButton;
