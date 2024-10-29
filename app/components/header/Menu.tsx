"use client";

import React, { useEffect, useState } from "react";
import { CustomButton, CustomCircleButton } from "../custom/buttons";
import { MailICon, MenuIcon, PhoneICon, XIcon } from "../Icons";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import HeaderLogo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { usePathname as localePathname } from "@/i18n/routing";
import { useHeaderStates } from "@/app/context/HeaderContext";
import CustomTitle from "../custom/Title";
import ApplicationForm from "../ApplicationForm";

type Props = {
  className?: string;
};

const HeaderMenu = ({ className }: Props) => {
  const { sticky, special, setCatalog } = useHeaderStates();

  const t = useTranslations();
  const pathname = usePathname();

  const { data } = useData();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);
  return (
    <>
      <div
        className={`${
          className ? className : ""
        } flex items-center gap-4 max-xl:hidden`}
      >
        {data !== null && (
          <>
            <CustomLink href={`mailto:${data.email}`}>
              <MailICon />
              <span>{data.email}</span>
            </CustomLink>

            <CustomLink href={`tel:${data.phone_number1}`}>
              <PhoneICon />
              <span>{data.phone_number1}</span>
            </CustomLink>

            <CustomButton
              onClick={() => setCatalog(true)}
              color={special && !sticky ? "blue" : "white"}
              variant="outlined"
            >
              {t("get_catalog")}
            </CustomButton>
          </>
        )}
      </div>

      <div className={`${className ? className : ""} xl:hidden`}>
        <CustomCircleButton
          color={special && !sticky ? "blue" : "white"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </CustomCircleButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, type: "tween" }}
            className="fixed inset-0 w-full h-screen bg-blue-750 text-white-main"
          >
            <div className="container h-20 md:h-[6.5rem] flex items-center justify-between">
              <Link href="/">
                <HeaderLogo />
              </Link>

              <CustomCircleButton onClick={() => setIsOpen(false)}>
                <XIcon />
              </CustomCircleButton>
            </div>

            <div className="w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6.5rem)] overflow-y-auto py-20">
              <div className="container flex flex-col gap-8 items-center justify-between min-h-full">
                <div className="flex flex-col gap-6 items-center">
                  <CustomMenuLink href="/">{t("Header.home")}</CustomMenuLink>
                  <CustomMenuLink href="/blogs">
                    {t("Header.blog")}
                  </CustomMenuLink>
                  <CustomMenuLink href="/about">
                    {t("Header.about")}
                  </CustomMenuLink>
                  <CustomMenuLink
                    href="#contacts"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("Header.contacts")}
                  </CustomMenuLink>

                  <CustomButton
                    color="white"
                    variant="outlined"
                    onClick={() => setCatalog(true)}
                  >
                    {t("get_catalog")}
                  </CustomButton>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <LangSwitcher />
                  {data !== null && (
                    <div className="flex items-center divide-x divide-white-400">
                      <CustomLink href={`mailto:${data.email}`}>
                        <MailICon />
                        <span>{data.email}</span>
                      </CustomLink>

                      <CustomLink href={`tel:${data.phone_number1}`}>
                        <PhoneICon />
                        <span>{data.phone_number1}</span>
                      </CustomLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMenu;

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
};

function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 flex items-center gap-1 opacity-80 hover:opacity-100 text-sm"
    >
      {children}
    </a>
  );
}

type CustomMenuLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function CustomMenuLink({ href, children, onClick }: CustomMenuLinkProps) {
  const pathname = localePathname();
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? "font-bold" : "opacity-80 hover:opacity-100"
      } px-4 text-xl`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = localePathname();

  const changeLang = (lang: string) => {
    if (locale !== lang) {
      router.push(`/${lang}${pathname}`);
    }
  };
  return (
    <div className="flex items-center h-14 w-28 rounded-full bg-white-600">
      <CustomCircleButton
        onClick={() => changeLang("ru")}
        color={locale === "ru" ? "white" : "transparent"}
        variant="solid"
      >
        Рус
      </CustomCircleButton>
      <CustomCircleButton
        onClick={() => changeLang("uz")}
        color={locale === "uz" ? "white" : "transparent"}
        variant="solid"
      >
        Uz
      </CustomCircleButton>
    </div>
  );
}
