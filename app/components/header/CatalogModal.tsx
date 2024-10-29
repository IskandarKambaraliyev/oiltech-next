"use client";

import React, { useEffect, useRef } from "react";
import CustomTitle from "../custom/Title";
import ApplicationForm from "../ApplicationForm";
import { useTranslations } from "next-intl";
import { useHeaderStates } from "@/app/context/HeaderContext";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/app/hooks/useClickOutside";
import { XIcon } from "../Icons";

const HeaderCatalogModal = () => {
  const t = useTranslations();
  const { catalog, setCatalog } = useHeaderStates();
  const target = useRef(null);

  useEffect(() => {
    if (catalog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [catalog]);

  useClickOutside(target, () => {
    setCatalog(false);
  });

  async function handleSubmit(url: string) {
    try {
      // Remove any extra quotes or spaces
      const sanitizedUrl = url.replace(/^['"]+|['"]+$/g, "").trim();

      const response = await fetch(sanitizedUrl);

      // Check if the response is okay (status 200)
      if (!response.ok) {
        throw new Error(`Error fetching file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element to download the file
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = sanitizedUrl.split("/").pop() || "downloaded-file"; // Use the last part of the URL as filename or a default
      document.body.appendChild(a);
      a.click();

      // Clean up
      a.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }

  return (
    <AnimatePresence>
      {catalog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-modal-1 h-screen bg-blue-500 overflow-y-auto py-20"
        >
          <div className="h-fit min-h-[calc(100vh-10rem)] flex-center">
            <div
              className="bg-green-main max-w-[50rem] w-[calc(100%-2rem)] mx-auto py-8 md:py-16 px-4 md:px-8 flex flex-col items-center gap-4 md:gap-8 relative"
              ref={target}
            >
              <button
                className="absolute top-4 right-4 size-8"
                onClick={() => setCatalog(false)}
              >
                <XIcon className="size-full" />
              </button>
              <div className="size-[6rem] md:size-[8rem]">
                <svg
                  width="133"
                  height="132"
                  viewBox="0 0 133 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-full"
                >
                  <circle opacity="0.1" cx="66.5" cy="66" r="66" fill="white" />
                  <circle opacity="0.1" cx="67" cy="66" r="54" fill="white" />
                  <circle cx="67" cy="66" r="36" fill="white" />
                  <path
                    d="M76 78H57.999C57.7338 78 57.4795 77.8946 57.2919 77.7071C57.1044 77.5196 56.999 77.2652 56.999 77V55C56.999 54.7348 57.1044 54.4804 57.2919 54.2929C57.4795 54.1054 57.7338 54 57.999 54H70L77 61V77C77 77.1313 76.9741 77.2614 76.9239 77.3827C76.8736 77.504 76.8 77.6143 76.7071 77.7071C76.6143 77.8 76.504 77.8736 76.3827 77.9239C76.2614 77.9741 76.1313 78 76 78Z"
                    stroke="#00C6B7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70 54V61H77.001"
                    stroke="#00C6B7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M63.5 69.5L67 73L70.5 69.5"
                    stroke="#00C6B7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M67 65V73"
                    stroke="#00C6B7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col w-full gap-4 md:gap-8">
                <CustomTitle className="text-center">
                  {t("get_catalog")}
                </CustomTitle>

                <ApplicationForm
                  type="catalog"
                  inputColor="blue"
                  btnColor="white"
                  onSubmitted={handleSubmit}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderCatalogModal;
