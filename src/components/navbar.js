import React from "react";

import "./style.scss";
import logo from "../images/logo.png";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Logo-1" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="has-text-black-ter" href="/">
                For employers
              </a>
            </div>
            <div className="navbar-item">
              <a className="has-text-black-ter" href="/">
                Our clients
              </a>
            </div>
            <div className="navbar-item">
              <a className="has-text-black-ter" href="/">
                Blog
              </a>
            </div>
            <a href="/" className="button is-primary navbar-item">
              Post a job
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
