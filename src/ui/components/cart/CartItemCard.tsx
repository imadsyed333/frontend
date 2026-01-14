import { Delete } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types";
import { formatPrice } from "../../../lib/utils";
import { IncrementalButton } from "../IncrementalButton";
import { useCartActions } from "../../../hooks/useCartActions";
import { colors } from "../../../lib/themes";

export const CartItemCard = ({ item }: { item: CartItem }) => {
  const { deleteItem, updateQuantity } = useCartActions();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        m: 1,
        p: 1,
      }}
      variant="outlined"
    >
      <Button
        onClick={() => deleteItem(item.id)}
        sx={{
          height: "100%",
        }}
      >
        <Delete
          sx={{
            color: colors.button.delete,
          }}
        />
      </Button>
      <Typography>${formatPrice(item.product.price)}</Typography>
      <Typography>{item.product.name}</Typography>
      <Box
        sx={{
          width: "30%",
        }}
      >
        <IncrementalButton
          value={item.quantity}
          onChange={(qty: number) => updateQuantity(item.id, qty)}
        />
      </Box>
      <Typography>
        ${formatPrice(item.product.price * item.quantity)}
      </Typography>
    </Card>
  );
};
