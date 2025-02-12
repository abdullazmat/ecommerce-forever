import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Components/user/HeroSection";
import LatestCollections from "../Components/user/LatestCollections";
import BestSellers from "../Components/user/BestSellers";
import Features from "../Components/user/Features";
import SubscribeForm from "../Components/user/SubscribeForm";
import useGetUserData from "../Hooks/useGetUserData";

function Home() {
  const { user } = useSelector((state) => state.auth);
  useGetUserData(user?._id);
  return (
    <div>
      <HeroSection />
      <LatestCollections />
      <BestSellers />
      <Features />
      <SubscribeForm />
    </div>
  );
}

export default Home;
