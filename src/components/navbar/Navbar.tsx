import React, { MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Search, Apps, ExpandMore, Notifications, Settings } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import './navbar.css';

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
        <div className="icons">
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Apps />
          </IconButton>
          <IconButton color="inherit">
            <ExpandMore />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <Avatar
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="User"
            />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                width: '200px',
              },
            }}
          >
            {isAuthenticated ? (
              <>
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); logout(); }}>
                  Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                Login
              </MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
