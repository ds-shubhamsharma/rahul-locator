/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@yext/search-ui-react/**/*.{js,ts,jsx,tsx}", // New
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'grey': '#716e67',
      'header-divider-color': '#f7edd9',
      'bg-color': '#f7edd9',
      'text-color': '#373a36',
      'content-text-color': '#373a36',
      'menu-items-text-color': '#373a36',
      'header-bg-color': '#373a36',
      'header-cta-bg-color': '#f7edd9',
      'header-text-color': '#f7edd9',
      'header-cta-text-color': '#373a36',
      'footer-bg-color': '#101010',
      'footer-text-color': '#f7edd9',
      'nav-button-text-color': '#f7edd9',
      'nav-button-bg-color': '#373a36',
      'title-text-color': '#215732',
      'coloured-text-color': '#215732',
      'button-border-color': '#894578',
      'primary-btn-bg-color': '#894578',
      'primary-btn-bg-hover-color': '#8eb0bd',
      'primary-btn-text-color': '#f7edd9',
      'primary-btn-text-hover-color': '#215732',
      'boxed-primary-btn-text-color': '#215732',
      'boxed-primary-btn-bg-color': '#f7edd9',
      'full-bleed-bg-color': '#89a84f',
      'dividing-line-color': '#215732',
      'dietary-requirements-bg-color': '#89a84f',
      'additional-toppings-border-color': '#215732',
      'link-text-color': '#fff'
    },
    fontFamily: {
      'main-text-font': ['"Campton", Georgia, Arial, sans-serif'],
      'title-text-font': ['"Larken", Georgia, Arial, sans-serif'],
    },
    extend: {
      backgroundImage: {
        'closeIcon': "url('images/close.svg')",
      }
    },
  },
  plugins: [],
};