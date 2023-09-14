import React, { Component } from "react";
import "./BookingTable.css";

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [], // Store the fetched bookings here
    };
  }

  componentDidMount() {
    // Fetch data from your API endpoint
    fetch("http://43.204.227.4:8080/api/Booking/GetAllBooking")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bookings: data["message"] });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { bookings } = this.state;

    return (
      //   <div>
      //     <h2>Booking Details</h2>
      //     <table>
      //       <thead>
      //         <tr>
      //           <th>Booking ID</th>
      //           <th>User ID</th>
      //           <th>Vehicle ID</th>
      //           <th>Start Time</th>
      //           <th>End Time</th>
      //           <th>Total Cost</th>
      //           <th>Status</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {bookings.map((booking) => (
      //           <tr key={booking.bookingId}>
      //             <td>{booking.bookingId}</td>
      //             <td>{booking.userId}</td>
      //             <td>{booking.vehicleId}</td>
      //             <td>{booking.startTime}</td>
      //             <td>{booking.endtime}</td>
      //             <td>{booking.totalCost}</td>
      //             <td>{booking.status}</td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
      <div className="booking-details">
        <h2>Booking Details</h2>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Vehicle ID</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.userId}</td>
                <td>{booking.vehicleId}</td>
                <td>{booking.startTime}</td>
                <td>{booking.endtime}</td>
                <td>{booking.totalCost}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookingTable;
