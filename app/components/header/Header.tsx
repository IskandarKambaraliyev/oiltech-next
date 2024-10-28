"use client";

import React, { useEffect, useState } from "react";
import HeaderLogo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import HeaderSearch, { HeaderSearchMobile } from "./Search";
import HeaderMenu from "./Menu";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import HeaderPopover from "./Popover";

const Header = () => {
  const t = useTranslations("Header");

  const [sticky, setSticky] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        sticky ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      } fixed top-0 left-0 w-full h-20 md:h-[6.5rem] flex-center z-header transition`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <HeaderLogo />
          </Link>

          <div className="flex items-center gap-4 max-xl:hidden">
            <HeaderSearch />
            <LangSwitcher />
          </div>
        </div>

        <div className="max-xl:hidden flex items-center gap-4">
          <HeaderLink href="/">{t("home")}</HeaderLink>
          <HeaderPopover />
          <HeaderLink href="/blogs">{t("blog")}</HeaderLink>
          <HeaderLink href="/about">{t("about")}</HeaderLink>
          <HeaderLink href="#contacts">{t("contacts")}</HeaderLink>
        </div>
        <HeaderMenu className="max-xl:hidden" />

        <div className="xl:hidden flex items-center gap-4">
          <HeaderSearchMobile />

          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

function HeaderLink({ href, children }: HeaderLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-sm transition p-2 ${
        pathname === href ? "font-bold" : "opacity-80 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
