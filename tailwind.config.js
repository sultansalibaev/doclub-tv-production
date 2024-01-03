/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 0px 15px 0px rgba(153, 153, 153, 0.20)'
      },
      spacing: {
        15: '3.75rem'
      },
      screens: {
        'md-auth-screen': { min: '850px' },
        'sm-auth-screen': { max: '850px' },
        'md-screen': { min: '820px' },
        'sm-screen': { max: '820px' },
        'xl-screen': { max: '1400px' },
        'mobile-screen': { max: '860px' },
        'desktop-screen': { min: '861px' }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        100: '#E6E4EC',
        200: '#BCB8CA',
        300: '#968FA9',
        400: '#78708F',
        500: '#413663',
        'neutral-100': '#F9F9FB',
        'neutral-200': '#F4F4F9',
        'neutral-300': '#E5E5F8',
        'neutral-400': '#C8C8E3',
        'neutral-500': '#9D9DBB',
        'neutral-600': '#555575',
        'neutral-700': '#3A3A5F',
        'primary-100': '#F9F8FF',
        'primary-200': '#F1ECFF',
        'primary-300': '#D8D1FF',
        'primary-400': '#ACA5FF',
        'primary-500': '#8365FE',
        'primary-600': '#7646FF',
        'primary-700': '#693FE3',
        'success-100': '#E7FFE7',
        'success-200': '#C9FBC9',
        'success-300': '#ADF2AC',
        'success-400': '#95DB94',
        'success-500': '#7EC07D',
        'success-600': '#5BA85A',
        'success-700': '#4C964B',
        'warning-100': '#FFFBE2',
        'warning-200': '#FFF9D1',
        'warning-300': '#FFF4AB',
        'warning-400': '#FFE381',
        'warning-500': '#FACC2B',
        'warning-600': '#E8B810',
        'warning-700': '#CFA200',
        'danger-100': '#FFEBEB',
        'danger-200': '#FFD6D6',
        'danger-300': '#F8BAB9',
        'danger-400': '#F18886',
        'danger-500': '#EA6361',
        'danger-600': '#DA3F3D',
        'danger-700': '#C51311',
        'link-default': '#7646FF',
        'link-visited': '#A957EA',
        'accent-1': '#F9B146',
        'accent-2': '#32AEEE',
        'accent-3': '#BA58A1',
        darkened: 'rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}
