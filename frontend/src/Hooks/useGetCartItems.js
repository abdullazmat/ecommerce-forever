import React, { useEffect } from "react";
import axios from "axios";
import { CART_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setAllCartItems } from "../Redux/cartSlice";

const useGetAllCartItems = (cartLength) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const res = await axios.get(`${CART_API_END_POINT}/get`, {
          withCredentials: true,
        });

        dispatch(setAllCartItems(res.data.allcartItems));
      } catch (err) {
        console.log(err);
      }
    };
    getAllCartItems();
  }, [cartLength]);
};

export default useGetAllCartItems;
