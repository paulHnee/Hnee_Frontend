import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        modernGreen: {
          DEFAULT: '#004d3d', // Darker green color
          light: '#00FF00',   // Light green color
          dark: '#003300',    // Even darker green color
        },
      },
    },
  },
  plugins: [],
};
export default config;
