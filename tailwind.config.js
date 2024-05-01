/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hrborder: "#353535",
        mainbg: "#000000",
        secondaryColor: "#4E4FEB",
        tertiaryColor: "#EEEEEE",
        primary: "#D5D5D5",


        lightmainbg: "#FFFBF5",
        lighthr: "#C3ACD0",
        lightsecondaryColor: "#7743DB",
        lightteriaryColor: "#F7EFE5"
      },
      fontFamily: {
        poppinsR: "PoppinsR",
        poppinsB : "PoppinsB"
      },
      spacing: {
        18: "70px"
      },
      borderRadius: {
        30: "30px"
      },
      boxShadow: {
        customshadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
      },
    },
  },
  plugins: [],
}