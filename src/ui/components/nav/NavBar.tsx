import React, { useContext } from "react";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { AuthContext, useAuth } from "../../../context/AuthContext";
import { NavButton } from "./NavButton";
import { Logo } from "./Logo";
import { AccountLinks } from "./AccountLinks";
import { colors } from "../../../themes";
import { CartButton } from "./CartButton";
import { AccountMenu } from "./AccountMenu";

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        backgroundColor: colors.secondary,
        flexDirection: "row",
        justifyContent: "center",
        height: "70px",
      }}
    >
      <Grid
        container
        sx={{
          mx: 1,
        }}
        spacing={0}
      >
        <Grid
          container
          sx={{
            height: "100%",
            justifyContent: "flex-start",
          }}
          size={6}
          columns={{ xs: 2, md: 3 }}
        >
          <Grid
            sx={{
              display: "flex",
              background: "pink",
              height: "100%",
            }}
          >
            <Logo />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "flex-start",
              background: "red",
            }}
            size={{ xs: 0, xl: 1 }}
          >
            <Typography
              variant="h4"
              noWrap
              sx={{
                letterSpacing: ".2rem",
                background: "black",
                alignSelf: "center",
              }}
            >
              Samosa Stuff
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <NavButton name="Menu" link="/menu" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: "100%",
            justifyContent: "flex-end",
            background: "red",
          }}
          size={6}
        >
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              background: "pink",
              justifyContent: "center",
            }}
            size={{ xs: 7 }}
          >
            <CartButton />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
            }}
            size={{ xs: 4 }}
          >
            <AccountMenu />
          </Grid>
        </Grid>
      </Grid>
      {/* <Box
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
      </Box> */}
    </AppBar>
  );
};
