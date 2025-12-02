import React from "react";
import { Product } from "../../../types";
import { Card, CardActionArea, Typography } from "@mui/material";
import { useSelectedProduct } from "../../../context/SelectProductContext";
import { formatPrice } from "../../../utils";

export const ProductListCard = ({ product }: { product: Product }) => {
  const { setSelectedProductId } = useSelectedProduct();
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
        onClick={() => setSelectedProductId(product.id)}
      >
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h6">${formatPrice(product.price)}</Typography>
      </CardActionArea>
    </Card>
  );
};
