/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        border: "0px", // Example custom border size
      },
      colors: {
        customColor: "#171717",
        borderBackground: "#313131",
        borderColor: "#BC9948",
        textBackground: "#7A7A7A",
        textColor: "#232323",
        textHoverColor: "#B2A65D",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(195,164,89,1) 0%, rgba(180,142,54,1) 35%)',
      },
    },
  },
  plugins: [],
};
