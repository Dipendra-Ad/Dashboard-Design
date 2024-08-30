import React, { MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getNavbarStyles } from "../../theme/navbarTheme";
import { AnchorEl } from "../../types";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const styles = getNavbarStyles(theme);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1, mr: 2 }}>
          <img src="logo.svg" alt="Logo" style={styles.logo} />
          <Typography variant="h6" sx={styles.title}>
            Deep Admin
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ ml: "auto" }}>
          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={handleMenuClick}>
                {isMobile ? "Menu" : "Account"}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: styles.menuPaper,
                }}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleMenuClose}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
