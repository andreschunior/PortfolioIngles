import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0D1B2A',
        'blue-gray': '#1B263B',
        'coral': '#FF6F61',
        'light-gray': '#F0F4F8',
        'dark-gray': '#333333',
        'mint-green': '#2DD6A4',
        'light-sky-blue': '#A2C2E1'
      },
    },
  },
  plugins: [],
};
export default config;
