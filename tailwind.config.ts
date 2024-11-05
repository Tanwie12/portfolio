import type { Config } from "tailwindcss"
import {nextui} from "@nextui-org/react";

const config = {
  
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        signature: ['agustina', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        xs: '375px',
      },
      colors: {
        customYellow:'#FFC331',
        customDark:'#34353A',
        customLight:'blue',
        primary:'#FFC331', 

      },
      transitionTimingFunction: {
        'in-scroll': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      backgroundImage: {
        torch:
          'radial-gradient(525px at 50% 50%, var(--color-accent-torch), transparent 80%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
} satisfies Config

export default config