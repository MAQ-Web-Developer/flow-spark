import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-400": "var(--accent-400)",
        "neutral-100": "var(--neutral-100)",
        "neutral-200": "var(--neutral-200)",
        "neutral-300": "var(--neutral-300)",
        "neutral-400": "var(--neutral-400)",
        "neutral-600": "var(--neutral-600)",
        "neutral-800": "var(--neutral-800)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "tertiary-400": "var(--tertiary-400)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-normal": "var(--body-normal-font-family)",
        "body-normal-heavy": "var(--body-normal-heavy-font-family)",
        "body-small": "var(--body-small-font-family)",
        "body-small-heavy": "var(--body-small-heavy-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
      },
    },
  },
  plugins: [],
};
export default config;
