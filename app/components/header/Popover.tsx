"use client";

import { useTranslations } from "next-intl";
import React from "react";

const HeaderPopover = () => {
  const t = useTranslations("Header");
  return <div>{t("services")}</div>;
};

export default HeaderPopover;
