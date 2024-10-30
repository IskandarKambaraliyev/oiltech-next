import type { Metadata } from "next";
import localFont from "next/font/local";

import { NextUIProvider } from "@nextui-org/system";

import "./globals.scss";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-RegularItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Gilroy-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBoldItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Oiltech Service",
  description:
    "Высокое качество, инновационные сервисы и комплексный подход на рынке Узбекистана",
  openGraph: {
    images: ["/thumbnail.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable}`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
