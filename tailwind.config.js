import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'zim-green': {
          DEFAULT: '#8add42',
          light: '#bbff81',
          dark: '#789d4a',
        },
        'neon-magenta': '#ff10f0',
        'cyber-cyan': '#26f4de',
        'acid-lime': '#4aff28',
        'deep-purple': '#1e1e3f',
        'hot-pink': '#ea00d9',
        'void-black': '#121212',
        'neon-yellow': '#ffff0f',
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
        heading: ['Bungee', 'Impact', 'system-ui', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['"Rubik Distressed"', 'monospace', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 16, 240, 0.6), 0 0 40px rgba(234, 0, 217, 0.4)',
        'neon-cyan': '0 0 15px rgba(38, 244, 222, 0.6), 0 0 30px rgba(10, 189, 198, 0.4)',
        'zim-glow': '0 0 25px rgba(138, 221, 66, 0.6)',
      },
      animation: {
        fade: 'fadeInUp 1s both',
        glitch: 'glitch 1.5s infinite',
        sparkle: 'sparkle 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)', opacity: 1 },
          '20%': { transform: 'translate(-2px, 2px)', opacity: 0.9 },
          '40%': { transform: 'translate(2px, -2px)', opacity: 0.9 },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
};
