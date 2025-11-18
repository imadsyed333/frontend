import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="h6">
        We make crazy frozen samosas. And other stuff.
      </Typography>
    </Box>
  );
};
