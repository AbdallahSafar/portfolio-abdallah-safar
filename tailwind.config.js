module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "640px" },
        md: { min: "650px", max: "1200px" },
      },
      backgroundImage: (theme) => ({
        "desktop-home-page":
          "url('/src/components/DesktopHomePage/gray-black-bg.svg')",
        BioITB: "url('/src/components/Bio/LogoITB2.png')",
        projects: "url('/src/components/Projects/bg-projects.svg')",
        "project-satisfying-food":
          "url('/src/components/Projects/satisfyingFood1.jpg')",
        "project-moviesApp": "url('/src/components/Projects/MoviesApp.png')",
        "project-walletApp": "url('/src/components/Projects/WalletApp.png')",
      }),
      height: {
        semilg: "26rem",
        lg: "651px",
      },
      width: {
        md: "28rem",
        lg: "35rem",
        semixl: "56rem",
        xl: "66rem",
      },
      margin: {
        30: "7.3rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "gray-350": "#c4c4c4",
        "gray-250": "#D7D7D7",
        "black-700": "#1D1D1D",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
