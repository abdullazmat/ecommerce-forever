import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

function PlaceOrder() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex flex-wrap">
      <div className="p-0 p-md-2 p-lg-5 col-12 col-md-6 mt-5 mt-md-2">
        <h2>
          <span style={{ color: "#6b7280", fontFamily: "Outfit" }}>
            Delivery
          </span>{" "}
          Information
        </h2>
        <form>
          <div className="row mt-5">
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-12 ">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="col-12 ">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                  placeholder="Street"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="col-12 ">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-6 p-1 p-md-2 p-lg-5 mt-3 mt-md-5">
        <div className="mt-0 mt-md-5 mb-2 mb-md-4">
          <h3>
            <span style={{ color: "#6b7280" }}>CART</span> TOTALS
          </h3>
        </div>
        <div className="d-flex mt-4 mt-md-2 border-bottom">
          <h6>Subtotal</h6>
          <h6 className="ms-auto">$ 100</h6>
        </div>
        <div className="d-flex mt-2 border-bottom">
          <h6>Shipping Fee</h6>
          <h6 className="ms-auto">$ 100</h6>
        </div>
        <div className="d-flex mt-2 ">
          <h6 className="fw-bold">Total</h6>
          <h6 className="ms-auto">$ 200</h6>
        </div>
        <div className="mt-4">
          <p className="fw-bold fs-6">
            <span style={{ color: "#6b7280" }}>Payment</span> Method{" "}
          </p>
          <div className="d-flex justify-content-center flex-wrap mb-5">
            <div className="d-flex align-items-center  px-4 py-2 border col-12 col-md-4">
              <div>
                <input type="radio" id="stripe" name="payment" value="stripe" />
              </div>
              <div className="ms-4">
                <img
                  src={assets.stripe_logo}
                  className="img-fluid"
                  width={60}
                />
              </div>
            </div>
            <div className="d-flex align-items-center  px-4 py-2 border col-12 col-md-4">
              <div>
                <input
                  type="radio"
                  id="razorpay"
                  name="payment"
                  value="razorpay"
                />
              </div>
              <div className="ms-4">
                <img
                  src={assets.razorpay_logo}
                  className="img-fluid"
                  width={60}
                />
              </div>
            </div>
            <div className="d-flex align-items-center  px-4 py-2 border col-12 col-md-4">
              <div>
                <input type="radio" id="cod" name="payment" value="cod" />
              </div>
              <div className="ms-4">
                <img
                  src={assets.cash_on_delivery}
                  className="img-fluid"
                  width={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2  d-flex justify-content-end ">
          <button
            type="submit"
            className="btn btn-dark text-white w-100 w-md-50"
            style={{ borderRadius: "0" }}
            onClick={() => navigate("/orders")}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
