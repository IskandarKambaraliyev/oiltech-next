import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { DataProvider } from "../context/DataContext";
import { ServicesProvider } from "../context/ServicesContext";
import { BlogProvider } from "../context/BlogContext";
import { HeaderProvider } from "../context/HeaderContext";

import Header from "@/components/header/Header";
import HeaderCatalogModal from "@/components/header/CatalogModal";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: "ru" | "uz" };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HeaderProvider>
        <DataProvider>
          <ServicesProvider>
            <BlogProvider>
              <Header />
              <HeaderCatalogModal />

              <main>{children}</main>

              <Footer />

              {modal && <AnimatePresence>{modal}</AnimatePresence>}
            </BlogProvider>
          </ServicesProvider>
        </DataProvider>
      </HeaderProvider>
    </NextIntlClientProvider>
  );
}
