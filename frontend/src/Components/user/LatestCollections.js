import React from "react";
import LatestCollectionCards from "./LatestCollectionCards";

function LatestCollections() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
        {cards.slice(0, 10).map((card) => (
          <LatestCollectionCards key={card} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
