import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222831',
    },
    secondary: {
      main: '#EEEEEE',
    },
    text: {
      primary: grey[900],
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins,sans-serif',
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      },
    },
  },
  customColors: {
    lightBlue: '#00ADB5',
    darkGrey: '#393E46',
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      lightBlue: string;
      darkGrey: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColors?: {
      lightBlue?: string;
      darkGrey?: string;
    };
  }
}

export default theme;
