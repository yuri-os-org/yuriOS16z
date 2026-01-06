import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (elizaos.ai inspired)
        primary: {
          orange: '#ff5722',
          orangeDark: '#e64a19',
          orangeLight: '#ff7043',
        },
        // Background colors
        sky: {
          blue: '#87ceeb',
          light: '#b0e0e6',
          dark: '#6db3d8',
        },
        neutral: {
          black: '#1a1a1a',
          beige: '#f5f5dc',
          tan: '#d2b48c',
        },
        // Functional colors
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        // Text colors
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          inverse: '#ffffff',
          muted: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(to bottom, #87ceeb 0%, #b0e0e6 100%)',
        'dotted-pattern': 'radial-gradient(circle, rgba(255,87,34,0.15) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dotted': '20px 20px',
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 30s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
