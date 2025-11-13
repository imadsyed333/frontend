import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#FDFFFC",
      }}
    >
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="h6">
        We make crazy frozen samosas. And other stuff.
      </Typography>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </Box>
  );
};
