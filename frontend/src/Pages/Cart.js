import React from "react";
import CartItems from "../Components/Cart/CartItems";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cartarray = [1, 2, 3, 4];

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
          <div className="mt-4 d-flex justify-content-end ">
            <button
              type="submit"
              className="btn btn-dark text-white w-100 w-md-50"
              style={{ borderRadius: "0" }}
              onClick={() => navigate("/place-order")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
