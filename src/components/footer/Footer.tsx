import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#282c34",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: isMobile ? "normal" : "bold",
        }}
      >
        Dipenadmin
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: isMobile ? "12px" : "14px",
          mt: isMobile ? 1 : 0,
        }}
      >
        © Dipen Admin Dashboard
      </Typography>
    </Box>
  );
};

export default Footer;
