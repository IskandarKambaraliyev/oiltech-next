"use client";

import { useCatalogPage } from "@/app/context/CatalogPageContext";
import CardProduct from "@/components/cards/Product";
import { FilterIcon } from "@/components/Icons";
import { useEffect, useState } from "react";
import CatalogCategories from "./Categories";
import { CustomButton } from "@/components/custom/buttons";
import { useTranslations } from "next-intl";

const ProductsList = () => {
  const t = useTranslations("Products");
  const {
    products,
    productsLoading,
    active,
    nextUrl,
    loadMore,
    categories,
    loaded,
  } = useCatalogPage();
  const [isOpen, setIsOpen] = useState(true);

  const [hasCategories, setHasCategories] = useState(true);

  useEffect(() => {
    if (categories?.categories && categories.categories.length > 0) {
      setHasCategories(true);
    } else {
      setHasCategories(false);
    }
  }, [categories]);

  if (loaded) {
    return (
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <h2 className="flex-1 text-xl md:text-2xl font-semibold">
            {active.title
              ? active.title
              : hasCategories
              ? categories?.categories[0].title
              : "No categories"}
          </h2>

          {hasCategories && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`shrink-0 size-8 lg:hidden transition ${
                isOpen ? "bg-green-main text-white-main" : ""
              }`}
            >
              <FilterIcon />
            </button>
          )}
        </div>

        {hasCategories && (
          <div
            className={`bg-white px-4 py-2 will-change-contents lg:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <CatalogCategories />
          </div>
        )}

        {productsLoading ? (
          <div className="w-full h-[20rem] bg-black/10 animate-pulse rounded-md"></div>
        ) : products && products.length > 0 ? (
          <div className="w-full flex flex-col items-start gap-4">
            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ${
                productsLoading ? "animate-pulse" : ""
              }`}
            >
              {products.map((item) => (
                <CardProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
            {nextUrl && (
              <CustomButton onClick={loadMore}>{t("load_more")}</CustomButton>
            )}
          </div>
        ) : (
          <h2 className="flex-1 text-xl md:text-2xl font-semibold">
            {t("no_products")}
          </h2>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full h-[10rem] bg-black/20 animate-pulse rounded-md"></div>
    );
  }
};

export default ProductsList;
