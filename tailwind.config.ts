import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    colors: {
      white: '#ffffff',
      light: '#f0f8ff',
      light2: '#e3eaf0',
      'dark-gray': '#333333',
      'dark-gray2': '#212529',
      'dark-background': '#1D2226',
      'light-gray': '#5e666d',
      primary: '#610bd9',
      'primary-dark': '#5617ae',
      secondary: '#d629d9',
      // blog colors
      dark: '#1b1b1b',
      gray: '#747474',
    },
    extend: {
      backgroundImage: {
        header: "url('/images/teacher-and-little-girl-banner.webp')",
        homePageVideo: "url('/images/teacher-with-her-students.jpg')",
        homePageImage:
          "url('/images/university-students-throwing-their-caps-up.jpg')",
      },
      boxShadow: {
        'primary-shadow':
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      borderRadius: {
        primary: '4px',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
