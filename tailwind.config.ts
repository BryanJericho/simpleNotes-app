module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}', // Pastikan untuk mencakup folder app jika diperlukan
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          light: '#f5f5f5',  // Warna untuk light mode
          DEFAULT: '#d1d1d1',
          dark: '#222222',   // Warna untuk dark mode
        },
        navy: '#001f3f',    // Biru tua
        lightBlue: '#0074D9', // Biru terang
      },
    },
  },
  plugins: [],
};
