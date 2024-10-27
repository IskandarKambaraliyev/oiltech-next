import React from "react";
import HeaderLogo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import HeaderSearch, { HeaderSearchMobile } from "./Search";
import { useData } from "@/app/context/DataContext";
import HeaderMenu from "./Menu";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import HeaderPopover from "./Popover";

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};
function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm opacity-80 hover:opacity-100 transition`}
    >
      {children}
    </Link>
  );
}

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="h-20 md:h-[6.5rem] flex-center z-header">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <HeaderLogo className="w-[6rem] md:w-[9rem] h-auto" />
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
