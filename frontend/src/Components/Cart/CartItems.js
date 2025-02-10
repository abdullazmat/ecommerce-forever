import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CART_API_END_POINT } from "../../Utils/constant";
import { setAllCartItems } from "../../Redux/cartSlice";
import useGetAllCartItems from "../../Hooks/useGetCartItems";
import { useEffect } from "react";

function CartItems({ item }) {
  const [count, setCount] = useState(item?.quantity);
  const { cart } = useSelector((state) => state.cart);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useGetAllCartItems(cart.length);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${CART_API_END_POINT}/delete/${id}`);
      const updatedItems = cart.filter((item) => item._id !== id);
      dispatch(setAllCartItems(updatedItems));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateItem = async () => {
      try {
        const response = await axios.put(
          `${CART_API_END_POINT}/update/${item._id}`,
          {
            quantity: count,
          }
        );

        // Get the updated cart items from the API
        const { data } = await axios.get(`${CART_API_END_POINT}/get`);

        // Dispatch the updated cart to Redux
        dispatch(setAllCartItems(data.allcartItems));
      } catch (error) {
        console.log(error);
      }
    };

    updateItem();
  }, [count, dispatch, item._id]);

  return (
    <div className="border-top border-bottom d-flex">
      <div className="d-flex w-50">
        <div className="d-flex align-items-center">
          <img
            src={item?.images}
            style={{ width: "70px" }}
            alt="product"
            className="img-fluid"
          />
        </div>

        <div className="d-flex flex-column justify-content-between p-3">
          <div className="ms-0 ms-md-3">
            <h5 className="fs-cartitem">Kid Tapered Slim Fit Trouser</h5>
            <div className="d-flex align-items-center ">
              <p>${item?.price}</p>
              <p
                className="px-3 ms-4"
                style={{
                  backgroundColor: "#374151",
                  opacity: "0.6",
                  color: "white",
                  borderRadius: "0",
                }}
              >
                {item?.size[0]}
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
          <FontAwesomeIcon
            icon={faTrashCan}
            className="fa-lg text-danger"
            onClick={() => deleteItem(item?._id)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
