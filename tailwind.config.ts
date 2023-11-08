import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'fira-code': ['var(--font-fira-code)'],
      },

      transitionDelay: {
        airs: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1);',
      },
      boxShadow: {
        airs: '0 10px 30px -15px rgba(2,12,27,0.7)',
      },
      colors: {
        airs: {
          navy: '#0a192f',
          'light-navy': '#112240',
          'lightest-navy': '#233554',
          slate: '#8892b0',
          'light-slate': '#a8b2d1',
          'lightest-slate': '#ccd6f6',
          white: '#e6f1ff',
          green: '#64ffda',
          // 50: '#112240',
          // 100: '#64ffda',
          // 700: '#233554',
          // 900: '#020c1b',
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: {
            transform: 'translateY(-10px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 1s alternate infinite',
      },

      gridTemplateRows: {
        'featured-project': 'repeat(6, 1fr)',
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(20rem, 1fr))',
        'featured-project': 'repeat(12, 1fr)',
        'highlight-skills': 'repeat(2, minmax(140px , 200px))',
      },
      gridRow: {
        'span-1-1': '1 / -1',
      },
      gridColumn: {
        'span-1-7': '1 / 7',
        'span-6-1': '6 / -1',
        'span-1-1': '1 / -1',
      },
    },
  },
  plugins: [],
}
export default config
