import React, { useEffect } from "react";
import axios from "axios";
import { ORDER_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setGetAllOrders } from "../Redux/orderSlice";

const useGetAllOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await axios.get(`${ORDER_API_END_POINT}/get`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        dispatch(setGetAllOrders(res.data.allOrders));
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);
};

export default useGetAllOrders;
