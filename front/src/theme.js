import { createMuiTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

export default theme
