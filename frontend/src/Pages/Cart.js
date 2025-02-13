import React from "react";
import CartItems from "../Components/Cart/CartItems";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Toast from "../Components/user/Toast";

function Cart() {
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [subTotal, setSubTotal] = useState(0);
  const shippingFee = 10;
  const [total, setTotal] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkCart = () => {
    if (cart.length === 0) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotal(total);
  }, [cart]);

  useEffect(() => {
    setTotal(subTotal + shippingFee);
  }, [subTotal]);

  return (
    <div className="container">
      {showToast && <Toast message="No Product Added" />}
      <div className="p-5">
        <h2>
          <span style={{ color: "#6b7280" }}>YOUR</span> CART
        </h2>
      </div>
      {!user ? (
        <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
          <h3 className="text-danger">Your cart is empty</h3>
        </div>
      ) : cart.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
          <h3 className="text-danger">Your cart is empty</h3>
        </div>
      ) : (
        cart.map((item) => <CartItems item={item} key={item?._id} />)
      )}

      <div className="row justify-content-end">
        <div className="col-12 col-md-6 col-lg-5 p-5 d-flex justify-content-center flex-column">
          <div>
            <h3>
              <span style={{ color: "#6b7280" }}>CART</span> TOTALS
            </h3>
          </div>
          <div className="d-flex mt-4 border-bottom">
            <h6>Subtotal</h6>
            <h6 className="ms-auto">$ {user ? subTotal : 0}</h6>
          </div>
          <div className="d-flex mt-4 border-bottom">
            <h6>Shipping Fee</h6>
            <h6 className="ms-auto">$ {shippingFee}</h6>
          </div>
          <div className="d-flex mt-4 ">
            <h6 className="fw-bold">Total</h6>
            <h6 className="ms-auto">$ {user ? total : 0}</h6>
          </div>
          <div className="mt-4 d-flex justify-content-end ">
            <button
              type="submit"
              className="btn btn-dark text-white w-100 w-md-50"
              style={{ borderRadius: "0" }}
              onClick={() => {
                if (checkCart()) {
                  navigate("/place-order");
                }
              }}
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
