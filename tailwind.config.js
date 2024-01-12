/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#E5E5E5",
        secondaryWhite: "#FFFFFF",
        primaryBlue: "#002265",
        textBlue: "#082032",
        // secondaryBlue: "#14279B",
        primaryBlack: "#000000",
        secondaryBlue: "#608AF5",
      },
    },
  },
  plugins: [],
};
