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
        primary: {
          10: 'hsl(0, 78%, 62%)', //red
          20: 'hsl(180, 62%, 55%)', //cyan 
          30: 'hsl(34, 97%, 64%)', //blue
          40: 'hsl(212, 86%, 64%)' //orange
        },
        neutral: {
          10: 'hsl(234, 12%, 34%)', //dark blue
          20: 'hsl(229, 6%, 66%)', //gray blue
          30: 'hsl(0, 0%, 98%)' //light gray
        }
      }
    },
  },
  plugins: [],
};
export default config;
