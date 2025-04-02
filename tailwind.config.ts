import type { Config } from "tailwindcss";

export default {
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
        brand: {
          saturated: " #0E86FF",
          light: "#EBF5FF",
          dark: "#011F3C",
        },
        border: {
          primary: "#D0D5DD"
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1248px',
          '2xl': '1248px',
        },
      },
      text: {
        secondary: "#4E5F6E"
      }
    },
  },
  plugins: [],
} satisfies Config;
