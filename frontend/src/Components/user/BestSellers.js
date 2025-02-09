import React from "react";
import BestSellersCards from "./BestSellersCards";
import { useSelector } from "react-redux";

function BestSellers() {
  const { allProducts } = useSelector((state) => state.product);

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div>
          <h2 style={{ color: "#212529" }}>BEST SELLERS</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="p-3 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
        {allProducts.slice(0, 5).map((product, index) => (
          <BestSellersCards key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
