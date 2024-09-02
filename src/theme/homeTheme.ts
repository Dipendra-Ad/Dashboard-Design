import { Theme, SxProps } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    home: {
      container: React.CSSProperties;
      title: React.CSSProperties;
      text: React.CSSProperties;
      main: React.CSSProperties;
    };
  }
  interface ThemeOptions {
    home?: {
      container?: React.CSSProperties;
      title?: React.CSSProperties;
      text?: React.CSSProperties;
      main?: React.CSSProperties;
    };
  }
}

export const getHomeStyles = (
  theme: Theme
): { [key: string]: SxProps<Theme> } => ({
  main: {
    flexGrow: 1,
    p: 5,
    backgroundImage: 'url("../public/user.svg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 0,
    },
  },
  container: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "white",
    mb: 4,
  },
  text: {
    color: "white",
  },
});

export default getHomeStyles;
