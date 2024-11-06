import { useTranslations } from "next-intl";

import CustomSectionTitle from "../../custom/SectionTitle";
import { AdvantegesApi } from "@/types";
import AnimatedNumber from "@/components/AnimtedNumber";

type Props = {
  data: AdvantegesApi;
};

const HomeAdvantages = ({ data }: Props) => {
  const t = useTranslations("Home");

  if (data !== null && data.length > 0) {
    return (
      <section className="py-20">
        <div className="container flex flex-col gap-6 md:gap-8 relative">
          <CustomSectionTitle>{t("advantages")}</CustomSectionTitle>

          <div className="w-full h-[1px] bg-green-main"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col items-start">
                <div className="text-[3rem] lg:text-[5rem] flex items-center leading-tight">
                  <AnimatedNumber to={item.number} />
                  <span>{item.postfix}</span>
                </div>

                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default HomeAdvantages;
