import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 64,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: 16,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginTop: 16,
        },
      },
    },
  },
});

export default theme;
