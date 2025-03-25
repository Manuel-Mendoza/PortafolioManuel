/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-in': 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      textWrap: {
        balance: 'balance',
      },
    },
  },
  plugins: [
    require("daisyui"),
    // Habilitar características experimentales
    function({ addVariant }) {
      addVariant('modern', '@supports (text-wrap: balance)');
    },
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  // Habilitar las últimas características
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    colorDeduplication: true,
  },
} 