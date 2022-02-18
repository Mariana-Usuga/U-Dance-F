// const defaultTheme = require('tailwindcss/defaultThem');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo-landing': "url('https://res.cloudinary.com/db3njhxi0/image/upload/v1644634655/U-Dance/WhatsApp_Image_2022-02-11_at_9.56.11_PM_iwu2a1.jpg')",
      },
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
      playball: "'Playball', 'display'",
      poppins: "'Poppins', 'sans-serif'",
      montserrat: "'Montserrat', 'sans-serif'",
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
