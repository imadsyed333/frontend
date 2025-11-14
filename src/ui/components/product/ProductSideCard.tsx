import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { formatPrice } from "../../../utils";
import { IncrementalButton } from "../IncrementalButton";
import { Product } from "../../../types";
import { addCartItem } from "../../../api/cartClient";

export const ProductSideCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    addCartItem(product.id, quantity)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "40%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          alignItems: "start",
          mt: 2,
        }}
      >
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">
          ${formatPrice(product.price!)} / item
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          width: "90%",
        }}
      >
        <Typography variant="h6">{product.description}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          mb: 2,
        }}
      >
        <IncrementalButton count={quantity} setCount={setQuantity} />
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
          }}
          onClick={() => addToCart()}
        >
          <Typography variant="h6">Add to Cart</Typography>
        </Button>
      </Box>
    </Card>
  );
};
