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
        bouza: {
          navy: "#263D86",
          blue: "#0640CE",
          darkNavy: "#17306D",
          red: "#EB2027",
          yellow: "#F5B11A",
          gray: "#6D6E71",
        }
      },
    },
  },
  plugins: [],
};
export default config;
