import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menubar from "./components/menu";
import About from "./components/pages/About";
import Search from "./Search";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import MakePayment from "./MakePayment";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import ThankYou from "./Thankyou";

function App() {
  return (
    <Router>
      <Menubar />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* Wrap your PrivateRoute components inside a Route */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Search />} />}
          />
          <Route
            path="/booking/:vehicleId"
            element={<PrivateRoute element={<BookingPage />} />}
          />
          <Route
            path="/booking-form"
            element={<PrivateRoute element={<BookingForm />} />}
          />
          <Route
            path="/make-payment"
            element={<PrivateRoute element={<MakePayment />} />}
          />
          <Route
            path="/thankyou"
            element={<PrivateRoute element={<ThankYou />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
