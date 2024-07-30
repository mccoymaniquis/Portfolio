import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image': "url('/killua.svg')",
      },
      colors: {
        neutral: {
          50: '#EEF3F7',
          100: '#D1D6DB',
          300: '#838F9D',
          500: '#444B54',
          900: '#333333',
          white: '#FFFFFF',
        },
        primary: {
          50: '#E9F5FF',
          100: '#79C2FF',
          300: '#008BFF',
          500: '#0059B6',
          900: '#003F80',
        },
        success: {
          50: '#DCFDF7',
          100: '#B0EFE3',
          300: '#6CE4CC',
          500: '#0FB495',
          900: '#008169',
        },
        warning: {
          50: '#FEE6D7',
          100: '#F3A678',
          200: '#FB8D1D',
          300: '#E17D41',
          500: '#E26413',
          900: '#592300',
        },
        error: {
          50: '#FFDADA',
          100: '#FF9E9E',
          300: '#EF5D5D',
          500: '#FD2626',
          900: '#6C0000',
        },
        blue: '#005BBB',
        title: {
          50: '#070F2B',
        },
      },
      boxShadow: {
        'reverse-md': '0 -4px 6px 1px rgb(0 0 0 / 0.05)',
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'text-xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        custom: ['Century', 'sans-serif'],
        friend: ['Friend', 'sans-serif'],
      },
      backgroundColor: {
        // main: '#070F2B',
        main: '#070F2B',
        sub: '#535C91',
        progress: '#535C91',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-sm': {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-lg': {
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-xl': {
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
          },
        },
        {
          respectPrefix: false,
          respectImportant: false,
        }
      )
    }),
  ],
}
export default config
