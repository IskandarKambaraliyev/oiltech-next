import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import CardProduct from "@/components/cards/Product";
import HtmlWithModifiedImages from "@/components/custom/HtmlWithModifiedImages";
import { ProductDetailApi } from "@/types";
import useFetchData from "@/app/hooks/useFetchData";

type Props = {
  params: Promise<{ locale: string; productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, productId } = await params;

  const data = await useFetchData<ProductDetailApi>(
    `/products/product/${productId}/`,
    locale
  );

  if (!data) {
    return {};
  } else {
    return {
      title: data.title,
      description: data.description || "Product description",
      openGraph: {
        images: [data.image],
      },
    };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, productId } = await params;
  const t = await getTranslations();

  const data = await useFetchData<ProductDetailApi>(
    `/products/product/${productId}/`,
    locale
  );
  if (data) {
    return (
      <section className="text-blue-main pt-28 pb-12">
        <div className="container flex flex-col gap-8 relative">
          <div className="flex max-md:flex-col gap-x-16 gap-y-8">
            <Image
              src={data.image}
              alt={`Product image of ${data.title}`}
              width={500}
              height={500}
              className="!relative md:flex-1 w-full max-w-[30rem] h-auto object-contain"
            />

            <div className="md:flex-[1.2] flex flex-col gap-4 md:gap-8">
              <h1 className="text-2xl md:text-[2rem] lg:text-[2.5rem] font-semibold">
                {data.title}
              </h1>

              {data.description && (
                <p className="text-base lg:text-lg">{data.description}</p>
              )}

              {data.info && (
                <HtmlWithModifiedImages
                  className="text-base lg:text-lg"
                  data={data.info}
                />
              )}
            </div>
          </div>

          {data.content && (
            <HtmlWithModifiedImages
              className="text-base lg:text-lg"
              data={data.content}
            />
          )}

          {data.related_products && data.related_products.length > 0 && (
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-xl md:text-2xl">
                {t("Products.related_products")}
              </h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.related_products.map((item) => (
                  <CardProduct
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
