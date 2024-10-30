import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { ServicesApi } from "@/types";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

type Props = {
  services: ServicesApi;
};

const HeaderServicesAccordion = ({ services }: Props) => {
  const t = useTranslations("Header");
  return (
    <Accordion
      itemClasses={{
        base: "w-[30rem] max-w-full mx-auto flex flex-col items-center",
        trigger: "w-fit group",
        title: "!text-white-main opacity-90 group-hover:opacity-100",
        content: "bg-white-100 py-0",
        indicator: "-rotate-90",
      }}
    >
      <AccordionItem title={t("services")}>
        <div className="flex flex-col">
          {services.map((item) => (
            <Link
              href={`/products/catalog/${item.slug}`}
              key={item.id}
              className="p-2 text-center w-full hover:bg-white-100 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default HeaderServicesAccordion;
