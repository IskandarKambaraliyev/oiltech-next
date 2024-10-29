"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";

import useClickOutside from "@/app/hooks/useClickOutside";
import { useHeaderStates } from "@/app/context/HeaderContext";

import { CustomCircleButton } from "../custom/buttons";

const LangSwitcher = () => {
  const { special, sticky } = useHeaderStates();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<"solid" | "outlined">("solid");

  const target = useRef(null);

  useClickOutside(target, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      setVariant("solid");
    } else {
      setTimeout(() => {
        setVariant("outlined");
      }, 300);
    }
  }, [isOpen]);

  const handleChangeLocale = () => {
    const lang = locale === "uz" ? "ru" : "uz";
    router.push(`/${lang}${pathname}`);
  };
  return (
    <div className="relative" ref={target}>
      <div className="relative z-[1]">
        <CustomCircleButton
          onClick={() => setIsOpen(!isOpen)}
          variant={variant}
          color={special && !sticky ? "blue" : "white"}
        >
          {locale === "ru" ? "Рус" : "Uz"}
        </CustomCircleButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: "3.5rem",
            }}
            animate={{ height: "7rem" }}
            exit={{ height: "3.5rem" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full flex flex-col justify-end bg-white-600 rounded-full"
          >
            <CustomCircleButton
              color="transparent"
              variant="solid"
              onClick={handleChangeLocale}
            >
              {locale === "uz" ? "Рус" : "Uz"}
            </CustomCircleButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangSwitcher;
