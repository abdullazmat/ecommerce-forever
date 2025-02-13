import React, { useEffect } from "react";
import axios from "axios";
import { ORDER_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setGetUserOrders } from "../Redux/orderSlice";

const useGetUserOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const res = await axios.get(`${ORDER_API_END_POINT}/get`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        dispatch(setGetUserOrders(res.data.userOrders));
      } catch (err) {
        console.log(err);
      }
    };
    getUserOrders();
  }, []);
};

export default useGetUserOrders;
