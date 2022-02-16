module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(253, 99%, 50%)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
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
