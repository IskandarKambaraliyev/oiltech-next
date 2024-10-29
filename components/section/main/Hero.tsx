"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import useApiRoute from "@/app/hooks/useApiRoute";

import CustomTitle from "../../custom/Title";
import { CustomButton } from "../../custom/buttons";

import { PlayIcon } from "../../Icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type SlidesApi = {
  id: number;
  title: string;
  image: string;
  description: string | null;
  button_text: string | null;
  button_link: string | null;
  youtube_link: string | null;
}[];

const HomeHero = () => {
  const locale = useLocale();
  const t = useTranslations("Home");

  const [data, setData] = useState<SlidesApi>([]);
  useEffect(() => {
    async function fetchData() {
      const res = (await fetch(useApiRoute("/slides", locale), {
        cache: "default",
        next: {
          revalidate: 60,
        },
      }).then((res) => res.json())) as SlidesApi;
      setData(res);
    }
    fetchData();
  }, []);
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
            <img
              src={item.image}
              alt={`Slide image for - ${item.title}`}
              className="absolute size-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.2) 100%),linear-gradient(180deg,rgba(0, 0, 0, 0.7) -14.26%,rgba(0, 0, 0, 0) 20.69%,rgba(0, 0, 0, 0.03) 41.66%,rgba(0, 0, 0, 0.7) 111.55%)",
              }}
            />

            <div className="w-full !h-screen min-h-fit relative container flex flex-col gap-6 justify-end py-20">
              <div className="flex flex-col gap-2">
                <CustomTitle className="max-w-[60rem]">
                  {item.title}
                </CustomTitle>

                <p className="text-base lg:text-xl max-w-[45rem] line-clamp-4">
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
