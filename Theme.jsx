import React from 'react';
import { ThemeProvider } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  colors: {
    lightCyan: 'hsl(193, 38%, 86%)',
    neonGreen: 'hsl(150, 100%, 66%)',
    grayishBlue: 'hsl(217, 19%, 38%)',
    darkGrayishBlue: 'hsl(217, 19%, 24%)',
    darkBlue: 'hsl(218, 23%, 16%)',
  },
  fonts: ['sans-serif', 'Manrope'],
  fontSizes: {
    smallMobile: '11px',
    smallDesktop: '13px',
    regularMobile: '24px',
    regularDesktop: '28px',
    large: '42px',
  },
  deviceMin: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
