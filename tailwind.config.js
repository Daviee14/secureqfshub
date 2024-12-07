/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        'quantum-pulse-1': {
          '0%, 100%': { transform: 'scale(0.8) translateX(-10%)' },
          '50%': { transform: 'scale(1.2) translateX(10%)' },
        },
        'quantum-pulse-2': {
          '0%, 100%': { transform: 'scale(0.9) translateY(5%)' },
          '50%': { transform: 'scale(1.1) translateY(-5%)' },
        },
        'quantum-drift-1': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-10%) translateY(-5%)' },
          '75%': { transform: 'translateX(10%) translateY(5%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'rise-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out',
        'quantum-pulse-1': 'quantum-pulse-1 10s ease-in-out infinite',
        'quantum-pulse-2': 'quantum-pulse-2 12s ease-in-out infinite',
        'quantum-drift-1': 'quantum-drift-1 15s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-delay': 'fade-in 1s ease-out 0.5s forwards',
        'rise-up': 'rise-up 1s ease-out 0.7s forwards'
      }
    }
  },
  plugins: [],
}