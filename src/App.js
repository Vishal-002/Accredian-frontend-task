import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

const App = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        // Handle successful login
        alert("Login Successful");
      } else {
        // Handle login failure
        // alert("Login Failed");
        alert("Please, Check email or password");
      }
    } catch (error) {
      console.log("Error during login:", error);
      alert("Error During login");
      alert(error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupFormData),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("Signup Successful");
        alert("Signup Successful");
      } else {
        // Handle signup failure
        // console.error("Signup Failed");
        // alert("Signup Failed");
        alert("User is already registered");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup:", error);
    }
  };

  return (
    <Router>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
          <Typography variant="h5" align="center" gutterBottom>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>{" "}
            |{" "}
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Sign Up
            </Link>
            {/* <LoginForm /> */}
          </Typography>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginForm
                  onSubmit={handleLoginSubmit}
                  onChange={handleLoginChange}
                  formData={loginFormData}
                />
              }
            />
            <Route
              path="/"
              element={
                <SignupForm
                  onSubmit={handleSignupSubmit}
                  onChange={handleSignupChange}
                  formData={signupFormData}
                />
              }
            />
          </Routes>
        </Paper>
      </Container>
    </Router>
  );
};

export default App;
