module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "desktop-home-page":
          "url('/src/components/DesktopHomePage/gray-black-bg.svg')",
      }),
      height: {
        semilg: "26rem",
        lg: "651px",
      },
      margin: {
        "30": "7.3rem",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'gray-350': '#c4c4c4',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
