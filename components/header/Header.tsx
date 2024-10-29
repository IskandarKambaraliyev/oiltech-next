"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

import { useHeaderStates } from "@/app/context/HeaderContext";

import HeaderLogo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import HeaderSearch, { HeaderSearchMobile } from "./Search";
import HeaderMenu from "./Menu";
import HeaderPopover from "./Popover";
import { DataApi, ServicesApi } from "@/types";

type Props = {
  services: ServicesApi;
  data: DataApi;
};

const Header = ({ services, data }: Props) => {
  const t = useTranslations("Header");
  const { sticky, special } = useHeaderStates();
  return (
    <header
      className={`${
        sticky
          ? "bg-black/30 backdrop-blur-lg"
          : special
          ? "bg-transparent text-blue-main"
          : "bg-transparent"
      } fixed top-0 left-0 w-full h-20 md:h-[6.5rem] flex-center z-header transition`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <HeaderLogo
              className={
                sticky ? "text-white-main" : special ? "text-blue-main" : ""
              }
            />
          </Link>

          <div className="flex items-center gap-4 max-xl:hidden">
            <HeaderSearch />
            <LangSwitcher />
          </div>
        </div>

        <div className="max-xl:hidden flex items-center gap-4">
          <HeaderLink href="/">{t("home")}</HeaderLink>
          <HeaderPopover services={services} />
          <HeaderLink href="/blogs">{t("blog")}</HeaderLink>
          <HeaderLink href="/about">{t("about")}</HeaderLink>
          <HeaderLink href="#contacts">{t("contacts")}</HeaderLink>
        </div>
        <HeaderMenu services={services} data={data} className="max-xl:hidden" />

        <div className="xl:hidden flex items-center gap-4">
          <HeaderSearchMobile />

          <HeaderMenu services={services} data={data} />
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
      className={`text-sm p-2 ${
        pathname === href ? "font-bold" : "opacity-80 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
