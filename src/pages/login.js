import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/login.css';
import { useAuth } from '../components/AuthContext';
import {handleSignUp, handleLogin} from "../services/authService";

function Login() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpMail, setSignUpMail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(loginUsername, loginPassword, login, navigate);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="loginMain">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign Up</label>
          <p className={registrationMessage === "Registration successful!" ? "success" : "error"}>{registrationMessage}</p>
          <input type="text" name="txt" placeholder="Username" required="" value={signUpUsername} onChange={(e) => { setSignUpUsername(e.target.value) }} />
          <input type="email" name="email" placeholder="E-mail" required="" value={signUpMail} onChange={(e) => { setSignUpMail(e.target.value) }} />
          <input type="password" name="pswd" placeholder="Password" required="" value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value) }} />
          <button type="button" onClick={async () => {handleSignUp(signUpUsername,signUpPassword,signUpMail,setRegistrationMessage)}}>Sign up</button>
        </form>
      </div>

      <div className="loginForm">
        <form onSubmit={handleLoginSubmit}> 
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="text" name="username" placeholder="Username" required="" value={loginUsername} onChange={(e) => { setLoginUsername(e.target.value)}}/>
          <input type="password" name="pswd" placeholder="Password" required="" value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value)}}/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
