"use client";

import { useCatalogPage } from "@/app/context/CatalogPageContext";
import { ChevronDownIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { CategoriesCategory } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const CatalogCategories = () => {
  const { categories, changeActiveCategory } = useCatalogPage();

  const lists = categories?.categories;

  if (lists && lists.length > 0) {
    return (
      <div className="w-full flex flex-col">
        {lists.map((cat) => (
          <Category
            item={cat}
            key={cat.id}
            level={1}
            onClick={() => changeActiveCategory(cat.id, null, null)}
          >
            {cat.children.length > 0 &&
              cat.children.map((sub) => (
                <Category
                  item={sub}
                  key={sub.id}
                  level={2}
                  onClick={() => changeActiveCategory(cat.id, sub.id, null)}
                >
                  {sub.children.length > 0 &&
                    sub.children.map((subsub) => (
                      <Category
                        item={subsub}
                        key={subsub.id}
                        level={3}
                        onClick={() =>
                          changeActiveCategory(cat.id, sub.id, subsub.id)
                        }
                      />
                    ))}
                </Category>
              ))}
          </Category>
        ))}
      </div>
    );
  } else return null;
};

export default CatalogCategories;

type CategoryProps = {
  children?: ReactNode;
  item: CategoriesCategory;
  level: 1 | 2 | 3;
  onClick: () => void;
};
function Category({ children, item, level, onClick }: CategoryProps) {
  const { activeCategory, active } = useCatalogPage();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(
      activeCategory.cat === item.id ||
        activeCategory.sub === item.id ||
        activeCategory.subsub === item.id
    );
  }, [activeCategory]);
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col overflow-hidden"
    >
      <button
        onClick={onClick}
        className={cn("text-left flex items-center gap-2 py-2 relative", {
          "font-semibold": level === 1,
          "pl-[calc(0.5625rem+0.5rem)]":
            level === 2 && item.children.length > 0,
          "pl-[calc(1.125rem+1rem)]": level === 2 && item.children.length === 0,
          "pl-[calc(1.6875rem+1.5rem)]": level === 3,
        })}
      >
        {level !== 1 && (
          <div className="absolute top-0 left-1 w-[0.0625rem] h-full bg-blue-300" />
        )}
        {item.children.length > 0 && (
          <ChevronDownIcon
            className={`text-blue-main size-[0.5625rem] transition ${
              isActive ? "-rotate-180" : "rotate-0"
            }`}
          />
        )}
        <span
          className={`${
            active.id === item.id ? "text-green-main" : "text-blue-main"
          }`}
        >
          {item.title}
        </span>
      </button>

      <AnimatePresence>{isActive && children}</AnimatePresence>
    </motion.div>
  );
}
