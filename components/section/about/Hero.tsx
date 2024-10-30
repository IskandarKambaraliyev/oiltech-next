// "use client";

import Image from "next/image";

import { AboutApi } from "@/types";
import { PlayCircleIcon } from "@/components/Icons";
import { useTranslations } from "next-intl";
import HtmlWithModifiedImages from "@/components/custom/HtmlWithModifiedImages";

type Props = {
  data: AboutApi;
};

const AboutHero = ({ data }: Props) => {
  const t = useTranslations("About");
  if (data !== null) {
    return (
      <>
        <section className="relative">
          <Image
            src={data.picture}
            alt="Banner image"
            fill
            className="absolute inset-0 size-full object-cover"
          />

          <div className="container h-[80svh] min-h-fit relative py-20 flex-center">
            <a
              href={data.youtube_video}
              className="flex flex-col items-center gap-6 md:gap-8 group"
            >
              <PlayCircleIcon
                className="text-wgm
             size-[5.5rem] md:size-[7rem] group-hover:scale-105 group-active:scale-95 transition"
              />

              <div className="text-blue-main py-2 px-6 bg-white-main text-lg md:text-2xl font-semibold text-center transition">
                {t("watch_video")}
              </div>
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <HtmlWithModifiedImages
              data={data.description}
              className="max-w-[50rem] lg:max-w-[65rem] text-2xl lg:text-[2rem] leading-tight"
            />
          </div>
        </section>
      </>
    );
  }
};

export default AboutHero;
