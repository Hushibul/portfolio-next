import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    // fontSize: {
    //   base: ['16px', { lineHeight: '24px' }],
    // },
    extend: {
      colors: {
        body: '#fff',
        primary: '#766dff',
        secondary: '#88f3ff',
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
export default config;
