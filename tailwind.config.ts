import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkModeBg: 'var(--hello)',
      },
    },
    screens: {
      sm: { min: '375px', max: '819px' },
      md: { min: '820px', max: '1099px' },
      lg: { min: '1100px' },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
