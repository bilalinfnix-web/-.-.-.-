Entermodule.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          50: '#6b7280',
          100: '#374151',
          200: '#1f2937',
          300: '#111827',
        },
        minecraft: {
          green: '#3CB043',
          dark: '#2D5016'
        },
        freefire: {
          red: '#FF0000',
          orange: '#FF7F00'
        }
      },
      fontFamily: {
        'gaming': ['Orbitron', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'neon': 'neon 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #3b82f6' },
          '50%': { boxShadow: '0 0 20px #3b82f6, 0 0 30px #3b82f6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        'neon': {
          'from': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #3b82f6, 0 0 40px #3b82f6' },
          'to': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #3b82f6, 0 0 20px #3b82f6' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gaming': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      }
    },
  },
  plugins: [],
}
