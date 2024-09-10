import { Theme } from "@mui/material/styles";

export const getNavbarStyles = (theme: Theme) => ({
  logo: {
    height: 40,
  },
  title: {
    marginLeft: theme.spacing(2),
  },
  menuPaper: {
    width: "200px",
  },
});
