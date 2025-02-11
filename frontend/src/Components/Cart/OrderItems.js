import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function OrderItems({ product, paymethod, createdAt, status }) {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="border-top border-bottom d-flex flex-wrap">
      <div className="d-flex flex-wrap col-12 col-md-6">
        <div className="d-flex align-items-center col-3  ">
          <img
            src={product?.image}
            style={{ width: "70px" }}
            alt="product"
            className="img-fluid"
          />
        </div>

        <div className="d-flex flex-column py-2 col-9 justify-content-start">
          <div className="">
            <h5 className="fs-orderitem col-12">{product?.name}</h5>
            <div className="d-flex align-items-center  ">
              <p className="fs-orderitem">${product?.price}</p>
              <p className="px-3 fs-orderitem">
                Quantity : {product?.quantity}
              </p>
              <p className="px-3 fs-orderitem ">Size : {product?.size}</p>
            </div>
            <div className="d-flex align-items-center ">
              <p className="fw-bold fs-orderitem">Date:</p>
              <p className="px-3 fs-orderitem ">{createdAt}</p>
            </div>
            <div className="d-flex align-items-center ">
              <p className="fw-bold fs-orderitem">Payment:</p>
              <p className="px-3 fs-orderitem ">{paymethod.toUpperCase()}</p>
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
          <p className=" ms-3 ms-md-2">{status}</p>
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
