module.exports = {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          light: '#f5f5f5',  // Warna untuk light mode
          DEFAULT: '#d1d1d1',
          dark: '#222222',   // Warna untuk dark mode
        },
        navy: '#001f3f',   
        lightBlue: '#0074D9', 
      },
    },
  },
  plugins: [],
};
