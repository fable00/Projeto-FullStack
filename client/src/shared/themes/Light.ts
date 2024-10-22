import { createTheme } from '@mui/material'
import { cyan, lightBlue } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightBlue[500],
      dark: lightBlue[400],
      light: lightBlue[300],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[700],
      dark: cyan[900],
      light: cyan[500],
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    },
  },
})
