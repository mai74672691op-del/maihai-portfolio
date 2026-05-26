/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#F6F2E8',
        'grey-ink': '#5B5B5B',
        cinnabar: '#9F2E25',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        'serif-en': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'ink-spread': 'inkSpread 20s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        inkSpread: {
          '0%': { transform: 'scale(1) translate(0, 0)', opacity: '0.03' },
          '100%': { transform: 'scale(1.8) translate(-2%, -2%)', opacity: '0.06' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
