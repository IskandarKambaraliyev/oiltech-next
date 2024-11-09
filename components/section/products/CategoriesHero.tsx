import Image from "next/image";
import { useTranslations } from "next-intl";

import CustomTitle from "@/components/custom/Title";

import { ServicesChild } from "@/types";

type Props = {
  data: ServicesChild;
};
const CategoriesHero = ({ data }: Props) => {
  const t = useTranslations("Products");

  if (data) {
    return (
      <section className="relative">
        <Image
          src={data.image}
          alt="Banner Image"
          fill
          className="absolute inset-0 size-full object-cover"
          priority
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 51.5%, rgba(0, 0, 0, 0.40) 100%)",
          }}
        ></div>
        <div className="container relative min-h-[60vh] h-fit flex flex-col justify-end pt-20 pb-8">
          <h1 className="text-base md:text-2xl text-green-main font-semibold">
            {t("title")}
          </h1>
          <CustomTitle className="text-white-main">{data.title}</CustomTitle>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default CategoriesHero;
