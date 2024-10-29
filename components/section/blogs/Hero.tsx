import Image from "next/image";
import { useTranslations } from "next-intl";

import CustomTitle from "@/components/custom/Title";

const BlogsHero = () => {
  const t = useTranslations();

  const image = "/blogs.png";
  return (
    <section className="relative">
      <Image
        src={image}
        alt="Page banner image"
        fill
        className="absolute inset-0 object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000 -14.26%, rgba(0, 0, 0, 0.00) 20.69%, rgba(0, 0, 0, 0.05) 27.68%, #01426A 76.61%), linear-gradient(180deg, rgba(1, 65, 106, 0.00) 30.56%, rgba(1, 66, 106, 0.00) 33.01%, #01426A 116.13%)",
        }}
      />
      <div className="container h-[80vh] min-h-fit py-20 relative flex flex-col justify-end">
        <h1 className="text-base md:text-2xl text-green-main font-semibold">
          {t("blog")}
        </h1>
        <CustomTitle>{t("blog_title")}</CustomTitle>
      </div>
    </section>
  );
};

export default BlogsHero;
