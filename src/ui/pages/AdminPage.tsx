import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../themes";

export const AdminPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: colors.secondary,
      }}
    >
      This is the top secret admin page
    </Box>
  );
};
