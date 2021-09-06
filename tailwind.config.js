module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "desktop-home-page":
          "url('/src/components/DesktopHomePage/gray-black-bg.svg')",
        BioITB: "url('/src/components/Bio/LogoITB1.png')",
      }),
      height: {
        semilg: "26rem",
        lg: "651px",
      },
      width: {
        md: "28rem",
        lg: "35rem",
        xl: "66rem",
      },
      margin: {
        30: "7.3rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "gray-350": "#c4c4c4",
        "gray-250": "#D7D7D7",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
