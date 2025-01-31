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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Collections from "../../Pages/Collections";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  const onCollection = (path) => location;

  const [searchBox, setSearchBox] = useState(false);

  const handleClick = () => {
    setSearchBox(!searchBox);
  };

  useEffect(() => {
    if (location.pathname !== "/collections") {
      setSearchBox(false);
    } else {
      setSearchBox(true);
    }
  }, [location.pathname]);

  return (
    <>
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
                to={`/collections`}
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
            <FontAwesomeIcon
              onClick={() => {
                navigate("/collections");
                onCollection("/collections");
                handleClick();
              }}
              icon={faMagnifyingGlass}
              className="me-4 fa-lg"
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => navigate("/login")}
              className="me-4 fa-lg"
              style={{ cursor: "pointer" }}
            />
            <div className="position-relative me-3  me-sm-5">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fs-5 fa-lg"
                style={{ cursor: "pointer" }}
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="btn  d-md-none"
              onClick={() => setMenuOpen(true)}
            >
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
                className={`mb-3 text-decoration-none text-dark p-2 fs-5 ${
                  isActive("/collection") ? "toggline-active" : ""
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/collections");
                  onCollection("/collections");
                  handleClick();
                }}
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
      <div className="container">
        {searchBox && (
          <div className=" w-100  bg-white d-flex align-items-center justify-content-center container  search-box ">
            <div className="w-75 w-md-50 d-flex">
              <input
                type="text"
                placeholder="Search"
                className="form-control input-custom "
              />
              <button className="btn bg-black " style={{ borderRadius: "0" }}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "white" }}
                />
              </button>
            </div>
            <div className=" p-3 border-bottom">
              <button className="btn" onClick={() => setSearchBox(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
