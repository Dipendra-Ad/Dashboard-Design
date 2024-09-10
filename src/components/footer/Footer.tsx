import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { getFooterStyles } from "../../theme/footerTheme"; 

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = getFooterStyles(theme);

 
  const rootStyle = {
    ...styles.root,
    flexDirection: isMobile ? "column" : "row",
  };

  const titleStyle = {
    ...styles.title,
    fontWeight: isMobile ? "normal" : "bold",
  };

  const copyrightStyle = {
    ...styles.copyright,
    fontSize: isMobile
      ? theme.typography.pxToRem(12)
      : theme.typography.pxToRem(14),
    mt: isMobile ? 1 : 0,
  };

  return (
    <Box component="footer" sx={rootStyle}>
      <Typography variant="body1" sx={titleStyle}>
        Dipenadmin
      </Typography>
      <Typography variant="body2" sx={copyrightStyle}>
        © Dipen Admin Dashboard
      </Typography>
    </Box>
  );
};

export default Footer;
