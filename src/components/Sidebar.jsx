import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";

const drawerWidth = 220;
const collapsedWidth = 60;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "#333",
          color: "white",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          px: [1],
        }}
      >
        {open && (
          <Typography variant="h6" noWrap>
            📂 Doc Portal
          </Typography>
        )}
        <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/batches"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Batches" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
