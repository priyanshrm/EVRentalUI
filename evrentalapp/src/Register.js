import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import your CSS file for styling

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    var userId = Math.floor(Math.random() * (9999 - 9 + 1)) + 9;
    // Add your registration logic here, e.g., send a request to your backend
    console.log("Register with the following details:");
    console.log("User ID:", userId);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Confirm Password:", confirmPassword);
    if (password === confirmPassword) {
      const reqBody = {
        userId: userId,
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      };

      try {
        // Send a POST request to your API to authenticate
        const response = await fetch(
          "http://43.204.227.4:8080/api/Auth/RegisterUser",
          {
            method: "POST",
            body: JSON.stringify({
              userId,
              username,
              password,
              email,
              firstName,
              lastName,
              phone,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);

        if (response.ok) {
          // Assuming the token is returned in the response
          const { message } = await response.json();
          console.log(message);
          navigate("/");
        } else {
          // Handle sign-in error
          console.error("Sign-up failed. Please check your details.");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("An error occurred while signing in.");
      }
    } else {
      console.error("Passwods don't match!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username" // Match the property name in UserModel
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email" // Match the property name in UserModel
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName" // Match the property name in UserModel
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName" // Match the property name in UserModel
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel" // Use "tel" type for phone numbers
            name="phone" // Match the property name in UserModel
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password" // Use "password" type for passwords
            name="password" // Match the property name in UserModel
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password" // Use "password" type for passwords
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
        <button type="button" onClick={() => navigate("/")}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Register;
