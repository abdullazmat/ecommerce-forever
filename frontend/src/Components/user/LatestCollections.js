import React from "react";
import LatestCollectionCards from "./LatestCollectionCards";
import { useSelector } from "react-redux";

function LatestCollections() {
  const { allProducts } = useSelector((state) => state.product);

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div>
          <h2 style={{ color: "#212529" }}>LATEST COLLECTIONS</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="p-3 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condiment
          </p>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3 mb-5">
        {allProducts.slice(0, 10).map((product, index) => (
          <LatestCollectionCards key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
