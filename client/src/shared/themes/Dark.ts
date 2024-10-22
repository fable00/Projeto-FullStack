import { createTheme } from '@mui/material'
import { lightBlue, cyan } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#202124',
      paper: '#303134',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
})
