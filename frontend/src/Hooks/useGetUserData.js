import React, { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/authSlice";

const useGetUserData = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      if (!id) return; // Prevent API call if id is null
      try {
        const res = await axios.get(`${USER_API_END_POINT}/${id}`);
        dispatch(setUser(res.data.user));
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [id]); // Now runs whenever id changes
};

export default useGetUserData;
