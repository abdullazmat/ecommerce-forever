import React from "react";
import RelatedCollectionCards from "./RelatedCollectionCards";

function RelatedCollections() {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="container mt-0 mt-md-5">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div>
          <h2 style={{ color: "#212529" }}>
            <span style={{ color: "#6b7280" }}>RELATED</span> PRODUCTS
          </h2>
        </div>
      </div>
      <div className="  mt-3 row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3 mb-0 mb-md-5">
        {cards.slice(0, 10).map((card) => (
          <RelatedCollectionCards key={card} />
        ))}
      </div>
    </div>
  );
}

export default RelatedCollections;
