import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#4945FF",
          600: "#3937CC",
          700: "#1C1C4E",
        },
      },
    },
  },
  plugins: [],
};

export default config;
