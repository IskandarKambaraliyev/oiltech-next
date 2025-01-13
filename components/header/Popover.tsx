"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { ServicesApi } from "@/types";

type Props = {
  services: ServicesApi;
};
const HeaderPopover = ({ services }: Props) => {
  const t = useTranslations("Header");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        closeOnSelect
        offset={0}
        classNames={{
          content: "p-0 rounded-[1rem] overflow-hidden",
        }}
      >
        <DropdownTrigger
          onMouseEnter={handleMouseEnter}
          className="!opacity-80 hover:!opacity-100 !scale-100 cursor-pointer p-2"
        >
          {t("services")}
        </DropdownTrigger>

        <DropdownMenu
          items={services ? services : []}
          className="p-0"
          itemClasses={{
            base: "px-4 py-3 rounded-none text-blue-main data-[hover=true]:bg-blue-100 data-[hover=true]:text-blue-main data-[focus-visible=true]:bg-blue-100 data-[focus-visible=true]:text-blue-main",
          }}
          classNames={{
            base: "gap-0",
          }}
        >
          {(item) => (
            <DropdownItem
              key={item.id}
              href={
                item.slug === "motor-fuels"
                  ? `/${locale}/blogs/10`
                  : item.slug === "technological-solutions"
                  ? `/${locale}/blogs/11`
                  : `/${locale}/products/catalog/${item.slug}`
              }
            >
              {item.title}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default HeaderPopover;
