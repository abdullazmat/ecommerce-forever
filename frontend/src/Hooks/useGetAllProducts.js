import React, { useEffect } from "react";
import axios from "axios";
import { PRODUCT_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../Redux/productSlice";

const useGetAllProducts = (dependency) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`${PRODUCT_API_END_POINT}/get`, {});

        dispatch(setAllProducts(res.data.products));
        console.log("Hook Called");
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, [dependency]);
};

export default useGetAllProducts;
