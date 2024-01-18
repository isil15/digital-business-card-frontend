// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import NavBar from "./components/navbar";
import Profile from "./pages/profile";
import Buy from "./pages/buy";
import "./App.css";

const App = () => {

  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

const AppLayout = () => {
  return (
    <div className="layout-container">
    <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
