import React from "react";
import {
  HomeAbout,
  HomeAdvantages,
  HomeHero,
  HomeQuote,
  HomeServices,
} from "../components/section/main";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeQuote />
      <HomeServices />
      <HomeAdvantages />
      <HomeAbout />

      <div className="w-full h-screen"></div>
    </>
  );
};

export default HomePage;
