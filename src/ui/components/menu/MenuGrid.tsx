import {
  Box,
  CircularProgress,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types";
import { getAllProducts } from "../../../api/productClient";
import { ProductCard } from "../product/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useProductQuery } from "../../../hooks/useProductQuery";

export const MenuGrid = () => {
  const { isPending, isError, products, error, isSuccess } = useProductQuery();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isPending && <CircularProgress />}
      {isError && <Typography>Menu could not be loaded.</Typography>}
      {isSuccess && (
        <Grid
          container
          spacing={0}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          {isSuccess &&
            products.map((product, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 3 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};
