import CardTeam from "@/components/cards/Team";
import CustomSectionTitle from "@/components/custom/SectionTitle";
import CustomTitle from "@/components/custom/Title";
import { TeamApi } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  data: TeamApi;
};
const AboutTeam = ({ data }: Props) => {
  const t = useTranslations();
  return (
    <section className="pb-20">
      <div className="container space-y-8 relative">
        <div>
          <CustomSectionTitle>{t("our_team")}</CustomSectionTitle>
          <CustomTitle>{t("team_title")}</CustomTitle>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((item) => (
            <CardTeam key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
