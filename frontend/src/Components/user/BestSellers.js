import React, { useEffect } from "react";
import BestSellersCards from "./BestSellersCards";
import { useSelector } from "react-redux";
import useGetAllProducts from "../../Hooks/useGetAllProducts";

function BestSellers() {
  useGetAllProducts();
  const { allProducts } = useSelector((state) => state.product);
  const [bestProducts, setBestProducts] = React.useState([]);

  useEffect(() => {
    allProducts.map((product) => {
      if (product?.bestSeller) {
        setBestProducts((prev) => [...prev, product]);
      }
    });
  }, [allProducts]);

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
        {bestProducts.slice(0, 5).map((product, index) => (
          <BestSellersCards key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
