import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import BlogCards from "../BlogCards";
import CustomSectionTitle from "../../custom/SectionTitle";
import CustomTitle from "../../custom/Title";
import { CustomButton } from "../../custom/buttons";
import { BlogResults } from "@/types";

type Props = {
  data: BlogResults;
};
const HomeBlog = ({ data }: Props) => {
  const t = useTranslations();
  return (
    <section className="my-20">
      <div className="container space-y-8">
        <div>
          <CustomSectionTitle>{t("blog")}</CustomSectionTitle>
          <div className="flex items-center gap-4 justify-between">
            <CustomTitle className="w-fit">{t("blog_title")}</CustomTitle>

            <Link href="/blogs" className="hover:text-green-main max-sm:hidden">
              {t("all")}
            </Link>
          </div>
        </div>

        <BlogCards data={data} />

        <div className="w-full sm:hidden">
          <CustomButton color="white" variant="outlined" href="/blogs">
            {t("all")}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
