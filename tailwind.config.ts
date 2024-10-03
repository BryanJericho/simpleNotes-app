module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          light: '#f5f5f5',
          DEFAULT: '#d1d1d1',
          dark: '#222222',
        },
      },
    },
  },
  plugins: [],
};
