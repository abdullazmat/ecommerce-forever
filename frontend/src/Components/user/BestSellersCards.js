import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function BestSellersCards({ product }) {
  return (
    <div className="col ">
      <div className="card shadow-sm " style={{ overflow: "hidden" }}>
        <img
          className="bd-placeholder-img card-img-top product-img"
          src={product?.images[0]?.url}
          role="img"
        />

        <div className="card-body">
          <p
            className="card-text mb-2  product-name"
            style={{ fontSize: "0.8rem" }}
          >
            {" "}
            {product?.productName}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary fw-bold">
              ${product?.price}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellersCards;
