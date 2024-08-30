import React from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Container,
  useTheme,
} from "@mui/material";
import { getHomeStyles } from "../../theme/homeTheme";

const Home: React.FC = () => {
  const theme = useTheme();
  const styles = getHomeStyles(theme);

  return (
    <Box sx={{ display: "flex", height: "80vh" }}>
      <CssBaseline />
      <Box component="main">
        <Container maxWidth="lg" sx={styles.container}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={styles.title}
          >
            Welcome to the Dashboard.
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            This is your main dashboard content area.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
