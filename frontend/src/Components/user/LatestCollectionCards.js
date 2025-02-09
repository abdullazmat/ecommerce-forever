import React from "react";
import { useNavigate } from "react-router-dom";

function LatestCollectionCards({ product }) {
  const navigate = useNavigate();
  return (
    <div className="col">
      <div className="" onClick={() => navigate("/product")}>
        <img
          className="bd-placeholder-img card-img-top product-img"
          src={product?.images[0]?.url}
          role="img"
          alt="Product"
        />

        <div className="card-body">
          <p
            className="card-text mb-2 mt-3 product-name  "
            style={{ fontSize: "0.8rem" }}
          >
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

export default LatestCollectionCards;
