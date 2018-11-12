import React from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const BRAND = '#f78f31';
const BACKGROUND = '#fff';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: BRAND
    },
    background: {
      default: BACKGROUND
    }
  },
  typography: {
    useNextVariants: true
  },
});


function withMui(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withMui
