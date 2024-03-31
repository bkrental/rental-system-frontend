"use client";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(24.6, 95%, 53.1%)",
      contrastText: "#fff",
      // dark: grey[900],
    },
    secondary: {
      main: "#f44336",
    },
    blue: {
      main: "#5F9DF7",
      contrastText: "#fff",
    },
  },
});

export default function Provider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
