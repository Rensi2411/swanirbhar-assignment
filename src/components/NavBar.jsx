import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

const NavBar = () => {

  return (
    <header className="header">
      <p className="heading">LMS Dashboard</p>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/upload">Upload Course</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
