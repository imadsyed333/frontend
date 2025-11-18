import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { IncrementalButton } from "../IncrementalButton";
import { Delete } from "@mui/icons-material";
import { formatPrice } from "../../../utils";
import { useCartActions } from "../../../hooks/useCartActions";
import { useCartQuery } from "../../../hooks/useCartQuery";
import { colors } from "../../../themes";
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
