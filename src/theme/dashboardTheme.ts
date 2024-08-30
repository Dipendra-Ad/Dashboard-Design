import { Theme } from "@mui/material/styles";

export const getDashboardStyles = (theme: Theme) => ({
  card: {
    height: "100%",
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});
