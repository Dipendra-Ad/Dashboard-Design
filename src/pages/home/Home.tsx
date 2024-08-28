import React from "react";
import { Box, CssBaseline, Typography, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "80vh" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          backgroundImage: 'url("../public/user.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: "white", mb: 4 }}
          >
            Welcome to the Dashboard.
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            This is your main dashboard content area.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
