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
      {slides && slides.length > 0 && <HomeHero data={slides} />}

      <HomeQuote />

      {services && services.length > 0 && <HomeServices data={services} />}

      {statistics && statistics.length > 0 && (
        <HomeAdvantages data={statistics} />
      )}

      {about && <HomeAbout data={about} />}

      {team && team.length > 0 && <HomeTeam data={team} />}

      {blog && blog.results.length > 0 && <HomeBlog data={blog.results} />}
    </>
  );
}
