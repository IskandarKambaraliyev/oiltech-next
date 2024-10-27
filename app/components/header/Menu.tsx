"use client";

import React from "react";
import { CustomButton, CustomCircleButton } from "../custom/buttons";
import { MailICon, MenuIcon, PhoneICon } from "../Icons";
import { useData } from "@/app/context/DataContext";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 flex items-center gap-1 opacity-80 hover:opacity-100 transition text-sm"
    >
      {children}
    </a>
  );
}

const HeaderMenu = ({ className }: Props) => {
  const t = useTranslations();

  const { data } = useData();
  return (
    <>
      <div
        className={`${
          className ? className : ""
        } flex items-center gap-4 max-xl:hidden`}
      >
        {data !== null && (
          <>
            <Link href={`mailto:${data.email}`}>
              <MailICon />
              <span>{data.email}</span>
            </Link>

            <Link href={`tel:${data.phone_number1}`}>
              <PhoneICon />
              <span>{data.phone_number1}</span>
            </Link>

            <CustomButton color="white" variant="outlined">
              {t("get_catalog")}
            </CustomButton>
          </>
        )}
      </div>

      <div className={`${className ? className : ""} xl:hidden`}>
        <CustomCircleButton>
          <MenuIcon />
        </CustomCircleButton>
      </div>
    </>
  );
};

export default HeaderMenu;
