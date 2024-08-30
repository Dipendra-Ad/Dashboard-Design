import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
