import React from "react";
import RelatedCollectionCards from "./RelatedCollectionCards";
import { useSelector } from "react-redux";

function RelatedCollections() {
  const { allProducts } = useSelector((state) => state.product);

  return (
    <div className="container mt-3 mt-md-5">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div>
          <h2 style={{ color: "#212529" }}>
            <span style={{ color: "#6b7280" }}>RELATED</span> PRODUCTS
          </h2>
        </div>
      </div>
      <div className="  mt-3 row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3 mb-0 mb-md-5">
        {allProducts.slice(0, 5).map((product) => (
          <RelatedCollectionCards key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedCollections;
