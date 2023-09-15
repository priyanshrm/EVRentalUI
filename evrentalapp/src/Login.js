import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // alert(username);
    // navigate("/dashboard");
    // return;
    try {
      // Send a POST request to your API to authenticate
      const response = await fetch(
        "http://43.204.227.4:8080/api/Auth/LoginUser",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.ok) {
        // Assuming the token is returned in the response
        const { message } = await response.json();
        console.log(message["message"]);
        console.log(message["token"]);
        // Store the token securely (e.g., in localStorage)
        localStorage.setItem("token", message["token"]);
        localStorage.setItem(
          "user_details",
          JSON.stringify(message["message"])
        );
        // Redirect to another page (e.g., dashboard)
        navigate("/dashboard");
      } else {
        // Handle sign-in error
        console.error("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred while signing in.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
