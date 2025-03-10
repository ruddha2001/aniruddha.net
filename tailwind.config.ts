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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFD600",
        secondary: "#FF5C00",
      },
      fontSize: {
        aboutMeLarge: "31rem",
      },
      height: {
        aboutMeLarge: "30rem",
      },
      spacing: {
        aboutMeExtra: "22rem",
      },
      listStyleImage: {
        checkmark: 'url("/checkmark.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
