"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CategoriesApi, ProductChild, ProductsGetApi } from "@/types";
import { useLocale } from "next-intl";
import useApiRoute from "../hooks/useApiRoute";

type CategorySelection = {
  cat: number | null;
  sub: number | null;
  subsub: number | null;
};

type ActiveCategory = {
  id: number | null;
  title?: string;
};

type CatalogPageContextType = {
  slug: string;
  categories?: CategoriesApi;
  activeCategory: CategorySelection;
  setActiveCategory: React.Dispatch<React.SetStateAction<CategorySelection>>;
  changeActiveCategory: (
    cat: number,
    sub: number | null,
    subsub: number | null
  ) => void;
  active: ActiveCategory;
  products: ProductChild[];
  nextUrl: string | null;
  productsLoading: boolean;
  loadMore: () => void;
  loaded: boolean;
  productsFirstLoad: boolean;
};

const CatalogPageContext = createContext<CatalogPageContextType | undefined>(
  undefined
);

export const CatalogPageProvider: React.FC<{
  children: ReactNode;
  initialSlug: string;
}> = ({ children, initialSlug }) => {
  const locale = useLocale();
  const [categories, setCategories] = useState<CategoriesApi>();
  const [activeCategory, setActiveCategory] = useState<CategorySelection>({
    cat: null,
    sub: null,
    subsub: null,
  });
  const [active, setActive] = useState<ActiveCategory>({ id: null });
  const [products, setProducts] = useState<ProductChild[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [productsFirstLoad, setProductsFirstLoad] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchProducts = async (id: number) => {
    try {
      setProductsLoading(true);

      const res = await fetch(
        useApiRoute(`/products/get/${id}/?limit=12`, locale),
        {
          cache: "default",
          next: { revalidate: 600 },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch Products");

      const result = await res.json();
      setProducts(result.results);
      setNextUrl(result.next);
    } catch (error) {
      console.log(error);
    } finally {
      setProductsLoading(false);

      if (productsFirstLoad) {
        setProductsFirstLoad(true);
      }
    }
  };

  const fetchNextProducts = async () => {
    if (nextUrl) {
      try {
        const res = await fetch(nextUrl, { cache: "default" });
        if (!res.ok) throw new Error("Failed to fetch Products");

        const result: ProductsGetApi = await res.json();
        setProducts((prev) => [...prev, ...result.results]);
        setNextUrl(result.next);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          useApiRoute(`/products/categories/${initialSlug}`, locale),
          { cache: "default", next: { revalidate: 600 } }
        );
        if (!res.ok) throw new Error("Failed to fetch Categories");

        const result = await res.json();
        setCategories(result);

        if (result.categories.length > 0) {
          const activeId = result.categories[0].id;
          setActive({
            id: activeId,
            title: activeId
              ? findTitleById(activeId, result.categories)
              : undefined,
          });
          setActiveCategory({
            cat: activeId,
            sub: null,
            subsub: null,
          });
          fetchProducts(activeId);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (active.id) {
      fetchProducts(active.id);
    }
  }, [active.id]);

  const findTitleById = (id: number, list: any): string | undefined => {
    for (const cat of list || []) {
      if (cat.id === id) return cat.title;
      for (const sub of cat.children) {
        if (sub.id === id) return sub.title;
        for (const subsub of sub.children) {
          if (subsub.id === id) return subsub.title;
        }
      }
    }
  };

  const changeActiveCategory = (
    cat: number,
    sub: number | null,
    subsub: number | null
  ) => {
    setActiveCategory((prev) => {
      const newActiveCategory: CategorySelection = {
        cat: prev.cat === cat && sub === null && subsub === null ? null : cat,
        sub: sub !== null && prev.sub === sub && subsub === null ? null : sub,
        subsub: subsub !== null && prev.subsub === subsub ? null : subsub,
      };

      const activeId = subsub || sub || cat;
      setActive({
        id: activeId,
        title: activeId
          ? findTitleById(activeId, categories?.categories)
          : undefined,
      });

      return newActiveCategory;
    });
  };

  return (
    <CatalogPageContext.Provider
      value={{
        slug: initialSlug,
        categories,
        activeCategory,
        setActiveCategory,
        changeActiveCategory,
        active,
        products,
        nextUrl,
        productsLoading,
        loadMore: fetchNextProducts,
        loaded,
        productsFirstLoad,
      }}
    >
      {children}
    </CatalogPageContext.Provider>
  );
};

export const useCatalogPage = () => {
  const context = useContext(CatalogPageContext);
  if (!context) {
    throw new Error("useCatalogPage must be used within a CatalogPageProvider");
  }
  return context;
};
