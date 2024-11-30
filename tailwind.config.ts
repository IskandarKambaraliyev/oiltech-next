import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|accordion).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        "blue-750": "var(--color-blue-750)",
        "blue-main": "var(--color-blue-main)",
        "blue-600": "var(--color-blue-600)",
        "blue-500": "var(--color-blue-500)",
        "blue-400": "var(--color-blue-400)",
        "blue-300": "var(--color-blue-300)",
        "blue-200": "var(--color-blue-200)",
        "blue-100": "var(--color-blue-100)",
        "green-main": "var(--color-green-main)",
        "green-600": "var(--color-green-600)",
        "green-500": "var(--color-green-500)",
        "green-400": "var(--color-green-400)",
        "green-300": "var(--color-green-300)",
        "green-200": "var(--color-green-200)",
        "green-100": "var(--color-green-100)",
        "white-main": "var(--color-white-main)",
        "white-600": "var(--color-white-600)",
        "white-500": "var(--color-white-500)",
        "white-400": "var(--color-white-400)",
        "white-300": "var(--color-white-300)",
        "white-200": "var(--color-white-200)",
        "white-100": "var(--color-white-100)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "btn-green": "var(--shadow-btn-green)",
        "btn-blue": "var(--shadow-btn-blue)",
        "btn-white": "var(--shadow-btn-white)",
      },
      screens: {
        xl: "1650px",
        lg: "1280px",
      },
      zIndex: {
        "header-1": "4",
        header: "5",
        "header+1": "6",
        "modal-1": "9",
        modal: "10",
        "modal+1": "11",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
    }),
    require("tailwindcss-animate"),
  ],
};
export default config;
