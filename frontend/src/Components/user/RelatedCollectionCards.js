import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

function RelatedCollectionCards() {
  const navigate = useNavigate();
  return (
    <div className="col-12">
      <div
        className="product-card "
        // style={{ width: "100%", height: "400px", overflow: "hidden" }} // Added overflow: hidden
        onClick={() => navigate("/product")}
      >
        <img
          className="bd-placeholder-img card-img-top product-img"
          // width="100%"
          // height="300"
          src={assets.p_img1}
          role="img"
          alt="Product"
        />

        <div className="card-body">
          <p className="card-text ms-0 ms-sm-3 mt-3">Kid Straped Trouser</p>
          <div className="d-flex  justify-content-between align-items-center">
            <small className="text-body-secondary ms-0 ms-sm-3 fw-bold">
              $ 100
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedCollectionCards;
