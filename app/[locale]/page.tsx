import React from "react";
import {
  HomeAbout,
  HomeAdvantages,
  HomeBlog,
  HomeHero,
  HomeQuote,
  HomeServices,
  HomeTeam,
} from "../../components/section/main";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeQuote />
      <HomeServices />
      <HomeAdvantages />
      <HomeAbout />
      <HomeTeam />
      <HomeBlog />
    </>
  );
};

export default HomePage;
