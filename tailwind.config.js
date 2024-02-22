/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      // Change variable colors easily inside index.css@6
      colors: {
        'background': 'var(--background-color)',
        'card': 'var(--card-color)',
        'body': 'var(--body-color)',
        'body-off': 'var(--body-off-color)',
        'accent': 'var(--accent-color)',
        'link': 'var(--link-color)',
        'link-hover': 'var(--link-hover-color)',
        'danger': 'var(--danger-color)',
        'danger-hover': 'var(--danger-hover-color)',
      }
    },
  },
  plugins: [],
}

