import { createMuiTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

const theme = createMuiThem({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

export default theme
