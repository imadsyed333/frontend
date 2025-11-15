import {
  Box,
  Button,
  CardActionArea,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import { AccountCircle } from "@mui/icons-material";

export const AccountMenu = () => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "accountMenu",
  });
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const toProfile = () => {
    popupState.close();
    navigate("/profile");
  };

  const toLogout = () => {
    popupState.close();
    logout();
  };
  return (
    <>
      <CardActionArea
        sx={{
          display: "flex",
          width: "50%",
          m: 1,
          p: 1,
        }}
        {...bindTrigger(popupState)}
      >
        <AccountCircle
          sx={{
            fontSize: 30,
          }}
        />
      </CardActionArea>
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem disableTouchRipple>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">{user?.name}</Typography>
            <Typography variant="body2">{user?.email}</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={toProfile}>Profile</MenuItem>
        <MenuItem onClick={toLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};
