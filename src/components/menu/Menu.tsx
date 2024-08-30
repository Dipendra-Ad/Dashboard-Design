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
  People,
  Assignment,
  Settings,
} from "@mui/icons-material";

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
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            height: "100%",
            backgroundColor: "#384256",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#384256",
          }}
        >
          {menu.map((item) => (
            <Box key={item.id} sx={{ mb: 2 }}>
              <List>
                {item.listItems.map((listItem) => (
                  <ListItem
                    button
                    component={Link}
                    to={listItem.url}
                    key={listItem.id}
                    sx={{
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.grey[800],
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                      }}
                    >
                      {iconMap[listItem.icon]}
                    </ListItemIcon>
                    <ListItemText primary={listItem.title} />
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
            backgroundColor: "#384256",
          }}
        >
          {menu.map((item) => (
            <Box key={item.id} sx={{ mb: 2 }}>
              <List>
                {item.listItems.map((listItem) => (
                  <ListItem
                    button
                    component={Link}
                    to={listItem.url}
                    key={listItem.id}
                    sx={{
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.grey[800],
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                      }}
                    >
                      {iconMap[listItem.icon]}
                    </ListItemIcon>
                    <ListItemText primary={listItem.title} />
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

export const menu = [
  {
    id: 1,
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user",
      },
      {
        id: 3,
        title: "Dashboard",
        url: "/dashboard",
        icon: "dashboard",
      },
      {
        id: 4,
        title: "Users",
        url: "/users",
        icon: "users",
      },
      {
        id: 5,
        title: "Timesheet",
        url: "/timesheet",
        icon: "product",
      },
      {
        id: 6,
        title: "Purchase Order",
        url: "/orders",
        icon: "order",
      },
      {
        id: 7,
        title: "Delivery Docket",
        url: "/posts",
        icon: "post2",
      },
    ],
  },
  {
    id: 2,
    listItems: [
      {
        id: 1,
        title: "Equipment",
        url: "/equipment",
        icon: "element",
      },
      {
        id: 2,
        title: "Suppliers",
        url: "/suppliers",
        icon: "element",
      },
      {
        id: 3,
        title: "Resource Assigner",
        url: "/resource",
        icon: "note",
      },
      {
        id: 4,
        title: "Forms",
        url: "/forms",
        icon: "form",
      },
      {
        id: 5,
        title: "Files Manager",
        url: "/calenders",
        icon: "calendar",
      },
      {
        id: 6,
        title: "Settings",
        url: "/setting",
        icon: "setting",
      },
    ],
  },
];
