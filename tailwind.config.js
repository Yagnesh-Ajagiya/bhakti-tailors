export default {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'secondary-fixed-dim': '#e9c349',
        'surface-container-low': '#f9f3e2',
        'inverse-primary': '#ffb2be',
        'primary-container': '#e2165f',
        'outline-variant': '#e4bdc2',
        'tertiary-fixed': '#eddcff',
        'secondary-container': '#fed65b',
        'surface-bright': '#fff9e9',
        'on-tertiary-container': '#fffbff',
        'surface-container-lowest': '#ffffff',
        'tertiary-container': '#8a5cce',
        'primary-fixed-dim': '#ffb2be',
        'on-background': '#1d1c12',
        'surface-dim': '#dfdac9',
        'on-secondary-fixed-variant': '#574500',
        'secondary-fixed': '#ffe088',
        'surface-container-highest': '#e8e2d2',
        'secondary': '#735c00',
        'on-tertiary-fixed': '#280056',
        'on-error-container': '#93000a',
        'tertiary': '#7042b3',
        'on-primary-fixed-variant': '#900038',
        'error': '#ba1a1a',
        'surface-tint': '#bc004b',
        'inverse-surface': '#333125',
        'on-error': '#ffffff',
        'primary-fixed': '#ffd9de',
        'on-surface': '#1d1c12',
        'surface-container': '#f3eedd',
        'on-secondary-container': '#745c00',
        'surface-container-high': '#eee8d7',
        'on-secondary-fixed': '#241a00',
        'on-secondary': '#ffffff',
        'on-primary-container': '#fffbff',
        'surface': '#fff9e9',
        'error-container': '#ffdad6',
        'on-primary-fixed': '#400014',
        'tertiary-fixed-dim': '#d7baff',
        'background': '#fff9e9',
        'on-primary': '#ffffff',
        'on-surface-variant': '#5b3f43',
        'outline': '#8f6f73',
        'primary': '#b80049',
        'inverse-on-surface': '#f6f0e0',
        'surface-variant': '#e8e2d2',
        'on-tertiary': '#ffffff',
        'on-tertiary-fixed-variant': '#5a2a9c'
      },
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      }
    }
  }
}
