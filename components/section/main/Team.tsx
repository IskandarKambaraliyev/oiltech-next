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
import { MoveLeft, MoveRight } from "lucide-react";

type Props = {
  data: TeamApi;
};
const HomeTeam = ({ data }: Props) => {
  const t = useTranslations();

  if (data !== null && data.length > 0) {
    return (
      <section className="py-20">
        <div className="container relative">
          <CustomSectionTitle>{t("our_team")}</CustomSectionTitle>
          <CustomTitle className="mb-8">{t("team_title")}</CustomTitle>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 50000,
              disableOnInteraction: true,
            }}
            spaceBetween={16}
            slidesPerView={1.3}
            breakpoints={{
              768: {
                slidesPerView: 2.6,
              },
              1024: {
                slidesPerView: 3.6,
              },
              1400: {
                slidesPerView: 4.6,
              },
              1700: {
                slidesPerView: 5.6,
              },
            }}
            navigation={{
              prevEl: ".team_swiper_prev",
              nextEl: ".team_swiper_next",
            }}
            className="team_swiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="!h-[unset] select-none">
                <CardTeam item={item} />
              </SwiperSlide>
            ))}

            <button className="team_swiper_prev custom_swiper_navigation left-2">
              <MoveLeft />
            </button>
            <button className="team_swiper_next custom_swiper_navigation right-2">
              <MoveRight />
            </button>
          </Swiper>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default HomeTeam;
