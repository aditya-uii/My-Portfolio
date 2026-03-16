/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lofi: {
          bg: "rgb(var(--lofi-bg) / <alpha-value>)",
          surface: "rgb(var(--lofi-surface) / <alpha-value>)",
          primary: "rgb(var(--lofi-primary) / <alpha-value>)",
          text: "rgb(var(--lofi-text) / <alpha-value>)",
          muted: "rgb(var(--lofi-muted) / <alpha-value>)",
          accent1: "rgb(var(--lofi-accent1) / <alpha-value>)",
          accent2: "rgb(var(--lofi-accent2) / <alpha-value>)",
          accent3: "rgb(var(--lofi-accent3) / <alpha-value>)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        'float-particle': 'float-particle 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-particle': {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '25%': { opacity: '0.6' },
          '75%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-150px) translateX(50px)', opacity: '0' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
