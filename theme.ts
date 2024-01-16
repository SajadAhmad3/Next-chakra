import { extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      DEFAULT: '#FFD2A4',
      100: '#FFD2A4',
      200: '#A54E28',
    },
    black: {
      DEFAULT: '#161722',
      100: '#161722',
    },
    white: {
      DEFAULT: '#FFFFFF',
      100: '#FFFFFF',
    },
    orange: {
      DEFAULT: '#FFF5EB',
      100: '#FFF5EB',
    },
    grey: {
      DEFAULT: '#F5F2F0',
      100: '#F5F2F0',
      200: 'rgba(255, 255, 255, 0.15)',
    },
  },
  fonts: {
    heading: 'Roboto Condensed, sans-serif',
    body: 'Roboto Condensed, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '16px',
    ml: '18px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    xxl: '48px',
    '3xl': '64px',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1300px',
  },
  extend: {
  },
});

export default theme;
