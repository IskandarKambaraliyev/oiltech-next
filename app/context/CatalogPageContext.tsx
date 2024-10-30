"use client";

import { CategoriesApi, ServicesChild } from "@/types";
import { useLocale } from "next-intl";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useApiRoute from "../hooks/useApiRoute";

interface CatalogPageContextType {
  slug: string;
  categories?: CategoriesApi;
}

const CatalogPageContext = createContext<CatalogPageContextType | undefined>(
  undefined
);

export const CatalogPageProvider: React.FC<{
  children: ReactNode;
  initialSlug: string;
}> = ({ children, initialSlug }) => {
  const locale = useLocale();

  const [categories, setCategories] = useState<CategoriesApi>();

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        useApiRoute(`/products/categories/${initialSlug}`, locale),
        {
          cache: "default",
          next: {
            revalidate: 600,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch data");

      const result: CategoriesApi = await res.json();
      setCategories(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const values = {
    slug: initialSlug,
    categories: categories,
  };
  return (
    <CatalogPageContext.Provider value={values}>
      {children}
    </CatalogPageContext.Provider>
  );
};

export const useCatalogPage = () => {
  const context = useContext(CatalogPageContext);
  if (context === undefined) {
    throw new Error(
      "useCatalogPageContext must be used within a CatalogPageProvider"
    );
  }
  return context;
};
