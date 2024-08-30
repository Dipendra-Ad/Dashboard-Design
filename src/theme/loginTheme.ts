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
});

export default theme;
