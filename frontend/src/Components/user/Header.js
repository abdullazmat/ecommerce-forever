import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../../src/assets/frontend_assets/assets";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { USER_API_END_POINT } from "../../Utils/constant";
import axios from "axios";
import { setSearchText } from "../../Redux/productSlice";
import useGetUserData from "../../Hooks/useGetUserData";
import Toast from "../user/Toast";

function Header() {
  // Local States
  const [menuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const [localUser, setLocalUser] = useState(null);
  const [searchBox, setSearchBox] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Redux States
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Hook Called
  useGetUserData(user?._id);

  // Use Effects
  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  useEffect(() => {
    if (localUser) {
      setLocalUser(localUser);
    }
  }, [localUser]);

  // Hooks
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  // Custom Hook Call
  useGetUserData(user?._id);

  // Route Checking
  const isActive = (path) => location.pathname === path;
  const onCollection = (path) => location;

  // Search Box Handling
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

  // Logout Handler
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        dispatch(setUser(null));
        setLocalUser(null);
        setIsOpen(false);

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        {success && <Toast message="Logout Successfully" />}
        {error && <Toast message={error} />}
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
            <li className="nav-item">
              <Link
                to="/admin-panel"
                className="nav-link px-3 border"
                style={{
                  color: "black",
                  borderRadius: "10px",
                }}
              >
                Admin Panel
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
            <div
              className="dropdown position-relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              style={{ display: "inline-block", position: "relative" }}
            >
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => !localUser && navigate("/login")}
                className="me-4 fa-lg"
                style={{ cursor: "pointer" }}
              />
              {localUser && isOpen && (
                <ul
                  className="dropdown-menu"
                  style={{
                    display: "block",
                    position: "absolute",
                    right: 0, // Opens to the left
                    top: "100%",
                    backgroundColor: "white",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: "5px",
                    listStyle: "none",
                    minWidth: "150px",
                    zIndex: 1000,
                  }}
                >
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={logoutHandler}
                      style={{
                        background: "none",
                        border: "none",
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div className="position-relative me-3  me-sm-5">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fs-5 fa-lg"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {user ? cart?.length : 0}
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
                to="/collections"
                className={`mb-3 text-decoration-none text-dark p-2 fs-5 ${
                  isActive("/collections") ? "toggline-active" : ""
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
              <Link
                to="/admin-panel"
                className={`mb-3 text-decoration-none text-dark p-2 fs-5  `}
                onClick={() => setMenuOpen(false)}
              >
                Admin Panel
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
                type="search"
                placeholder="Search"
                className="form-control input-custom "
                onChange={(e) => setInput(e.target.value)}
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
