"use client";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin-ext"],
});

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
  typography: {
    fontFamily: roboto.style.fontFamily,
    h4: {
      fontWeight: 600,
      color: grey[900],
    },
  },
});

export default function Provider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
