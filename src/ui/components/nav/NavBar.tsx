import React, { useContext } from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { AuthContext, useAuth } from "../../../context/AuthContext";
import { NavButton } from "./NavButton";
import { Logo } from "./Logo";
import { AccountLinks } from "./AccountLinks";
import { colors } from "../../../themes";

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <AppBar
      sx={{
        display: "flex",
        backgroundColor: colors.secondary,
        flexDirection: "row",
        justifyContent: "center",
        height: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "70%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Logo />
          <NavButton name="Home" link="/" />
          <NavButton name="Menu" link="/menu" />
        </Box>
        {user && <AccountLinks />}
        {!user && <NavButton name="Login" link="/login" />}
      </Box>
    </AppBar>
  );
};
