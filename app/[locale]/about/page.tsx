import useFetchData from "@/app/hooks/useFetchData";
import AboutHero from "@/components/section/about/Hero";
import AboutTeam from "@/components/section/about/Team";
import { AboutApi, TeamApi } from "@/types";
import React from "react";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const about = await useFetchData<AboutApi>("/about_company", locale);
  const team = await useFetchData<TeamApi>("/team", locale);
  return (
    <>
      <AboutHero data={about} />
      <AboutTeam data={team} />
    </>
  );
}
