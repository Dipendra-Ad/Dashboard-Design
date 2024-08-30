import { createTheme } from "@mui/material/styles";

const supplierTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          overflow: "hidden",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          maxHeight: 640,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
});

export default supplierTheme;
