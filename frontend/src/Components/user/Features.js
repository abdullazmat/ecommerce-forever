import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function Features() {
  return (
    <div className="container mt-5 py-0 py-md-3">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
          <div>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="fa-3x" />
          </div>
          <div className="mt-2 fw-bold">
            <p>Easy Exchange Policy</p>
          </div>
          <div className="mt-2">
            <p>We offer hassle-free exchange policy</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
          <div>
            <FontAwesomeIcon icon={faCircleCheck} className="fa-3x" />
          </div>
          <div className="mt-2 fw-bold">
            <p>Trusted Quality</p>
          </div>
          <div className="mt-2">
            <p>Our products are certified and verified</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 offset-md-3 offset-lg-0 col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
          <div>
            <FontAwesomeIcon icon={faHeadphonesSimple} className="fa-3x" />
          </div>
          <div className="mt-2 fw-bold">
            <p>Customer Support</p>
          </div>
          <div className="mt-2">
            <p>We provide 24/7 customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
