import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../../src/assets/frontend_assets/assets";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <header className="d-flex align-items-center justify-content-between py-3 px-4 bg-light">
        {/* Logo */}
        <Link to="/" className="text-decoration-none">
          <img src={assets.logo} alt="logo" style={{ width: "100px" }} />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav d-none d-md-flex mb-0">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link px-3 ${
                isActive("/") ? "fw-bold text-decoration-underline" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/collection"
              className={`nav-link px-3 ${
                isActive("/collection")
                  ? "fw-bold text-decoration-underline"
                  : ""
              }`}
            >
              Collection
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link px-3 ${
                isActive("/about") ? "fw-bold text-decoration-underline" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link px-3 ${
                isActive("/contact") ? "fw-bold text-decoration-underline" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons and Mobile Toggle Button */}
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
          <FontAwesomeIcon icon={faUser} className="me-3" />
          <div className="position-relative me-3">
            <FontAwesomeIcon icon={faCartShopping} className="fs-5" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              5
            </span>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {/* Full-Screen Off-Canvas Menu */}
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column"
          style={{ zIndex: 1050 }}
        >
          {/* Close Button */}
          <div className="d-flex justify-content-end p-3 border-bottom">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {/* Navigation Links */}
          <div className="d-flex flex-column p-4">
            <Link
              to="/"
              className="mb-3 text-decoration-none text-dark fs-5 bg-black text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="mb-3 text-decoration-none text-dark fs-5"
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              to="/about"
              className="mb-3 text-decoration-none text-dark fs-5"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="mb-3 text-decoration-none text-dark fs-5"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
