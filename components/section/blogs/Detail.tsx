import useDateFormatter from "@/app/hooks/useDateFormatter";
import { cn } from "@/lib/utils";

import HtmlWithModifiedImages from "../../custom/HtmlWithModifiedImages";
import { CalendarIcon } from "../../Icons";

import { BlogDetailApi } from "@/types";
import CardProduct from "@/components/cards/Product";
import { useTranslations } from "next-intl";

type Props = {
  data: BlogDetailApi;
  className?: string;
};

const BlogDeatail = ({ data, className }: Props) => {
  const t = useTranslations();
  return (
    <div
      className={cn(
        "container !max-w-[75rem] bg-white-main p-4 md:p-6 text-blue-main",
        className
      )}
    >
      <div className="relative">
        <h1 className="text-2xl md:text-[1.75rem] leading-tight font-semibold">
          {data.title}
        </h1>
        <div className="w-full aspect-[2/1] my-4">
          <img className="size-full object-cover" src={data.image} />
        </div>

        <HtmlWithModifiedImages data={data.description} />

        {data.related_products && data.related_products.length > 0 && (
          <div className="flex flex-col gap-2 mt-8">
            <h6 className="font-semibold text-xl md:text-2xl">
              {t("Products.related_products")}
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.related_products.map((item) => (
                <CardProduct
                  key={item.product_id}
                  id={item.product_id}
                  title={item.product_title}
                  image={item.image_url}
                  description={item.product_description}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <span className="text-blue-400">
              {useDateFormatter(data.date_time)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDeatail;
