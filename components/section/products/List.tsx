"use client";

import { useCatalogPage } from "@/app/context/CatalogPageContext";
import CardProduct from "@/components/cards/Product";
import { FilterIcon } from "@/components/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CatalogCategories from "./Categories";
import { CustomButton } from "@/components/custom/buttons";
import { useTranslations } from "next-intl";

const ProductsList = () => {
  const t = useTranslations("Products");
  const { products, productsLoading, active, nextUrl, loadMore } =
    useCatalogPage();
  const [isOpen, setIsOpen] = useState(true);

  if (products && products.length > 0) {
    return (
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <h2 className="flex-1 text-xl md:text-2xl font-semibold">
            {active.title}
          </h2>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`shrink-0 size-8 lg:hidden transition ${
              isOpen ? "bg-green-main text-white-main" : ""
            }`}
          >
            <FilterIcon />
          </button>
        </div>

        <div
          className={`bg-white px-4 py-2 will-change-contents lg:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <CatalogCategories />
        </div>

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
      </div>
    );
  } else {
    return (
      <h2 className="flex-1 text-xl md:text-2xl font-semibold">
        {t("no_products")}
      </h2>
    );
  }
};

export default ProductsList;
