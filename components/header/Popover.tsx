"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { useServices } from "@/app/context/ServicesContext";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

const HeaderPopover = () => {
  const t = useTranslations("Header");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const { data } = useServices();
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
          items={data ? data : []}
          className="p-0"
          itemClasses={{
            base: "p-2 rounded-none text-blue-main data-[hover=true]:bg-blue-100 data-[hover=true]:text-blue-main data-[focus-visible=true]:bg-blue-100 data-[focus-visible=true]:text-blue-main",
          }}
        >
          {(item) => (
            <DropdownItem
              key={item.id}
              href={`/${locale}/products/catalog/${item.slug}`}
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
