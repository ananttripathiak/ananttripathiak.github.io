import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0c0d15',
          2: '#0f1018',
        },
        card: {
          DEFAULT: '#13141f',
          2: '#1a1b2e',
        },
        accent: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dim: 'rgba(37,99,235,0.12)',
          glow: 'rgba(37,99,235,0.30)',
        },
        t1: '#f8fafc',
        t2: '#94a3b8',
        t3: '#4b5563',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 12s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
