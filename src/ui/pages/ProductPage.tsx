import React from "react";
import { useParams } from "react-router";
import { getProductWithId } from "../../api/productClient";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ProductSideCard } from "../components/product/ProductSideCard";

export const ProductPage = () => {
  const { id } = useParams();
  const { isSuccess, isPending, isError, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductWithId(parseInt(id!)),
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "89vh",
        mt: "85px",
        mx: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "70%",
        }}
      >
        {isPending && <CircularProgress />}
        {isError && <Typography>{error.message}</Typography>}
        {isSuccess && (
          <>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                alt={`${data?.product.name} picture`}
                src={data?.product.image}
                sx={{
                  height: "80%",
                  width: "80%",
                  borderRadius: 1,
                }}
              />
            </Box>
            <ProductSideCard product={data?.product} />
          </>
        )}
      </Box>
    </Box>
  );
};
