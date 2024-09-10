import { Theme } from "@mui/material/styles";
const DRAWER_WIDTH = 240;

export const getDrawerStyles = (theme: Theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
  },
  container: {
    p: 2,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  listItem: {
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listItemIcon: {
    color: theme.palette.text.primary,
  },
});
