import { Theme } from "@mui/material/styles";

export const modalStyles = (theme: Theme) => ({
  container: {
    width: 400,
    padding: theme.spacing(3),
    bgcolor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
