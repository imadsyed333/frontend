import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelectedProduct } from "../../../context/SelectProductContext";
import { useProductQuery } from "../../../hooks/useProductQuery";
import { useProductActions } from "../../../hooks/useProductActions";

type ProductFormType = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export const ProductForm = () => {
  const { selectedProductId } = useSelectedProduct();
  const { products } = useProductQuery();

  const { editProduct } = useProductActions();

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  const [formProduct, setFormProduct] = useState<ProductFormType>({
    name: selectedProduct?.name || "",
    description: selectedProduct?.description || "",
    price: selectedProduct?.price || 0,
    image: selectedProduct?.image || "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormProduct({
        name: selectedProduct?.name,
        description: selectedProduct?.description,
        price: selectedProduct?.price,
        image: selectedProduct?.image,
      });
    }
  }, [selectedProduct?.id]);

  const handleInput = (e: any) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: !selectedProductId ? "center" : "",
        alignItems: !selectedProductId ? "center" : "",
        width: "100%",
        height: "100%",
      }}
    >
      {!selectedProductId && (
        <Typography variant="h5">Select a product to edit it</Typography>
      )}
      {selectedProductId && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            my: 2,
            mx: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            onChange={(e) => handleInput(e)}
            value={formProduct.name}
            sx={{
              mb: 1,
            }}
          />
          <TextField
            label="Description"
            name="description"
            value={formProduct.description}
            onChange={(e) => handleInput(e)}
            sx={{
              mb: 1,
            }}
          />
          <TextField
            label="image"
            name="image"
            value={formProduct.image}
            onChange={(e) => handleInput(e)}
            sx={{
              mb: 1,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              editProduct({ id: selectedProductId, ...formProduct })
            }
          >
            Save Changes
          </Button>
        </Box>
      )}
    </Box>
  );
};
