import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import Header from "@/components/header/Header";
import HeaderCatalogModal from "@/components/header/CatalogModal";
import Footer from "@/components/Footer";
import Providers from "./providers";
import useFetchData from "../hooks/useFetchData";
import { DataApi, ServicesApi } from "@/types";
import ApplicationStatus from "@/components/ApplicationStatus";
import { Metadata } from "next";
import VideoModal from "@/components/VideoModal";

export async function generateStaticParams() {
  const locales = ["ru", "uz"];

  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Seo");
  return {
    title: t("main_title"),
    description: t("main_description"),
    openGraph: {
      images: "/thumbnail.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "ru" | "uz")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const services = await useFetchData<ServicesApi>("/services", locale);
  const dataApi = await useFetchData<DataApi>("/data", locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>
        {services && services.length > 0 && dataApi && (
          <Header services={services} data={dataApi} />
        )}
        <HeaderCatalogModal />
        <ApplicationStatus />
        <VideoModal />

        <main>{children}</main>

        {dataApi && <Footer data={dataApi} />}
      </Providers>
    </NextIntlClientProvider>
  );
}
