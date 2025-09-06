/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
}

