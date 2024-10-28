import React from "react";
import {
  HomeAbout,
  HomeAdvantages,
  HomeHero,
  HomeQuote,
  HomeServices,
  HomeTeam,
} from "../components/section/main";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeQuote />
      <HomeServices />
      <HomeAdvantages />
      <HomeAbout />
      <HomeTeam />

      <div className="w-full h-screen"></div>
    </>
  );
};

export default HomePage;
