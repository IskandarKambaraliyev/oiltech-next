import React from "react";
import { HomeHero, HomeQuote, HomeServices } from "../components/section/main";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeQuote />
      <HomeServices />
      <div className="w-full h-screen"></div>
    </>
  );
};

export default HomePage;
