module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "450px" },
        sm: { min: "450px", max: "640px" },
        md: { min: "640px", max: "1200px" },
      },
      backgroundImage: (theme) => ({
        "desktop-home-page":
          "url('/src/components/DesktopHomePage/gray-black-bg.svg')",
        BioITB: "url('/src/components/Bio/LogoITB2.png')",
        projects: "url('/src/components/Projects/bg-projects.svg')",
        menu: "url('/src/components/Menu/bg-image.svg')",
        mobile: "url('/src/components/MobileHomePage/mobile.svg')",
        profile: "url('/src/components/DesktopHomePage/profile-pic.png')",
      }),
      height: {
        semilg: "26rem",
        lg: "651px",
      },
      width: {
        md: "28rem",
        semilg: "480px",
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
