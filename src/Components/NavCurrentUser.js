import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAuth } from "./Forms/Firebase";

export default function NavCurrentUser(props) {
  const currentUser = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {currentUser?.email[0].toUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{ fontSize: "1.6rem", fontWeight: "500" }}
          onClick={handleClose}
        >
          <Avatar /> {currentUser?.email}
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DashboardIcon fontSize="large" />
          </ListItemIcon>
          <Link style={{ fontSize: "1.5rem", fontWeight: "500" }} to="/profile">
            Dashboard
          </Link>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CurrencyExchangeIcon fontSize="large" />
          </ListItemIcon>
          <Link
            style={{ fontSize: "1.5rem", fontWeight: "500" }}
            to="/exchange"
          >
            Trade
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="large" />
          </ListItemIcon>
          <Link style={{ fontSize: "1.5rem", fontWeight: "500" }} to="/">
            Settings
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="large" />
          </ListItemIcon>
          <Link
            style={{ fontSize: "1.5rem", fontWeight: "500" }}
            onClick={props.logOutHandler}
          >
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
