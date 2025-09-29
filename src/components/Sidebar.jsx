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
import BackupTableIcon from '@mui/icons-material/BackupTable';
import FolderIcon from "@mui/icons-material/Folder";

const drawerWidth = 220;
const collapsedWidth = 60;

const primaryBg = "#1e293b";
const onPrimaryText = "#e2e8f0";
const hoverBg = "#4a5568";
const accentColor = "#3b82f6";

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
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0s",
          overflowX: "hidden",
          backgroundColor: primaryBg,
          color: onPrimaryText,
          borderRight: `1px solid ${primaryBg}`,
          boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          minHeight: 64,
          borderBottom: "1px solid #334155",
        }}
      >
        {open && (
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: accentColor,
            }}
          >
            Doc Portal
          </Typography>
        )}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            color: onPrimaryText,
            "&:hover": {
              backgroundColor: hoverBg,
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <List>
        {/* Home Link */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&:hover": {
                backgroundColor: hoverBg,
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: onPrimaryText,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
            />
          </ListItemButton>
        </ListItem>

        {/* Batches Link */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/batches"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&:hover": {
                backgroundColor: hoverBg,
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: onPrimaryText,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Batches"
              sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
            />
          </ListItemButton>
        </ListItem>

        {/* Table Link */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/pqrlist"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&:hover": {
                backgroundColor: hoverBg,
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: onPrimaryText,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BackupTableIcon />
            </ListItemIcon>
            <ListItemText
              primary="PQR List"
              sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
            />
          </ListItemButton>
        </ListItem>

        {/* Table Link */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to="/pqr"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&:hover": {
                backgroundColor: hoverBg,
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: onPrimaryText,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BackupTableIcon />
            </ListItemIcon>
            <ListItemText
              primary="PQR Table"
              sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
            />
          </ListItemButton>
        </ListItem>

      </List>
    </Drawer>
  );
};

export default Sidebar;