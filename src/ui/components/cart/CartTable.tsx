import { Box } from "@mui/material";
import React from "react";
import { useCartQuery } from "../../../hooks/useCartQuery";
import { CartItemCard } from "./CartItemCard";

export const CartTable = () => {
  const { cart } = useCartQuery();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {cart.map((item, key) => (
        <CartItemCard item={item} key={key} />
      ))}
    </Box>
  );
};
