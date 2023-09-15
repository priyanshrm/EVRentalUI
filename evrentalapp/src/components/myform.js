import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      vehicleId: '',
      startTime: '',
      endtime: '',
      totalCost: '',
      status: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const randomBookingId = Math.floor(Math.random() * 1000000);
    const formData = {
        bookingId: randomBookingId,
        userId: this.state.userId,
        vehicleId: this.state.vehicleId,
        startTime: this.state.startTime,
        endtime: this.state.endtime,
        totalCost: this.state.totalCost,
        status: this.state.status,
    };

    console.log(JSON.stringify(formData));

    try {
      const response = await fetch('http://43.204.227.4:8080/api/Booking/AddBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        // Successfully submitted the data to the API
        console.log('Form data submitted successfully');
        // You can also reset the form fields if needed
        this.setState({
          userId: '',
          vehicleId: '',
          startTime: '',
          endtime: '',
          totalCost: '',
          status: '',
        });
      } else {
        console.error('Failed to submit form data to the API');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

render() {
    const { userId, vehicleId, startTime, endtime, totalCost, status } = this.state;
  
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="vehicleId">Vehicle ID:</label>
            <input
              type="text"
              id="vehicleId"
              name="vehicleId"
              value={vehicleId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="startTime">Start Time:</label>
            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="endtime">End Time:</label>
            <input
              type="datetime-local"
              id="endtime"
              name="endtime"
              value={endtime}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="totalCost">Total Cost:</label>
            <input
              type="text"
              id="totalCost"
              name="totalCost"
              value={totalCost}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

export default MyForm;
