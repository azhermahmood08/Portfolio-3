import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Sell</li>
        <li>Explore</li>
      </ul>
      <div className="nav-connect">Contact With Me</div>
    </div>
  );
};

export default Navbar;
