import { ShoppingCart } from "@mui/icons-material";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { CartContext } from "../../../context/CartContext";

export const CartButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    location.pathname === "/cart" ? setSelected(true) : setSelected(false);
  }, [location.pathname]);
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 1,
        backgroundColor: !selected
          ? "rgba(255, 255, 255, 0)"
          : "rgba(255, 255, 255, 1)",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          py: 1,
          px: 4,
        }}
        onClick={() => {
          navigate("/cart");
        }}
      >
        <ShoppingCart
          sx={{
            color: selected ? "black" : "white",
            fontSize: 30,
          }}
        />
      </CardActionArea>
    </Card>
  );
};
