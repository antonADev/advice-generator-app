import React from 'react';
import { ThemeProvider } from 'styled-components';

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
    small: '11px',
    regular: '24px',
    large: '42px',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
