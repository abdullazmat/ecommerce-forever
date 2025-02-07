import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function BestSellersCards() {
  return (
    <div className="col ">
      <div className="card shadow-sm " style={{ overflow: "hidden" }}>
        <img
          className="bd-placeholder-img card-img-top product-img"
          src={assets.p_img2_1}
          role="img"
        />

        <div className="card-body">
          <p className="card-text">Kid Straped Trouser</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary">$ 100</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellersCards;
