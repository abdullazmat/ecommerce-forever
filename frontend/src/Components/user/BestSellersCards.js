import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function BestSellersCards() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={assets.p_img2_1}
          role="img"
        />
        <title>Placeholder</title>

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
