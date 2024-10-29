"use client";

import { useTranslations } from "next-intl";

import CustomSectionTitle from "../../custom/SectionTitle";
import CustomTitle from "../../custom/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CardTeam from "../../cards/Team";

import { TeamApi } from "@/types";

type Props = {
  data: TeamApi;
};
const HomeTeam = ({ data }: Props) => {
  const t = useTranslations();

  if (data !== null && data.length > 0) {
    return (
      <section className="py-20">
        <div className="container">
          <CustomSectionTitle>{t("our_team")}</CustomSectionTitle>
          <CustomTitle className="mb-8">{t("team_title")}</CustomTitle>

          <div className="">
            <Swiper
              loop
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 50000,
                disableOnInteraction: true,
              }}
              spaceBetween={16}
              slidesPerView={2.2}
              breakpoints={{
                768: {
                  slidesPerView: 3.25,
                },
                1024: {
                  slidesPerView: 4.3,
                },
                1400: {
                  slidesPerView: 5.4,
                },
                1700: {
                  slidesPerView: 6.4,
                },
              }}
              className="team_swiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="!h-[unset] select-none">
                  <CardTeam item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default HomeTeam;
