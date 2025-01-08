/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLight: '#ffffff',
        primaryDark: '#363738',
        secondary: '#f5f5f5',
        secondaryPink: '#fefaf1',
        tertiary: '#db4444',
        lightYellow: '#FFAD33',
        bgLight: '#ffffff',
        bgDark: '#000000',
        texLight: '#fafafa',
        textGray: '#788184',
        textDark: '#000',
        btnTextColor: '#f5f5f5',
        btnBgColor: '#00ff66',
        btnHoverPrimary: '#e07575',
        btnHoverSecondary: '#a0bce0',
      },
    },
  },
  plugins: [],
};
