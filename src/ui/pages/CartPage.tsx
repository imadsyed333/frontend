import React from "react";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import { CartTable } from "../components/cart/CartTable";
import { ShoppingCart } from "@mui/icons-material";
import { formatPrice } from "../../lib/utils";
import { checkoutCart } from "../../api/cartClient";
import { useCartQuery } from "../../hooks/useCartQuery";
import { colors } from "../../lib/themes";
import { useNavigate } from "react-router";

export const Cart = () => {
  const { cart, isPending } = useCartQuery();
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (sum, item) => item.product.price * item.quantity + sum,
    0
  );

  const handleCheckout = () => {
    if (cart.length > 0) {
      checkoutCart()
        .then((res) => (window.location.href = res.url))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        my: 2,
      }}
    >
      {isPending && <CircularProgress />}
      {cart.length === 0 && !isPending && (
        <Box>
          <ShoppingCart
            sx={{
              color: colors.secondary,
              fontSize: 100,
            }}
          />
          <Typography variant="h4">Your cart is empty.</Typography>
        </Box>
      )}
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
            maxWidth: "100%",
          }}
        >
          <Typography variant="h2">
            Your total is ${formatPrice(cartTotal)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                color: colors.button.primary,
                m: 1,
              }}
              onClick={() => navigate("/menu")}
            >
              <Typography variant="h5">Keep Shopping</Typography>
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.button.primary,
                m: 1,
              }}
              onClick={() => handleCheckout()}
            >
              <Typography
                sx={{
                  color: colors.primary,
                }}
                variant="h5"
              >
                Proceed to Checkout
              </Typography>
            </Button>
          </Box>
          <CartTable />
        </Box>
      )}
    </Box>
  );
};
