import React from "react";
import { signupUser, loginUser } from "./apiService";
export const handleSignUp = async (
  signUpUsername,
  signUpPassword,
  signUpMail,
  setRegistrationMessage
) => {
  const signUpUserAndChangeRegistrationMessage = async (body) => {
    try {
      const response = await signupUser(body);
      console.log("Signup Response:", response.data);
      setRegistrationMessage("Registration successful!");
    } catch (error) {
      setRegistrationMessage("Signup failed.");
      console.error("Error during signup:", error.response.data);
    }
  };

  try {
    const body = {
      username: signUpUsername,
      password: signUpPassword,
      email: signUpMail,
    };

    await signUpUserAndChangeRegistrationMessage(body);
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export const handleLogin = async (
  loginUsername,
  loginPassword,
  login,
  navigate
) => {
  try {
    const response = await loginUser(loginUsername, loginPassword);

    if (!(response.message === "account not found")) {
      login();
      navigate("/home");
    } else {
      console.log(response.data);
      console.error("Error during login:", response.statusText);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
