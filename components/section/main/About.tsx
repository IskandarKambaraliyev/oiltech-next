import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import CustomSectionTitle from "../../custom/SectionTitle";
import { AboutApi } from "@/types";
import Image from "next/image";

type Props = {
  data: AboutApi;
};

const HomeAbout = ({ data }: Props) => {
  const t = useTranslations("Home");

  if (data !== null) {
    return (
      <section className="relative">
        <Image
          src={data.picture}
          alt="About section image"
          fill
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute inset-0 bg-[#01426A4D]" />

        <div className="container relative h-svh min-h-fit py-4 flex flex-col justify-end">
          <div className="sticky bottom-4 left-0 flex flex-col gap-4">
            <Link href="/about" className="group w-fit">
              <CustomSectionTitle className="py-2 px-6 bg-white text-blue-main w-fit group-hover:bg-green-main group-hover:text-white-main transition">
                {t("about")}
              </CustomSectionTitle>
            </Link>

            <div
              className="p-4 lg:p-6 bg-green-main max-w-[40rem] text-xl line-clamp-[10]"
              dangerouslySetInnerHTML={{
                __html: data.description.replace(/<img[^>]*>/g, ""),
              }}
            ></div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default HomeAbout;
