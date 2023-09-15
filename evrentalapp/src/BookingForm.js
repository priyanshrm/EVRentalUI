import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const navigate = useNavigate();

  // Use the useLocation hook to access the location state
  const { state } = useLocation();
  const { vehicle } = state || {}; // Destructure the vehicle from state

  const goBack = () => {
    navigate(-1); // Go back one step in the history
  };

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    if (startDate && endDate && vehicle) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const rentalPrice = vehicle.rentalPrice;
      const numberOfDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate number of days
      const total = rentalPrice * numberOfDays; // Calculate total amount
      setTotalAmount(total); // Update the total amount state
      const calculatedSgst = 0.06 * total; // Calculate SGST
      const calculatedCgst = 0.06 * total; // Calculate CGST
      const calculatedFinalAmount = total + calculatedSgst + calculatedCgst; // Calculate final amount
      setSgst(calculatedSgst);
      setCgst(calculatedCgst);
      setFinalAmount(calculatedFinalAmount); // Update the final amount state
    }
  };

  useEffect(() => {
    calculateTotalAmount(); // Call the function when relevant values change
  }, [startDate, endDate, vehicle]);

  const fees = 249;

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Booking Form</h2>
      <form
        className="booking-form"
        onSubmit={() =>
          pickupLocation &&
          dropLocation &&
          startDate &&
          endDate &&
          navigate("/make-payment", {
            state: {
              vehicle: vehicle,
              booking: {
                pickupLocation: pickupLocation,
                dropLocation: dropLocation,
                startDate: startDate,
                endDate: endDate,
              },
              amount: {
                totalAmount: totalAmount,
                sgst: sgst,
                cgst: cgst,
                fees: fees,
                finalAmount: finalAmount,
              },
            },
          })
        }
      >
        <div className="form-group">
          <label className="form-label">Pickup Location:</label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select Pickup Location</option>
            <option value="HSR Layout">HSR Layout</option>
            <option value="Marathalli">Marathalli</option>
            <option value="Jayanagar">Jayanagar</option>
            <option value="Bellundur">Bellundur</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Kormangala">Kormangala</option>
            <option value="Indiranagar">Indiranagar</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Drop Location:</label>
          <select
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select Drop Location</option>
            <option value="HSR Layout">HSR Layout</option>
            <option value="Marathalli">Marathalli</option>
            <option value="Jayanagar">Jayanagar</option>
            <option value="Bellundur">Bellundur</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Kormangala">Kormangala</option>
            <option value="Indiranagar">Indiranagar</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Start Date:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">End Date:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-input"
            required
          />
        </div>
        {vehicle && (
          <div className="vehicle-details">
            <h3>Vehicle Details</h3>
            <p>Vehicle ID: {vehicle.vehicleId}</p>
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Battery: {vehicle.battery}</p>
            <p>Charge: {vehicle.charge}</p>
            <p>Rental price: {vehicle.rentalPrice}</p>
          </div>
        )}
        <p className="total-amount">Total Amount: ₹{totalAmount}</p>
        <p className="sgst">SGST: ₹{0.06 * totalAmount}</p>
        <p className="cgst">CGST: ₹{0.06 * totalAmount}</p>
        <p className="fees">Fees: ₹{249}</p>
        <p className="final-amount">Final Amount: ₹{finalAmount}</p>
        <button type="submit" className="form-button">
          Make Payment
        </button>
      </form>
      <button onClick={goBack}>Back</button> {/* Back button */}
    </div>
  );
}

export default BookingForm;
