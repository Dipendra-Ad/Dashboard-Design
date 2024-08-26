import React, { MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, logout } = useAuth();

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="logo">
          <img src="logo.svg" alt="Logo" className="logo-image" />
          <Typography variant="h6" className="logo-text">
            Deep Admin
          </Typography>
        </div>
        <div
          className="actions"
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={handleMenuClick}>
                Logout
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    width: "200px",
                  },
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
