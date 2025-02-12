import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { ORDER_API_END_POINT } from "../../Utils/constant";
import { addOrder } from "../../Redux/orderSlice";
import useDeleteAllCart from "../../Hooks/useDeleteAllCart";
import Toast from "../user/Toast";

function PlaceOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order.orders) || [];
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [subTotal, setSubTotal] = useState(0);
  const shippingFee = 10;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotal(total);
  }, [cart]);

  const deleteAllCart = useDeleteAllCart();

  useEffect(() => {
    setTotal(subTotal + shippingFee);
  }, [subTotal]);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    if (paymentMethod === "stripe" || paymentMethod === "razorpay") {
      setPaymentStatus("Completed");
    } else {
      setPaymentStatus("Pending");
    }
  }, [paymentMethod]);

  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    total: total,
    status: "Order Placed",
    paymethod: paymentMethod,
    payment: "Pending",
    productinfo: cart.map((item) => ({
      name: item.productName,
      quantity: item.quantity,
      size: item.size[0],
      price: item.price,
      image: item.images,
    })),
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      total: total,
    }));
  }, [total]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (paymentMethod === "stripe" || paymentMethod === "razorpay") {
        setToastMessage("Payment gateway Not available");
        setTimeout(() => {
          setToastMessage("");
        }, 5000);
        return;
      }

      const formObject = new FormData();
      formObject.append("fName", formData.fName);
      formObject.append("lName", formData.lName);
      formObject.append("email", formData.email);
      formObject.append("street", formData.street);
      formObject.append("city", formData.city);
      formObject.append("state", formData.state);
      formObject.append("zipcode", formData.zipcode);
      formObject.append("country", formData.country);
      formObject.append("phone", formData.phone);
      formObject.append("total", formData.total);
      formObject.append("status", formData.status);
      formObject.append("paymethod", formData.paymethod);
      formObject.append("payment", formData.payment);
      formObject.append("productinfo", JSON.stringify(formData.productinfo));

      const response = await axios.post(
        `${ORDER_API_END_POINT}/add`,
        formObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(addOrder([...orders, response.data.order]));
      await deleteAllCart();
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex flex-wrap">
      {toastMessage && <Toast message={toastMessage} />}
      <div className="p-0 p-md-2 p-lg-5 col-12 col-md-6 mt-5 mt-md-2">
        <h2>
          <span style={{ color: "#6b7280", fontFamily: "Outfit" }}>
            Delivery
          </span>{" "}
          Information
        </h2>
        <form id="orderForm" onSubmit={handleSubmit}>
          <div className="row mt-5">
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  name="fName"
                  required
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  name="lName"
                  required
                  placeholder="Last Name"
                  onChange={handleChange}
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
                  required
                  placeholder="Email address"
                  onChange={handleChange}
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
                  required
                  placeholder="Street"
                  onChange={handleChange}
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
                  required
                  placeholder="City"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  required
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="zipcode"
                  required
                  name="zipcode"
                  placeholder="Zip Code"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  required
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
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
                  required
                  placeholder="Phone Number"
                  onChange={handleChange}
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
          <h6 className="ms-auto">$ {subTotal}</h6>
        </div>
        <div className="d-flex mt-2 border-bottom">
          <h6>Shipping Fee</h6>
          <h6 className="ms-auto">$ {shippingFee}</h6>
        </div>
        <div className="d-flex mt-2 ">
          <h6 className="fw-bold">Total</h6>
          <h6 className="ms-auto">$ {total}</h6>
        </div>
        <div className="mt-4">
          <p className="fw-bold fs-6">
            <span style={{ color: "#6b7280" }}>Payment</span> Method{" "}
          </p>
          <div className="d-flex justify-content-center flex-wrap mb-5">
            <div className="d-flex align-items-center  px-4 py-2 border col-12 col-md-4">
              <div>
                <input
                  type="radio"
                  id="stripe"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
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
                  checked={paymentMethod === "razorpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
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
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
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
            form="orderForm"
            type="submit"
            className="btn btn-dark text-white w-100 w-md-50"
            style={{ borderRadius: "0" }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
