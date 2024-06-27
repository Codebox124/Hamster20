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
          brown: '#5B3202', 
          yellow: '#FFFF91', 
          orange: '#FFA500', 
          blue: '#1E90FF' ,
          green: '#008082'

      },
    },
  },
  plugins: [],
};

export default config;
