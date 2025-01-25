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
      <header className="d-flex align-items-center justify-content-between py-3 px-4 ">
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
                isActive("/") ? " underline-active" : ""
              }`}
              style={{ color: "black" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/collection"
              className={`nav-link px-3 ${
                isActive("/collection") ? "underline-active" : ""
              }`}
              style={{ color: "black" }}
            >
              Collection
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link px-3 ${
                isActive("/about") ? " underline-active" : ""
              }`}
              style={{ color: "black" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link px-3 ${
                isActive("/contact") ? " underline-active" : ""
              }`}
              style={{ color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons and Mobile Toggle Button */}
        <div className="d-flex align-items-center ">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="me-4 fa-lg" />
          <FontAwesomeIcon icon={faUser} className="me-4 fa-lg" />
          <div className="position-relative me-3  me-sm-5">
            <FontAwesomeIcon icon={faCartShopping} className="fs-5 fa-lg" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              5
            </span>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="btn  d-md-none" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="fa-lg" />
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
          <div className="d-flex flex-column ">
            <Link
              to="/"
              className={`mb-3 text-decoration-none text-dark p-2 fs-5 ${
                isActive("/") ? "toggline-active" : ""
              } `}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collection"
              className={`mb-3 text-decoration-none text-dark p-2 fs-5 ${
                isActive("/collection") ? "toggline-active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </Link>

            <Link
              to="/about"
              className={`mb-3 text-decoration-none text-dark p-2 fs-5 ${
                isActive("/about") ? "toggline-active" : ""
              }   `}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`mb-3 text-decoration-none text-dark p-2 fs-5  ${
                isActive("/contact") ? "toggline-active" : ""
              }`}
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
