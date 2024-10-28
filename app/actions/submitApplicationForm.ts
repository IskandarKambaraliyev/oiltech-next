"use server";

import { SubmitApplicationFormResponse } from "@/types";
import useApiRoute from "../hooks/useApiRoute";

export async function submitApplicationForm(
  formData: FormData,
  locale: string
) {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const company = formData.get("company") as string | null;
  const message = formData.get("message") as string | null;

  const body = JSON.stringify({ name, contact, company, message });

  try {
    const response = await fetch(useApiRoute(`/application`, locale), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error("Failed to submit application form");
    }

    return {
      status: "success",
      message: "Application submitted",
      response,
    } as SubmitApplicationFormResponse;
  } catch (error) {
    return {
      status: "error",
      message: "Application failed",
      error,
    } as SubmitApplicationFormResponse;
  }
}
