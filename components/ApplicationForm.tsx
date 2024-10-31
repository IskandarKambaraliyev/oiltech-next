"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import { submitApplicationForm } from "@/app/actions/submitApplicationForm";

import { CustomButton } from "./custom/buttons";

import { cn } from "@/lib/utils";
import useClickOutside from "@/app/hooks/useClickOutside";

import { useApplicationStatusStates } from "@/app/context/ApplicationStatusContext";

type InputColor = "blue" | "white";

type Props = {
  type?: "contact" | "catalog";
  inputColor?: InputColor;
  btnColor?: "green" | "white";
  onSubmitted?: (url: string) => void;
};

const ApplicationForm = ({
  type = "contact",
  inputColor = "white",
  btnColor = "green",
  onSubmitted,
}: Props) => {
  const locale = useLocale();
  const t = useTranslations("Form");

  const { setIsOpen, setResponse } = useApplicationStatusStates();

  const formRef = useRef<HTMLFormElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useClickOutside(target, () => setIsOpen(false));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await submitApplicationForm(formData, locale);

    setResponse(result);

    setIsOpen(true);

    if (formRef.current) {
      formRef.current.reset();
    }
    if (result && result.status === "success" && result.url && onSubmitted) {
      await onSubmitted(result.url);
    }
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
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        cols={3}
        className={cn(
          "w-full ring-1 ring-transparent outline-none text-white-main placeholder:text-white-500 px-4 hover:ring-white-400 focus:ring-white-main py-4 h-28 resize-none",
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
  return (
    <input
      type={type}
      name={name}
      className={cn(
        "w-full ring-1 ring-transparent outline-none h-14 text-white-main placeholder:text-white-500 px-4 hover:ring-white-400 focus:ring-white-main",
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
