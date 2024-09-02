import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { loadingSpinnerStyles } from "../theme/spinnerTheme";

const LoadingSpinner: React.FC = () => {
  return (
    <Box sx={loadingSpinnerStyles}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
