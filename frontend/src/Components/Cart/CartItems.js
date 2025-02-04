import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CartItems() {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="border-top border-bottom d-flex">
      <div className="d-flex w-50">
        <div className="d-flex align-items-center">
          <img
            src={assets.p_img2_1}
            style={{ width: "70px" }}
            alt="product"
            className="img-fluid"
          />
        </div>

        <div className="d-flex flex-column justify-content-between p-3">
          <div className="ms-0 ms-md-3">
            <h5 className="fs-cartitem">Kid Tapered Slim Fit Trouser</h5>
            <div className="d-flex align-items-center ">
              <p>$100</p>
              <p
                className="px-3 ms-3"
                style={{
                  backgroundColor: "#374151",
                  opacity: "0.6",
                  color: "white",
                  borderRadius: "0",
                }}
              >
                XL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-50 justify-content-around">
        <div className="d-flex align-items-center justify-content-center">
          <input
            type="number"
            className="form-control ms-3 ms-md-0"
            step="1"
            min="1"
            max="100"
            value={count}
            onChange={handleChange}
            style={{
              outline: "none",
              boxShadow: "none",
              border: "1px solid #374151",
              borderRadius: "0",
            }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center ms-3 ms-md-0">
          <FontAwesomeIcon icon={faTrashCan} className="fa-lg" />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
