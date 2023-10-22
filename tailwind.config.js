/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        cursor: {
          '0%': { opacity: 0 },
          '40%': { opacity: 0 },
          '50%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        takeoff: {
          '0%': { bottom: '5%' },
          '5%': { bottom: '7.5%' },
          '10%': { bottom: '10%' },
          '15%': { bottom: '12.5%' },
          '20%': { bottom: '15%' },
          '25%': { bottom: '17.5%' },
          '30%': { bottom: '20%' },
          '35%': { bottom: '22.5%' },
          '40%': { bottom: '25%' },
          '45%': { bottom: '30%' },
          '50%': { bottom: '35%' },
          '55%': { bottom: '40%' },
          '60%': { bottom: '45%' },
          '65%': { bottom: '50%' },
          '70%': { bottom: '55%' },
          '75%': { bottom: '60%' },
          '80%': { bottom: '65%' },
          '85%': { bottom: '70%', opacity: 0.75 },
          '90%': { bottom: '80%', opacity: 0.5 },
          '95%': { bottom: '90%', opacity: 0.25 },
          '100%': { bottom: '100%', opacity: 0 },
        },
        glow_flicker: {
          '0%': { filter: 'drop-shadow(0px 0px 15px #00f428)' },
          '100%': { filter: 'drop-shadow(0px 0px 5px #fff)' },
        },
        glow_flicker_alt: {
          '0%': { filter: 'drop-shadow(0px 0px 7.5px #00f428)' },
          '100%': { filter: 'drop-shadow(0px 0px 2.5px #00f428)' },
        },
        glow_flicker_gold: {
          '0%': { filter: 'drop-shadow(0px 0px 7.5px #ffd700)' },
          '100%': { filter: 'drop-shadow(0px 0px 2.5px #ffd700)' },
        },
        glow_flicker_red: {
          '0%': { filter: 'drop-shadow(0px 0px 7.5px #ff7276)' },
          '100%': { filter: 'drop-shadow(0px 0px 2.5px #ff7276)' },
        },
        screen_static: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '20% 25%' },
          '50%': { backgroundPosition: '-25% 10%' },
          '60%': { backgroundPosition: '15% 5%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '25% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        tada: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '10%, 20%': {
            transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
          },
          '40%, 60%, 80%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
          },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
      },
      animation: {
        cursor: 'cursor 1s infinite',
        takeoff: 'takeoff 0.75s forwards',
        glow_flicker: 'glow_flicker 0.05s ease infinite',
        glow_flicker_alt: 'glow_flicker_alt 0.05s ease infinite',
        glow_flicker_gold: 'glow_flicker_gold 0.05s ease infinite',
        glow_flicker_red: 'glow_flicker_red 0.05s ease infinite',
        screen_static: 'screen_static 0.01s infinite',
        tada: 'tada 1s forwards',
      },
    },
    fontFamily: {
      console: ['Martian Mono', 'monospace'],
    },
  },
  plugins: [],
};
