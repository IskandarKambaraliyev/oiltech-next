"use client";

import { useEffect, useRef, useState } from "react";
import { submitApplicationForm } from "../actions/submitApplicationForm";
import { useLocale, useTranslations } from "next-intl";
import { SubmitApplicationFormResponse } from "@/types";
import { cn } from "@/lib/utils";
import { CustomButton } from "./custom/buttons";
import { XIcon } from "./Icons";
import useClickOutside from "../hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";

type InputColor = "blue" | "white";

type Props = {
  type?: "contact" | "catalog";
  inputColor?: InputColor;
  btnColor?: "green" | "white";
};

const ApplicationForm = ({
  type = "contact",
  inputColor = "white",
  btnColor = "green",
}: Props) => {
  const locale = useLocale();
  const t = useTranslations("Form");

  const [response, setResponse] =
    useState<SubmitApplicationFormResponse | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const target = useRef<HTMLDivElement>(null);
  useClickOutside(target, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";

      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await submitApplicationForm(formData, locale);
    setResponse(result);
    setIsOpen(true);

    console.log(result);
  }
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-2"
      >
        <FormInput name="name" color={inputColor} placeholder={t("name")} />
        <FormInput
          name="contact"
          color={inputColor}
          placeholder={t("contact")}
        />
        {type === "contact" ? (
          <FormInput
            type="textarea"
            name="message"
            color={inputColor}
            placeholder={t("message")}
          />
        ) : (
          <FormInput
            name="company"
            color={inputColor}
            placeholder={t("company")}
          />
        )}

        <CustomButton color={btnColor} type="submit">
          {t("submit")}
        </CustomButton>
      </form>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 size-full z-modal bg-blue-500 flex-center backdrop-blur"
          >
            <div
              className="bg-green-main max-w-[36rem] w-[calc(100%-2rem)] p-8 md:p-16 relative text-white-main flex flex-col items-center gap-8"
              ref={target}
            >
              <button
                className="absolute top-4 right-4 flex-center size-8"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="size-full" />
              </button>

              {response?.status === "success" ? (
                <SuccessIcon className="size-[9rem] lg:size-[11rem]" />
              ) : (
                <ErrorIcon className="size-[9rem] lg:size-[11rem]" />
              )}

              <p className="text-center text-xl lg:text-[1.75rem] font-semibold">
                {response?.status === "success" ? t("success") : t("failed")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplicationForm;

type FormInputProps = {
  color: InputColor;
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
};

function FormInput({
  color,
  name,
  type = "text",
  className,
  placeholder = "",
}: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      className={cn(
        "w-full ring-1 ring-transparent outline-none h-14 text-white-main placeholder:text-white-500 px-4 hover:ring-white-400 focus:ring-white-main ",
        className,
        {
          "bg-white-100 focus:bg-white-200": color === "white",
          "bg-blue-500 focus:bg-blue-600": color === "blue",
        }
      )}
      placeholder={placeholder}
    />
  );
}

function SuccessIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="264"
      height="264"
      viewBox="0 0 264 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle opacity="0.1" cx="132" cy="132" r="132" fill="white" />
      <circle opacity="0.1" cx="133" cy="132" r="108" fill="white" />
      <circle cx="133" cy="132" r="72" fill="white" />
      <path
        d="M108.999 126H120.999V152H108.999C108.468 152 107.959 151.789 107.584 151.414C107.209 151.039 106.999 150.53 106.999 150V128C106.999 127.47 107.209 126.961 107.584 126.586C107.959 126.211 108.468 126 108.999 126V126Z"
        stroke="#00C6B7"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120.999 126L130.999 106C132.049 106 133.089 106.207 134.06 106.609C135.031 107.011 135.913 107.6 136.655 108.343C137.398 109.086 137.988 109.968 138.39 110.939C138.792 111.909 138.999 112.949 138.999 114V120H154.467C155.035 120 155.595 120.121 156.112 120.354C156.629 120.587 157.091 120.928 157.466 121.353C157.841 121.778 158.122 122.278 158.289 122.82C158.457 123.362 158.507 123.933 158.437 124.496L155.437 148.496C155.316 149.464 154.846 150.353 154.115 150.999C153.384 151.644 152.442 152 151.467 152H120.999"
        stroke="#00C6B7"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="264"
      height="264"
      viewBox="0 0 264 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle opacity="0.1" cx="132" cy="132" r="132" fill="white" />
      <circle opacity="0.1" cx="133" cy="132" r="108" fill="white" />
      <circle cx="133" cy="132" r="72" fill="white" />
      <path
        d="M132 156C145.255 156 156 145.255 156 132C156 118.745 145.255 108 132 108C118.745 108 108 118.745 108 132C108 145.255 118.745 156 132 156Z"
        stroke="#FF0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132 120V134"
        stroke="#FF0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132 145.5C133.381 145.5 134.5 144.381 134.5 143C134.5 141.619 133.381 140.5 132 140.5C130.619 140.5 129.5 141.619 129.5 143C129.5 144.381 130.619 145.5 132 145.5Z"
        fill="#FF0000"
      />
    </svg>
  );
}
