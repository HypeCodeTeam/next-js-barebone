import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#405caf', // todo primary color
    },
    secondary: {
      // main: '#17a2b8', // todo secondary color
    },
    text: {
      // primary: '#23233e', // todo primary text color
    },
    error: {
      // main: '#d0021b', // todo error main color
    },
    warning: {
      // main: '#fd7e14', // todo warning main color
    },
  },

  components: {
    // Override Component's style
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiButton-containedSecondary': {
    //         background: '#333'
    //       }
    //     }
    //   }
    // }
  },

  typography: {
    // Override the typography
    // h1: {
    //   color: '#000000DE',
    //   fontSize: 44,
    //   lineHeight: '44px',
    // },
    // h2: {
    //   color: '#000000DE',
    //   fontSize: 36,
    //   lineHeight: '36px',
    //   fontWeight: 'lighter',
    // },
    // h3: {
    //   color: '#000000DE',
    //   fontSize: 22,
    //   lineHeight: '24px',
    //   fontWeight: 'bold',
    // },
    // subtitle1: {
    //   color: '#1F1F1F',
    //   fontSize: 20,
    //   lineHeight: '30px',
    //   fontWeight: 'normal',
    // },
    // subtitle2: {
    //   color: '#939393',
    //   fontSize: 13,
    //   lineHeight: '16px',
    //   fontWeight: 'normal',
    // },
    // body1: {
    //   fontSize: 16,
    //   color: '#1F1F1F',
    //   lineHeight: '16px',
    //   fontWeight: 'normal',
    // },
    // body2: {
    //   fontSize: 14,
    //   color: '#1F1F1F',
    //   lineHeight: '14px',
    //   fontWeight: 'normal',
    // },
  },
});

export default theme;
