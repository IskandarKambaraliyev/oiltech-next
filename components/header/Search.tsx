"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/routing";

import useClickOutside from "@/app/hooks/useClickOutside";
import useApiRoute from "@/app/hooks/useApiRoute";
import { useHeaderStates } from "@/app/context/HeaderContext";

import { CustomCircleButton } from "../custom/buttons";
import { SearchIcon, SpinnerIcon } from "../Icons";

type SearchResultsApi = {
  title: string;
  description?: string;
  url: string;
  exact_match: number;
}[];

async function getSearchResults(
  query: string,
  locale: string,
  setLoading: (loading: boolean) => void,
  setResults: (results: SearchResultsApi) => void
) {
  try {
    setLoading(true);

    const res = await fetch(useApiRoute(`/search/?query=${query}`, locale), {
      next: {
        revalidate: 3600,
      },
      cache: "default",
    });

    if (!res.ok) {
      console.log("Failed to fetch search results", res);
    } else {
      const data = await res.json();

      setResults(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

const HeaderSearch = () => {
  const { special, sticky } = useHeaderStates();
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

  useEffect(() => {
    if (search !== "" && isOpen) {
      getSearchResults(search, locale, setLoading, setResults);
    }
  }, [search, isOpen]);
  return (
    <div className="relative z-[2]" ref={target}>
      <div className="relative z-[1]">
        <CustomCircleButton
          onClick={() => setIsOpen(!isOpen)}
          color={special && !isOpen && !sticky ? "blue" : "white"}
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
            <SearchInput
              ref={input}
              search={search}
              setSearch={setSearch}
              loading={loading}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {results !== null && search !== "" && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[calc(100%+1rem)] left-0 w-[20rem]"
          >
            {results.length > 0 ? (
              <div className="bg-white text-blue-main rounded-[1rem] max-h-[50vh] overflow-y-auto custom-scrollbar">
                <Results results={results} />
              </div>
            ) : (
              <div className="bg-white rounded-[1rem] p-4 text-blue-main font-medium">
                {t("no_results")}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderSearch;

export function HeaderSearchMobile() {
  const { special, sticky } = useHeaderStates();

  const t = useTranslations("Header");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
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
      document.body.style.overflow = "hidden";
      input.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (search !== "" && isOpen) {
      getSearchResults(search, locale, setLoading, setResults);
    }
  }, [search, isOpen]);
  return (
    <>
      <CustomCircleButton
        onClick={() => setIsOpen(!isOpen)}
        color={special && !sticky ? "blue" : "white"}
      >
        <SearchIcon />
      </CustomCircleButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-screen h-screen bg-blue-500 px-4 py-20 overflow-y-auto"
          >
            <div className="min-h-full h-fit flex-center">
              <div
                className="text-blue-main flex flex-col gap-4 max-w-[25rem] w-full"
                ref={target}
              >
                <div className="flex items-center h-14 bg-white rounded-full pr-4 overflow-hidden">
                  <CustomCircleButton variant="solid">
                    <SearchIcon />
                  </CustomCircleButton>

                  <SearchInput
                    ref={input}
                    search={search}
                    setSearch={setSearch}
                    loading={loading}
                  />
                </div>

                <div className="w-full min-h-[20rem] h-[50vh]">
                  <AnimatePresence>
                    {results !== null && search !== "" && isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-h-full h-fit bg-white rounded-[1rem] overflow-y-auto custom-scrollbar"
                      >
                        {results.length > 0 ? (
                          <Results results={results} />
                        ) : (
                          <div className="bg-white rounded-[1rem] py-2 px-4 text-blue-main font-medium">
                            {t("no_results")}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type SearchInputProps = {
  ref: React.RefObject<HTMLInputElement>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  className?: string;
};
function SearchInput({
  ref,
  search,
  setSearch,
  loading,
  className,
}: SearchInputProps) {
  const t = useTranslations("Header");
  return (
    <>
      <input
        ref={ref}
        id="header-search-mobile"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t("search")}
        type="text"
        className={`${className} flex-1 outline-none font-medium`}
        autoComplete="off"
      />

      <div className="size-4">
        {loading && <SpinnerIcon className="size-full" />}
      </div>
    </>
  );
}

function Results({ results }: { results: SearchResultsApi }) {
  return results.map((item) => (
    <Link
      href={item.url}
      key={item.title}
      className="flex flex-col gap-1 py-2 px-4 relative hover:bg-blue-100 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-2rem)] after:h-[1px] after:bg-[#d9d9d9] after:content-[''] last:after:hidden select-none"
    >
      <span className="line-clamp-2 font-medium">{item.title}</span>

      {item.description && (
        <div
          className="line-clamp-2 text-blue-600 text-sm"
          dangerouslySetInnerHTML={{
            __html: item.description.replace(/<img[^>]*>/g, ""),
          }}
        />
      )}
    </Link>
  ));
}
