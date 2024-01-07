/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx"],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
    },
  },
  plugins: [
  ],
  prefix: 'tw-',
}

