import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import {
  Home,
  Person,
  Dashboard,
  Group,
  Event,
  LocalShipping,
  LocalPostOffice,
  Devices,
  Assignment,
  Settings,
  People,
} from "@mui/icons-material";
import { getDrawerStyles } from "../../theme/menuTheme";
import { menu } from "../../data/menuData";
import { MenuSection, MenuItem } from "../../types";

const iconMap: Record<string, React.ReactElement> = {
  home: <Home />,
  user: <Person />,
  dashboard: <Dashboard />,
  users: <Group />,
  product: <Event />,
  order: <LocalShipping />,
  post2: <LocalPostOffice />,
  element: <Devices />,
  note: <Assignment />,
  form: <Settings />,
  calendar: <People />,
  setting: <Settings />,
};

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = () => {
    setOpen(!open);
  };

  const styles = getDrawerStyles(theme);

  return (
    <Box>
      {isMobile && (
        <IconButton onClick={handleToggle} color="inherit">
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggle}
        variant={isMobile ? "temporary" : "persistent"}
        sx={styles.drawer}
      >
        <Box sx={styles.container}>
          {menu.map((section: MenuSection) => (
            <Box key={section.id} sx={{ mb: 2 }}>
              <List>
                {section.listItems.map((item: MenuItem) => (
                  <ListItem
                    button
                    component={Link}
                    to={item.url}
                    key={item.id}
                    sx={styles.listItem}
                  >
                    <ListItemIcon sx={styles.listItemIcon}>
                      {iconMap[item.icon]}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Drawer>
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            width: 240,
            height: "100%",
            backgroundColor: theme.palette.background.default,
          }}
        >
          {menu.map((section: MenuSection) => (
            <Box key={section.id} sx={{ mb: 2 }}>
              <List>
                {section.listItems.map((item: MenuItem) => (
                  <ListItem
                    button
                    component={Link}
                    to={item.url}
                    key={item.id}
                    sx={styles.listItem}
                  >
                    <ListItemIcon sx={styles.listItemIcon}>
                      {iconMap[item.icon]}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Menu;
