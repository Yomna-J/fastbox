import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3CBD96",
      light: "#e2f5ef",
      dark: "#204945",
    },
    secondary: {
      main: "#E3F9E7",
      light: "#c1eadd",
      dark: "#312E43",
    },
    text: {
      primary: "#23262F",
      secondary: "#777E90",
    },
  },
  typography: {
    fontFamily: "Red Hat Text",
    head: {
      fontFamily: "Anybody",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
});
