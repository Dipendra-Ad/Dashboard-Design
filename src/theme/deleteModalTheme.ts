import { Theme } from "@mui/material/styles";
const DEl_WIDTH = 400;

export const deleteModalStyles = (theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: DEl_WIDTH,
    padding: theme.spacing(2),
    bgcolor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
  },
  cancelButton: {
    marginLeft: theme.spacing(2),
  },
});
