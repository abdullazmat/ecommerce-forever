import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function LatestCollectionCards() {
  return (
    <div className="col">
      <div className=" " style={{ width: "100%", height: "370px" }}>
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="300"
          src={assets.p_img1}
          role="img"
        />
        <title>Placeholder</title>

        <div className="card-body">
          <p className="card-text ms-3">Kid Straped Trouser</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary ms-3 fw-bold">$ 100</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCollectionCards;
