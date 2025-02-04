import React from "react";
import CartItems from "../Components/Cart/CartItems";
const cartarray = [1, 2, 3, 4];

function Cart() {
  return (
    <div className="container">
      <div className="p-5">
        <h2>
          <span style={{ color: "#6b7280" }}>YOUR</span> CART
        </h2>
      </div>
      {cartarray.map((item) => {
        return <CartItems key={item} />;
      })}
      <div className="row justify-content-end">
        <div className="col-12 col-md-6 col-lg-5 p-5 d-flex justify-content-center flex-column">
          <div>
            <h3>
              <span style={{ color: "#6b7280" }}>CART</span> TOTALS
            </h3>
          </div>
          <div className="d-flex mt-4 border-bottom">
            <h6>Subtotal</h6>
            <h6 className="ms-auto">$ 100</h6>
          </div>
          <div className="d-flex mt-4 border-bottom">
            <h6>Shipping Fee</h6>
            <h6 className="ms-auto">$ 100</h6>
          </div>
          <div className="d-flex mt-4 ">
            <h6 className="fw-bold">Total</h6>
            <h6 className="ms-auto">$ 200</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
