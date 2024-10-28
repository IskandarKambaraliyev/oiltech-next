"use client";

import React from "react";
import CustomSectionTitle from "../custom/SectionTitle";
import { useTranslations } from "next-intl";
import CustomTitle from "../custom/Title";
import { useData } from "@/app/context/DataContext";
import {
  FacebookOutlinedIcon,
  GlobeIcon,
  InstagramOutlinedIcon,
  LinkedinOutlinedIcon,
  MailICon,
  NavigationIcon,
  PhoneICon,
  TelegramOutlinedIcon,
  TimerIcon,
  WhatsappOutlinedIcon,
} from "../Icons";

const Footer = () => {
  const t = useTranslations("Footer");
  const { data } = useData();
  if (data === null && data === undefined) return null;
  return (
    <footer id="contacts" className="pt-12 pb-6 bg-blue-main text-white">
      <div className="container">
        <div className="">
          <CustomSectionTitle>{t("title")}</CustomSectionTitle>
          <CustomTitle>{t("contacts")}</CustomTitle>
        </div>

        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;

function FooterLinks() {
  const t = useTranslations("Footer");
  const { data } = useData();

  if (data !== null) {
    return (
      <div className="flex items-start flex-wrap gap-x-16 gap-y-12">
        <div className="min-w-[15rem] flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <NavigationIcon className="size-6" />
            <span>{t("address")}</span>
          </div>

          <a
            href={data.map_link}
            target="_blank"
            className="font-semibold text-base lg:text-xl"
          >
            {data.address}
          </a>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <PhoneICon className="size-6" />
            <span>{t("phone")}</span>
          </div>

          <div className="flex flex-col">
            <a
              href={`tel:${data.phone_number1}`}
              target="_blank"
              className="font-semibold text-base lg:text-xl"
            >
              {data.phone_number1}
            </a>
            <a
              href={`tel:${data.phone_number2}`}
              target="_blank"
              className="font-semibold text-base lg:text-xl"
            >
              {data.phone_number2}
            </a>
          </div>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <MailICon className="size-6" />
            <span>{t("email")}</span>
          </div>

          <a
            href={`mailto:data.email`}
            target="_blank"
            className="font-semibold text-base lg:text-xl"
          >
            {data.email}
          </a>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <TimerIcon className="size-6" />
            <span>{t("working_hours")}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm lg:text-base">{data.working_days}</span>
            <span className="font-semibold text-base lg:text-xl">
              {data.working_hours}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm lg:text-base">{t("lunch")}</span>
            <span className="font-semibold text-base lg:text-xl">
              {data.lunch_time}
            </span>
          </div>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <GlobeIcon className="size-6" />
            <span>{t("socials")}</span>
          </div>

          <div className="flex items-center gap-4">
            {data.facebook && (
              <a
                href={data.facebook}
                target="_blank"
                className="hover:text-green-main"
              >
                <FacebookOutlinedIcon />
              </a>
            )}
            {data.telegram && (
              <a
                href={data.telegram}
                target="_blank"
                className="hover:text-green-main"
              >
                <TelegramOutlinedIcon />
              </a>
            )}
            {data.whatsapp && (
              <a
                href={data.whatsapp}
                target="_blank"
                className="hover:text-green-main"
              >
                <WhatsappOutlinedIcon />
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                className="hover:text-green-main"
              >
                <LinkedinOutlinedIcon />
              </a>
            )}
            {data.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                className="hover:text-green-main"
              >
                <InstagramOutlinedIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
