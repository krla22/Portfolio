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
        // Black sidebar / header
        ink: {
          DEFAULT: '#0B0B0B',
          2: '#151515',
          line: '#2A2A2A',
          text: '#D6D6D6',
        },
        // White content area
        heading: '#111111',
        body: '#3F3F3F',
        muted: '#5E5E5E',
        line: '#E4E4E4',
        surface: '#F6F7F6',
        // Royal green — DEFAULT passes AA as text on white and under white text;
        // use `light` for green text on black.
        royal: {
          DEFAULT: '#046A38',
          dark: '#03522B',
          light: '#3DBE7A',
          tint: '#E8F3ED',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
