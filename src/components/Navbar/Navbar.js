import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigationBar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="logo">
          <img src="logo.png" />
        </div>

        <h3>Forest Fire Detection</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signUp">
                Sign Up
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/update">
                Update Details
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
