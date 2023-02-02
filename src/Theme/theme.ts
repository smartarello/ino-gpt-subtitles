import { createTheme, Theme } from '@mui/material/styles';

export const defaultPrimaryColor = '#F100A5';
export const defaultSecondaryColor = '#00FF00';

export const createPlatformTheme = (primaryColor: string, secondaryColor: string): Theme => createTheme({
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    tonalOffset: {
      light: 0.7,
      dark: 0.7,
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});
