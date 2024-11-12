import { useTranslations } from "next-intl";

import CustomSectionTitle from "../../custom/SectionTitle";
import CustomTitle from "../../custom/Title";
import Service from "./Service";

import { ServicesApi } from "@/types";

type Props = {
  data: ServicesApi;
};

const HomeServices = ({ data }: Props) => {
  const t = useTranslations("Home");

  if (data !== null && data.length !== 0) {
    return (
      <section>
        <div className="container">
          <CustomSectionTitle>{t("our_services")}</CustomSectionTitle>
          <CustomTitle>{t("main_services")}</CustomTitle>
        </div>

        <div className="flex flex-col mt-6 lg:mt-14">
          {data && data.map((item) => <Service key={item.id} item={item} />)}
        </div>
      </section>
    );
  }
};

export default HomeServices;
