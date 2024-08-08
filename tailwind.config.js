/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          "poppins-black": ["poppins-black"],
          "poppins-bold": ["poppins-bold"],
          "poppins-xBold": ["poppins-xBold"],
          "poppins-light": ["poppins-light"],
          "poppins-xLight": ["poppins-xLight"],
          "poppins-medium": ["poppins-medium"],
          "poppins-regular": ["poppins-regular"],
          "poppins-semiBold": ["poppins-semiBold"],
          "poppins-thin": ["poppins-thin"],
        },
        screens: {
          "xs": "550px",
          "2xs": "400px",
        },
    },
  },
  plugins: [],
}

