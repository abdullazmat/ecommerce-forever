import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function OrderItems() {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="border-top border-bottom d-flex flex-wrap">
      <div className="d-flex flex-wrap col-12 col-md-6">
        <div className="d-flex align-items-center col-3  ">
          <img
            src={assets.p_img2_1}
            style={{ width: "70px" }}
            alt="product"
            className="img-fluid"
          />
        </div>

        <div className="d-flex flex-column py-2 col-9 justify-content-start">
          <div className="">
            <h5 className="fs-orderitem col-12">
              Kid Tapered Slim Fit Trouser
            </h5>
            <div className="d-flex align-items-center  ">
              <p className="fs-orderitem">$100</p>
              <p className="px-3 fs-orderitem">Quantity : {2}</p>
              <p className="px-3 fs-orderitem ">Size : {"M"}</p>
            </div>
            <div className="d-flex align-items-center ">
              <p className="fw-bold fs-orderitem">Date:</p>
              <p className="px-3 fs-orderitem ">{"5 Feb 2025"}</p>
            </div>
            <div className="d-flex align-items-center ">
              <p className="fw-bold fs-orderitem">Payment:</p>
              <p className="px-3 fs-orderitem ">{"COD"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex col-12 col-md-6 flex-wrap ">
        <div className="d-flex align-items-center col-6  justify-content-center">
          <p
            className="rounded-circle bg-success"
            style={{ width: "10px", height: "10px" }}
          ></p>
          <p className=" ms-3 ms-md-2">Order Placed</p>
        </div>
        <div className="d-flex col-6 align-items-center justify-content-center ">
          <p className="px-3 py-2 border " style={{ fontWeight: "400" }}>
            Track Order
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
