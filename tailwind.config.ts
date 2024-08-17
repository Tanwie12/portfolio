import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spinInVoid: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        colorChange: {
          '0%': { backgroundColor: '#fbbf24' },
          '25%': { backgroundColor: '#fb923c' },
          '50%': { backgroundColor: '#f87171' },
          '75%': { backgroundColor: '#34d399' },
          '100%': { backgroundColor: '#fbbf24' },
        },
      },
      animation: {
        spinInVoid: 'spinInVoid 5s linear infinite',
        colorChange: 'colorChange 6s ease-in-out infinite',
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue": "#007bff",
        "custom-green": "#28a745",
        "custom-red": "#dc3545",
        "custom-yellow": "#FECD7A",
        "custom-gray": "#6c757d",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  
  
  plugins: [nextui()]
};
export default config;
