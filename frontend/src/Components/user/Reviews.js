import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Reviews() {
  return (
    <div className="d-flex ">
      <div>
        <p>"Awesome Product</p>
      </div>
      <div className="d-flex">
        <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
        <FontAwesomeIcon icon={faStarHalf} style={{ color: "#FF532E" }} />
      </div>
      <div> 12-Feb-2025</div>
    </div>
  );
}

export default Reviews;
