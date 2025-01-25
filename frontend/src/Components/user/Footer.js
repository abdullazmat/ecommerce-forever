import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { assets } from "../../../src/assets/frontend_assets/assets";

function Footer() {
  return (
    <>
      <div classNameName="border-top w-100"></div>
      <div classNameName="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 d-flex justify-content-around p-3 my-5 ">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img src={assets.logo} alt="logo" style={{ width: "100px" }} />
            </a>
            <p className="text-body-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="col mb-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Delivery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>GET IN TOUCH</h5>
            <ul className="nav flex-column">
              <li className="nav-item  ">
                <p href="#" className="nav-link p-0 mb-2 text-body-secondary">
                  +1-000-000-0000
                </p>
              </li>
              <li className="nav-item ">
                <p href="#" className="nav-link p-0 mb-2 text-body-secondary">
                  greatstackdev@gmail.com
                </p>
              </li>
              <li className="nav-item ">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="nav-link p-0 mb-2 text-body-secondary"
                >
                  Instagram
                </a>
              </li>
              <li className="nav-item ">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="nav-link p-0 mb-2 text-body-secondary"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
