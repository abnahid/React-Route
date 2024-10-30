/* eslint-disable no-undef */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        "bg-01": "#695681",
        "bg-02": "#36184F",
        "bg-03": "#32243E",
      },
    },
  },
  plugins: [require("daisyui")],
};
