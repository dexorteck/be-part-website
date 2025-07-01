/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        // Breakpoints específicos para MacBooks
        'macbook': '1440px',    // MacBook Pro 14" e 16"
        'macbook-air': '1280px', // MacBook Air 13"
        'macbook-small': '1024px', // MacBooks menores
        'macbook-large': '1680px', // MacBook Pro 16" com resolução alta
      },
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
        'montserrat': ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontSize: {
        // Tamanhos específicos para MacBooks
        'hero-xs': ['2.5rem', { lineHeight: '1.1' }],
        'hero-sm': ['3.5rem', { lineHeight: '1.1' }],
        'hero-md': ['4.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['5.5rem', { lineHeight: '1.1' }],
        'hero-xl': ['6.5rem', { lineHeight: '1.1' }],
        'hero-2xl': ['7.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        // Espaçamentos otimizados para MacBooks
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
} 