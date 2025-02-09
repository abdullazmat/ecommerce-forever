import React, { useEffect } from "react";
import axios from "axios";
import { PRODUCT_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setProductData } from "../Redux/productSlice";

const useGetProductData = ({ id, setLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${PRODUCT_API_END_POINT}/get/${id}`, {});

        dispatch(setProductData(res.data.product));
        console.log("Hook Called");
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, [id, setLoading]);
};

export default useGetProductData;
