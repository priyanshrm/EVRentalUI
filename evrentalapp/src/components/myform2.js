import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myform2.css";

class AddBooking extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      vehicleId: "",
      startTime: "",
      endtime: "",
      totalCost: "",
      status: "",
    };
    this.setUserId = this.setUserId.bind(this);
    this.setVehicleId = this.setVehicleId.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
    this.setTotalCost = this.setTotalCost.bind(this);
    this.setStatus = this.setStatus.bind(this);

    this.saveData = this.saveData.bind(this);
  }
  setUserId(e) {
    this.setState({ userId: e.target.value });
  }
  setVehicleId(e) {
    this.setState({ vehicleId: e.target.value });
  }
  setStartTime(e) {
    this.setState({ startTime: e.target.value });
  }
  setEndTime(e) {
    this.setState({ endtime: e.target.value });
  }
  setTotalCost(e) {
    this.setState({ totalCost: e.target.value });
  }
  setStatus(e) {
    this.setState({ status: e.target.value });
  }
  saveData() {
    // alert('Movie added:' + this.state.name +','+ this.state.description+','+this.state.type);
    var data = {
      userId: this.state.userId,
      vehicleId: this.state.vehicleId,
      startTime: this.state.startTime,
      endtime: this.state.endtime,
      totalCost: this.state.totalCost,
      status: this.state.status,
    };
    const tempStart = new Date(data.startTime);
    const tempStart2 = tempStart.toISOString();

    data.startTime = tempStart2;

    const tempEnd = new Date(data.endtime);
    const tempEnd2 = tempEnd.toISOString();

    data.endtime = tempEnd2;

    console.log(JSON.stringify(data));
    // Make a POST request to your backend API
    fetch("http://43.204.227.4:8080/api/Booking/AddBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          alert("Booking added successfully");
        } else {
          alert("Failed to add booking");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      //   <div>
      //     <h2>Booking Entry</h2>
      //     <hr />
      //     <form>
      //       <div className="form-group">
      //         <label>User ID</label>
      //         <input
      //           type="text"
      //           value={this.state.userId}
      //           className="form-control"
      //           onChange={this.setUserId}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Vehicle ID</label>
      //         <input
      //           type="text"
      //           value={this.state.vehicleId}
      //           className="form-control"
      //           onChange={this.setVehicleId}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Start Time</label>
      //         <input
      //           type="datetime-local"
      //           value={this.state.startTime}
      //           className="form-control"
      //           onChange={this.setStartTime}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>End Time</label>
      //         <input
      //           type="datetime-local"
      //           value={this.state.endtime}
      //           className="form-control"
      //           onChange={this.setEndTime}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Total Cost</label>
      //         <input
      //           type="text"
      //           value={this.state.totalCost}
      //           className="form-control"
      //           onChange={this.setTotalCost}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Status</label>
      //         <input
      //           type="text"
      //           value={this.state.status}
      //           className="form-control"
      //           onChange={this.setStatus}
      //         />
      //       </div>
      //       <input
      //         type="button"
      //         onClick={this.saveData}
      //         value="Save"
      //         className="btn btn-primary"
      //       />
      //       <input type="button" value="Reset" className="btn btn-secondary" />
      //     </form>
      //   </div>
      <div class="container">
        <h2>Booking Entry</h2>
        <hr class="hr" />
        <form>
          <div class="formGroup">
            <label class="label">User ID</label>
            <input
              type="text"
              value={this.state.userId}
              class="input"
              onChange={this.setUserId}
            />
          </div>
          <div class="formGroup">
            <label class="label">Vehicle ID</label>
            <input
              type="text"
              value={this.state.vehicleId}
              class="input"
              onChange={this.setVehicleId}
            />
          </div>
          <div class="formGroup">
            <label class="label">Start Time</label>
            <input
              type="datetime-local"
              value={this.state.startTime}
              class="input"
              onChange={this.setStartTime}
            />
          </div>
          <div class="formGroup">
            <label class="label">End Time</label>
            <input
              type="datetime-local"
              value={this.state.endTime}
              class="input"
              onChange={this.setEndTime}
            />
          </div>
          <div class="formGroup">
            <label class="label">Total Cost</label>
            <input
              type="text"
              value={this.state.totalCost}
              class="input"
              onChange={this.setTotalCost}
            />
          </div>
          <div class="formGroup">
            <label class="label">Status</label>
            <input
              type="text"
              value={this.state.status}
              class="input"
              onChange={this.setStatus}
            />
          </div>
          <input
            type="button"
            onClick={this.saveData}
            value="Save"
            class="primaryButton"
          />
          <input type="button" value="Reset" class="secondaryButton" />
        </form>
      </div>
    );
  }
}
export default AddBooking;
