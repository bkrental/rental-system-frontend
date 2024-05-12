"use client";
import { grey, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // main: "hsl(24.6, 95%, 53.1%)",
      main: orange[800],
      contrastText: "#fff",
    },
    secondary: {
      main: "#f44336",
    },
    blue: {
      main: "#5F9DF7",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "normal",
    },
    h4: {
      fontWeight: 600,
      color: grey[900],
    },
  },
});
export default theme;
