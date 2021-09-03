module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "desktop-home-page":
          "url('/src/components/DesktopHomePage/gray-black-bg.svg')",
        "test": "url('/src/components/Bio/LogoITB1.png')",
      }),
      height: {
        semilg: "26rem",
        lg: "651px",
      },
      margin: {
        30: "7.3rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "gray-350": "#c4c4c4",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
