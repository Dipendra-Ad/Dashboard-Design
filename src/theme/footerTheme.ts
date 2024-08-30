import { Theme } from "@mui/material/styles";

export const getFooterStyles = (theme: Theme) => ({
  root: {
    p: 2,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  title: {
    fontWeight: "bold",
  },
  copyright: {
    fontSize: theme.typography.pxToRem(14),
    mt: 0,
  },
});
