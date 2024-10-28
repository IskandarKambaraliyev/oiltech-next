"use client";

import useApiRoute from "@/app/hooks/useApiRoute";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import CustomSectionTitle from "../../custom/SectionTitle";
import { Link } from "@/i18n/routing";

type AboutApi = {
  id: number;
  description: string;
  youtube_video: string;
  picture: string;
};

const HomeAbout = () => {
  const locale = useLocale();
  const t = useTranslations("Home");

  const [data, setData] = useState<AboutApi | null>(null);
  useEffect(() => {
    async function fetchData() {
      const res = (await fetch(useApiRoute("/about_company", locale), {
        cache: "default",
        next: {
          revalidate: 60,
        },
      }).then((res) => res.json())) as AboutApi;
      setData(res);
    }
    fetchData();
  }, []);

  if (data !== null) {
    return (
      <section className="relative">
        <img
          src={data.picture}
          alt="Image"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#01426A4D]"></div>
        <div className="container relative h-screen min-h-fit py-4 flex flex-col justify-end">
          <div className="sticky bottom-4 left-0 flex flex-col gap-4">
            <Link href="/about" className="group">
              <CustomSectionTitle className="py-2 px-6 bg-white text-blue-main w-fit group-hover:bg-green-main group-hover:text-white-main transition">
                {t("about")}
              </CustomSectionTitle>
            </Link>

            <div
              className="p-4 lg:p-6 bg-green-main max-w-[40rem] text-xl line-clamp-[10]"
              dangerouslySetInnerHTML={{
                __html: data.description.replace(/<img[^>]*>/g, ""),
              }}
            ></div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default HomeAbout;
