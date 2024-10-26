"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CustomCircleButton } from "../custom/buttons";
import { SearchIcon, SpinnerIcon } from "../Icons";
import useClickOutside from "@/app/hooks/useClickOutside";
import { useLocale, useTranslations } from "next-intl";
import useApiRoute from "@/app/hooks/useApiRoute";
import { Link } from "@/i18n/routing";

type SearchResultsApi = {
  title: string;
  description?: string;
  url: string;
  exact_match: number;
}[];

const HeaderSearch = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<"solid" | "outlined">("solid");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<SearchResultsApi | null>(null);
  const [loading, setLoading] = useState(false);

  const target = useRef(null);
  const input = useRef<HTMLInputElement>(null);

  useClickOutside(target, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      setVariant("solid");
      input.current?.focus();
    } else {
      setTimeout(() => {
        setVariant("outlined");
      }, 300);
    }
  }, [isOpen]);

  async function getSearchResults(query: string) {
    try {
      setLoading(true);

      const data = await fetch(useApiRoute(`/search/?query=${query}`, locale), {
        next: {
          revalidate: 3600,
        },
        cache: "force-cache",
      }).then((res) => res.json());

      console.log(data);
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search !== "" && isOpen) {
      getSearchResults(search);
    }
  }, [search, isOpen]);
  return (
    <div className="relative z-[2]" ref={target}>
      <div className="relative z-[1]">
        <CustomCircleButton
          onClick={() => setIsOpen(!isOpen)}
          variant={variant}
        >
          <SearchIcon />
        </CustomCircleButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              width: "3.5rem",
              paddingLeft: "2.5rem",
            }}
            animate={{ width: "20rem", paddingLeft: "3.5rem" }}
            exit={{ width: "3.5rem", paddingLeft: "2.5rem" }}
            className={`absolute top-0 left-0 h-[3.5rem] bg-white rounded-full flex items-center  pr-4 text-blue-main overflow-hidden`}
          >
            <input
              id="header-search"
              ref={input}
              value={search}
              type="text"
              placeholder={t("search")}
              className="flex-1 bg-transparent outline-none font-medium"
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />

            <div className="size-4">
              {loading && <SpinnerIcon className="size-full" />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {results !== null && search !== "" && isOpen && (
          <motion.div className="absolute top-[calc(100%+1rem)] left-0 w-[20rem]">
            {results.length > 0 ? (
              <div className="bg-white py-2 px-4 text-blue-main rounded-[1rem] divide-y divide-[#d9d9d9] max-h-[50vh] overflow-y-auto custom-scrollbar">
                {results.map((item) => (
                  <Link
                    href={item.url}
                    key={item.title}
                    className="flex flex-col gap-1 py-2 "
                  >
                    <span className="line-clamp-2 font-medium">
                      {item.title}
                    </span>

                    {item.description && (
                      <div
                        className="line-clamp-2 text-blue-600 text-sm"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <p>No results found</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderSearch;
