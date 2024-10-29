"use server";

import useApiRoute from "../hooks/useApiRoute";

import { SubmitApplicationFormResponse } from "@/types";

export async function submitApplicationForm(
  formData: FormData,
  locale: string
) {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const company = formData.get("company") as string | null;
  const message = formData.get("message") as string | null;

  const body = JSON.stringify({
    name: name.trim(),
    contact: contact.trim(),
    company: company ? company.trim() : null,
    message: message ? message.trim() : null,
  });

  try {
    const response = await fetch(useApiRoute(`/application/`, locale), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error("Failed to submit application form");
    }

    const result = await response.text();
    return {
      status: "success",
      message: "Application submitted",
      url: result,
    } as SubmitApplicationFormResponse;
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Application failed",
    } as SubmitApplicationFormResponse;
  }
}
