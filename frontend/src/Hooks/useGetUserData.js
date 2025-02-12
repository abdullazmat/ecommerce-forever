import React, { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/authSlice";

const useGetUserData = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/${id}`, {});

        dispatch(setUser(res.data.user));
        console.log(" Get User Data Hook Called");
        console.log(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);
};

export default useGetUserData;
