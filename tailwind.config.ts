import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|accordion).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue colors
        "blue-750": "var(--color-blue-750)",
        "blue-main": "var(--color-blue-main)",
        "blue-600": "var(--color-blue-600)",
        "blue-500": "var(--color-blue-500)",
        "blue-400": "var(--color-blue-400)",
        "blue-300": "var(--color-blue-300)",
        "blue-200": "var(--color-blue-200)",
        "blue-100": "var(--color-blue-100)",

        // Green colors
        "green-main": "var(--color-green-main)",
        "green-600": "var(--color-green-600)",
        "green-500": "var(--color-green-500)",
        "green-400": "var(--color-green-400)",
        "green-300": "var(--color-green-300)",
        "green-200": "var(--color-green-200)",
        "green-100": "var(--color-green-100)",

        // White colors
        "white-main": "var(--color-white-main)",
        "white-600": "var(--color-white-600)",
        "white-500": "var(--color-white-500)",
        "white-400": "var(--color-white-400)",
        "white-300": "var(--color-white-300)",
        "white-200": "var(--color-white-200)",
        "white-100": "var(--color-white-100)",
      },
      boxShadow: {
        "shadow-btn": "var(--shadow-btn)",
      },
      screens: {
        lg: "1280px",
        md: "768px",
        xl: "1600px",
      },
      zIndex: {
        "header-1": "4",
        header: "5",
        "header+1": "6",
        "modal-1": "9",
        modal: "10",
        "modal+1": "11",
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
    }),
  ],
};
export default config;
