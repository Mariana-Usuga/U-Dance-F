module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Lemonada', 'Arial', 'Comfortaa'],
      serif: ['Comfortaa'],
      mono: ['Comfortaa'],
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
