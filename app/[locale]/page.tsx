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
import {
  AboutApi,
  AdvantegesApi,
  BlogApi,
  BlogResults,
  ServicesApi,
  SlidesApi,
  TeamApi,
} from "@/types";
import useFetchData from "../hooks/useFetchData";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const slides = await useFetchData<SlidesApi>("/slides", locale);
  const statistics = await useFetchData<AdvantegesApi>("/statistic", locale);
  const about = await useFetchData<AboutApi>("/about_company", locale);
  const team = await useFetchData<TeamApi>("/team", locale);
  const blog = await useFetchData<BlogApi>("/blogs/?page_size=3", locale);
  const services = await useFetchData<ServicesApi>("/services", locale);
  return (
    <>
      <HomeHero data={slides} />
      <HomeQuote />
      <HomeServices data={services} />
      <HomeAdvantages data={statistics} />
      <HomeAbout data={about} />
      <HomeTeam data={team} />
      <HomeBlog data={blog.results} />
    </>
  );
}
