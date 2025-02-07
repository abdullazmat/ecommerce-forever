import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

function LatestCollectionCards() {
  const navigate = useNavigate();
  return (
    <div className="col">
      <div className="" onClick={() => navigate("/product")}>
        <img
          className="bd-placeholder-img card-img-top product-img"
          src={assets.p_img1}
          role="img"
          alt="Product"
        />
        <title>Placeholder</title>

        <div className="card-body">
          <p className="card-text ms-3  mt-3">Kid Straped Trouser</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary ms-3 fw-bold">$ 100</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCollectionCards;
