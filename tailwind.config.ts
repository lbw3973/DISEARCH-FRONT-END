/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1048px",
      "2xl": "1400px",
    },
    fontFamily: {
      Pretendard: ["Pretendard"],
    },
    extend: {
      height: {
        withoutHeader: "calc(100vh - 130px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
