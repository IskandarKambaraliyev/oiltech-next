import useFetchData from "@/app/hooks/useFetchData";
import AboutHero from "@/components/section/about/Hero";
import AboutTeam from "@/components/section/about/Team";
import { AboutApi, TeamApi } from "@/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Seo");

  return {
    title: t("about_title"),
  };
}

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
