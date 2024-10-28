"use client";

import { useState } from "react";
import { submitApplicationForm } from "../actions/submitApplicationForm";
import { useLocale, useTranslations } from "next-intl";
import { SubmitApplicationFormResponse } from "@/types";
import { cn } from "@/lib/utils";
import { CustomButton } from "./custom/buttons";

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await submitApplicationForm(formData, locale);
    setResponse(result);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
        <FormInput name="name" color={inputColor} placeholder={t("name")} />
        <FormInput
          name="contact"
          color={inputColor}
          placeholder={t("contact")}
        />
        {type === "contact" ? (
          <FormInput
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

      {response && <p>{response.message}</p>}
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
