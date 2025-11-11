import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductWithId } from "../../api/productClient";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Product, CartItem } from "../../types";
import { IncrementalButton } from "../components/IncrementalButton";
import { formatPrice } from "../../utils";
import { addCartItem } from "../../api/cartClient";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    if (product && id) {
      addCartItem(parseInt(id), quantity)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getProductWithId(Number(id))
      .then((res) => setProduct(res.product))
      .catch((e) => console.log(e));
  }, [id]);

  const PageContent = () => {
    if (product) {
      return (
        <>
          <CardMedia
            component={"img"}
            image={product.image}
            alt={product.name}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
          <CardContent>
            <Typography variant="h1">{product.name}</Typography>
            <Typography variant="h3">${formatPrice(product.price)}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: 10,
                justifySelf: "center",
              }}
            >
              <IncrementalButton count={quantity} setCount={setQuantity} />
              <Button
                variant="contained"
                onClick={addToCart}
                sx={{
                  my: 1,
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <Typography
              sx={{
                m: 1,
              }}
            >
              {product.description}
            </Typography>
          </CardContent>
        </>
      );
    }
    return (
      <div>
        <CircularProgress />
      </div>
    );
  };
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
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <PageContent />
      </Card>
    </Box>
  );
};
