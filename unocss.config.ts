import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'



export default defineConfig({
  cli: {
    entry: {
      patterns: [
        './company/**/*.html', 
        './template/**/*.html',
        './libs/scripts/*.js'
      ],
      outFile: 'style.build.css',
    }, 
  },
  theme: {
    colors: {
      cool: '#2cbbcb',
    },
    fontSize: {
      xs: ['0.625rem', { 'line-height': '1.4' }],
      sm: ['0.75rem', { 'line-height': '1.5' }],
      base: ['1rem', { 'line-height': '1.5', 'letter-spacing': '-0.017em' }],
      lg: ['1.125rem', { 'line-height': '1.5', 'letter-spacing': '-0.017em' }],
      xl: ['1.25rem', { 'line-height': '1.5', 'letter-spacing': '-0.017em' }],
      '2xl': [
        '1.5rem',
        { 'line-height': '1.415', 'letter-spacing': '-0.017em' },
      ],
      '3xl': [
        '1.875rem',
        { 'line-height': '1.333', 'letter-spacing': '-0.017em' },
      ],
      '4xl': [
        '2.25rem',
        { 'line-height': '1.277', 'letter-spacing': '-0.017em' },
      ],
      '5xl': [
        '2.75rem',
        { 'line-height': '1.1', 'letter-spacing': '-0.017em' },
      ],
      '6xl': ['3.5rem', { 'line-height': '1', 'letter-spacing': '-0.017em' }],
      '7xl': ['4.5rem', { 'line-height': '1', 'letter-spacing': '-0.017em' }],
    },
    'letter-spacing': {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.4em',
    },
    animation: {
      endless: 'endless 20s linear infinite',
      shine: 'shine 5s linear 500ms infinite',
      float: 'float 2s ease-in-out infinite',
    },
    keyframes: {
      endless: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-245px)' },
      },
      shine: {
        '0%': {
          top: '0',
          transform: 'translateY(-100%) scaleY(10)',
          opacity: '0',
        },
        '2%': { opacity: '.5' },
        '40%': {
          top: '100%',
          transform: 'translateY(0) scaleY(200)',
          opacity: '0',
        },
        '100%': {
          top: '100%',
          transform: 'translateY(0) scaleY(1)',
          opacity: '0',
        },
      },
      float: {
        '0%': { transform: 'translateY(3%)' },
        '50%': { transform: 'translateY(-3%)' },
        '100%': { transform: 'translateY(3%)' },
      },
    },
  },
  rules: [['font-poppins', { 'font-family': 'poppins' }]],
  shortcuts: [
    {
      'btn': 'px-6 py-1 tracking-wider font-700 inline-block cursor-pointer !outline-none  disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      'btn-primary': 'bg-cool text-white hover:bg-cool-800',
      'btn-normal': 'bg-true-gray-100 text-[#104152] hover:bg-cool',
      'btn-ghost': 'bg-true-gray-100 text-[#104152] border-cool border-2px',
      'title-1': 'font-600 text-[2rem] md:text-[3.9rem] tracking-[-0.01em]',
      'title-3': 'font-600 text-xl md:text-2xl tracking-[-0.025em]',
      'article-para': 'flex flex-col gap-3 md:gap-0',
      'article-text': 'font-500 md:text-lg tracking-[0.006em] line-height-[1.6] md:line-height-7.8 hyphens-auto',
      'the-align-container': 'max-w-[1200px] mx-auto relative',
      
    },
    {
      'the-header-nav-btn': 'flex items-center cursor-pointer px-4.2 h-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      'the-footer-divider': 'w-full h-1px my-4 md:my-0 md:w-1px md:h-53 bg-gradient-to-r md:bg-gradient-to-b bg-gradient-from-transparent bg-gradient-to-transparent bg-gradient-via-bluegray',
      'the-footer-frame': 'w-full h-300 md:h-80 overflow-hidden',
      'the-header-frame': 'absolute z-10 w-full h-50 overflow-hidden'
    }
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // ...
})
