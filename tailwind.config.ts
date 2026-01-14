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
        // PsyopAnime dark theme colors
        primary: {
          red: '#dc2626',
          redDark: '#b91c1c',
          redLight: '#ef4444',
        },
        // Background colors
        dark: {
          black: '#000000',
          charcoal: '#0a0a0a',
          gray: '#111111',
          lighter: '#1a1a1a',
        },
        accent: {
          red: '#dc2626',
          redGlow: '#ff3333',
          crimson: '#7f1d1d',
        },
        // Functional colors
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        // Text colors
        text: {
          primary: '#ffffff',
          secondary: '#a1a1a1',
          muted: '#6b7280',
          red: '#dc2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
        japanese: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(to right, #7f1d1d 0%, #dc2626 50%, #7f1d1d 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0a0a0a 0%, #000000 100%)',
        'glow-red': 'radial-gradient(circle, rgba(220,38,38,0.3) 0%, transparent 70%)',
        'scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.5)',
        'red-glow-sm': '0 0 10px rgba(220, 38, 38, 0.3)',
        'red-glow-lg': '0 0 40px rgba(220, 38, 38, 0.6)',
        'inner-red': 'inset 0 0 20px rgba(220, 38, 38, 0.2)',
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
          '75%': { opacity: '0.98' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
