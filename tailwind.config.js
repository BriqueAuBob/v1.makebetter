const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  jit: true,
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  safelist: [
    'bg-background',
    'dark:bg-dark-950',
    'dark:text-white',
    'transition',
    'ease-in',
    'duration-100',
    'scroll-smooth'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: {'max': '550px'}
      },
      colors: {
        "background": "#EBF1FF",
        'blurple': '#5865F2',
        "black": "#161616",
        "white": "#f9f9f9",
        "primary": {
          "50": "#e5eeff",
          "100": "#ccddff",
          "200": "#99bbff",
          "300": "#6699ff",
          "400": "#3377ff",
          "500": "#004be0",
          "600": "#0044cc",
          "700": "#003399",
          "800": "#002266",
          "900": "#001133",
          "950": "#00081a"
        },
         "secondary": {
          "50": "#fff6e6",
          "100": "#feeecd",
          "200": "#fddc9b",
          "300": "#fdcb68",
          "400": "#fcba36",
          "500": "#fbaa07",
          "600": "#c98703",
          "700": "#976502",
          "800": "#644302",
          "900": "#322201",
          "950": "#191100"
        },
        "green": {
          "50": "#e9fbf2",
          "100": "#d3f8e4",
          "200": "#a8f0ca",
          "300": "#7ce9af",
          "400": "#50e294",
          "500": "#20bf6a",
          "600": "#1daf61",
          "700": "#168349",
          "800": "#0f5731",
          "900": "#072c18",
          "950": "#04160c"
        },
        "red": {
          "50": "#fde8ec",
          "100": "#fad1d8",
          "200": "#f6a2b2",
          "300": "#f1748b",
          "400": "#ec4664",
          "500": "#eb3b5b",
          "600": "#b91331",
          "700": "#8b0e25",
          "800": "#5d0919",
          "900": "#2e050c",
          "950": "#170206"
        },
        "grey": {
          "50": "#f2f2f2",
          "100": "#e6e6e6",
          "200": "#cccccc",
          "300": "#b3b3b3",
          "400": "#999999",
          "500": "#212121",
          "600": "#666666",
          "700": "#4d4d4d",
          "800": "#333333",
          "900": "#1a1a1a",
          "950": "#0d0d0d"
        },
        "dark": {
          "50": "#f1f1f4",
          "100": "#e2e2e9",
          "200": "#c5c5d3",
          "300": "#a8a8bd",
          "400": "#8b8ba7",
          "500": "#585874",
          "600": "#585874",
          "700": "#424257",
          "800": "#2c2c3a",
          "900": "#16161d",
          "950": "#0b0b0e"
        }
      },
      zIndex: {
        '-1': '-1',
      },
      maxHeight: {
        'screen-padding': 'calc(100vh - 6rem)'
      }
    }
  },
  plugins: [],
};