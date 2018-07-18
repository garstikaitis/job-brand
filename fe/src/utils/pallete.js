import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '#000051',
      contrastText: '#e8eaf6',
    },
    secondary: {
      light: '#ff94c2',
      main: '#f06292',
      dark: '#ba2d65',
      contrastText: '#fafafa',
    },
  },
});

export default theme;
