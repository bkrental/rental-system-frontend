"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";

const themeOptions = {
  palette: {
    primary: {
      main: "rgba(255, 115, 29, 1)",
    },
    complementary: {
      main: "rgba(255, 247, 233, 1)",
    },
    accent: {
      main: "rgba(95, 157, 247, 1)",
    },
    background: {
      default: "rgba(255, 255, 255, 1)",
      page: "linear-gradient(180deg, #FFE6B9 12.06%, #FFFBF3 67.57%, #FFF 72.83%)",
      test: "aqua",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(59, 65, 68, 1)",
      hover: "rgba(255, 255, 255, 1)",
      description: "rgba(59, 65, 68, 0.50)",
    },
  },
  typography: {
    fontFamily: "Open, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                text-decoration: none;
                src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  componentSize: {
    header: {
      height: "80px",
      width: "100%",
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.palette).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([innerKey, innerValue]) => {
          root.style.setProperty(`--${key}-${innerKey}`, innerValue);
        });
      } else {
        root.style.setProperty(`--${key}`, value);
      }
    });
    root.style.setProperty(
      `--componentSize-header-height`,
      theme.componentSize.header.height
    );
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
