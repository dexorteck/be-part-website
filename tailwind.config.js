/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-teal': {
          light: '#5fdfc6',
          dark: '#02635a',
          medium: '#4fd1c7',
        },
        'brand-gold': {
          DEFAULT: '#f6e05e',
          light: '#faf089',
        },
        'gray': {
          925: '#1a202c',
          850: '#2d3748',
          900: '#171923',
        }
      },
      fontFamily: {
        'brand': ['Bepart', 'Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 