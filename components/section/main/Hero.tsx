"use client";

import { useTranslations } from "next-intl";

import CustomTitle from "../../custom/Title";
import { CustomButton } from "../../custom/buttons";

import { PlayIcon } from "../../Icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SlidesApi } from "@/types";
import Image from "next/image";

type Props = {
  data: SlidesApi;
};

const HomeHero = ({ data }: Props) => {
  const t = useTranslations("Home");

  if (data !== null && data.length > 0) {
    return (
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero_swiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-fit relative">
            <Image
              src={item.image}
              alt={`Slide image of ${item.title}`}
              width={1920}
              height={1080}
              fill={false}
              style={{ objectFit: "cover" }}
              className="absolute size-full"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.2) 100%),linear-gradient(180deg,rgba(0, 0, 0, 0.7) -14.26%,rgba(0, 0, 0, 0) 20.69%,rgba(0, 0, 0, 0.03) 41.66%,rgba(0, 0, 0, 0.7) 111.55%)",
              }}
            />

            <div className="w-full h-svh min-h-fit relative container flex flex-col gap-6 justify-end py-20 text-white-main">
              <div className="flex flex-col gap-2">
                <CustomTitle className="max-w-[60rem]">
                  {item.title}
                </CustomTitle>

                <p className="text-sm lg:text-xl max-w-[45rem] line-clamp-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {item.button_link && (
                  <CustomButton href={item.button_link}>
                    {item.button_text}
                  </CustomButton>
                )}

                {item.youtube_link && (
                  <a
                    href={item.youtube_link}
                    target="_blank"
                    className="flex items-center group gap-4 overflow-hidden"
                  >
                    <div className="size-14 shrink-0 flex-center border border-white-main group-hover:bg-white-main text-white-main group-hover:text-blue-main rounded-full transition">
                      <PlayIcon className="ml-1" />
                    </div>

                    <span className="flex-1 truncate">{t("watch_video")}</span>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    return (
      <div className="w-full h-screen min-h-[20rem] bg-black/50 animate-pulse"></div>
    );
  }
};

export default HomeHero;
