import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

function BestSellersCards({ product }) {
  const navigate = useNavigate();
  return (
    <div className="col ">
      <div
        className="card shadow-sm "
        onClick={() => navigate(`/product/${product?._id}`)}
      >
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
