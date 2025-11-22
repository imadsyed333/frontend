import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { SelectedProductProvider } from "../../../context/SelectProductContext";
import { ProductList } from "../product/ProductList";
import { useProductQuery } from "../../../hooks/useProductQuery";
import { ProductForm } from "../product/ProductForm";

export const AdminProductView = () => {
  const { products } = useProductQuery();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
      }}
    >
      <SelectedProductProvider>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
            width: "100%",
            mr: 1,
          }}
        >
          <Typography variant="h3">Products</Typography>
          <ProductList products={products} />
        </Card>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            ml: 1,
          }}
        >
          <ProductForm />
        </Card>
      </SelectedProductProvider>
    </Box>
  );
};
