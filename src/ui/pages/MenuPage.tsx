import { Box, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productClient";
import { Product } from "../../types";
import { MenuGrid } from "../components/menu/MenuGrid";
import { colors } from "../../themes";

export const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: 2,
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "70%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: colors.secondary,
            textAlign: "left",
            mb: 1,
          }}
        >
          Samosa
        </Typography>
        <MenuGrid />
      </Box>
    </Box>
  );
};
