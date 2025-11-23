/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f1-red': '#e10600',
        'dark-bg': '#0a0a0a',
        'panel-gray': '#1a1a1a',
        'panel-border': '#2a2a2a',
        'text-gray': '#a0a0a0',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'racing': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-red': '0 0 10px rgba(225, 6, 0, 0.5)',
        'panel': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
