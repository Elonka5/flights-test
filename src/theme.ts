import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: 700, 
    },
    body1: {
      fontWeight: 400, 
    },
  },


  palette: {
    primary: {
      main: "#ffad36", 
    },
    secondary: {
      main: "#FAF6DF",
    },

    text: {
      primary: "#333333", 
      secondary: "#666666", 
      disabled: "#999999",
    },
  },
  breakpoints: {
    values: {
      xs: 0,     
      sm: 600,   
      md: 900,    
      lg: 1200,   
      xl: 1440,   
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent", 
          color: "#ffad36",
          "&:hover": {
           
          }, 
        },
      },
    },
  },
});

export default theme;