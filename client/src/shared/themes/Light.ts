import { createTheme } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: lightBlue[500] ,
            dark: lightBlue[400] , 
            light: lightBlue[300],
            contrastText: "#fff" ,
        },
        secondary:{
            main: blue[700] ,
            dark: blue[900] , 
            light: blue[500],
            contrastText: "#ffff" ,
        },
        background:{
            default: '#f7f6f3' ,
            paper: '#fff' ,
        }
    }
})