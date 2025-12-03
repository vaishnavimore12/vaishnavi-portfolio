import "./Navbar.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header" id="myheader">
      <nav className="navbar navbar-expand-lg position-relative">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          {!open && (
            <span className="logo mobile-hidden-logo">Vaishnavi More</span>
          )}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#homee">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/resume">Resume</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
