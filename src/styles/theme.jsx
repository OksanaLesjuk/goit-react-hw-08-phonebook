import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // h1: 'h1',
          // h2: 'h2',
          // h3: 'h2',
          // h4: 'h2',
          // h5: 'h2',
          // h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          listStyleType: 'none',
          padding: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});
