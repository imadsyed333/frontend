import React, { useContext } from "react";
import { AppBar, Box, Typography } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { NavButton } from "./NavButton";
import { Logo } from "./Logo";
import { AccountLinks } from "./AccountLinks";

type PageRoute = {
  name: string;
  link: string;
};

export const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <AppBar
      sx={{
        display: "flex",
        backgroundColor: "#f89259",
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
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <NavButton name="Home" link="/" />
        <NavButton name="Menu" link="/menu" />
        <AccountLinks />
      </Box>
    </AppBar>
  );
};
