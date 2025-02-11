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
        const res = await axios.get(`${ORDER_API_END_POINT}/get`, {});

        dispatch(setGetAllOrders(res.data.allOrders));
        console.log(" All Orders Hook Called");
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);
};

export default useGetAllOrders;
