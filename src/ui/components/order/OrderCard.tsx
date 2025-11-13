import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatOrderId, formatPrice } from "../../../utils";
import { OrderContext } from "../../../context/OrderContext";
import { Order } from "../../../types";

export const OrderCard = ({ order }: { order: Order }) => {
  const newDate: Date = new Date(order.createdAt.toString());
  const { setSelectedOrder } = useContext(OrderContext);

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
          p: 1,
        }}
        onClick={() => {
          setSelectedOrder(order);
        }}
      >
        <Box>
          <Typography variant="h5">Order #{formatOrderId(order.id)}</Typography>
          <Typography variant="h6">{newDate.toDateString()}</Typography>
        </Box>
        <Typography variant="h6">${formatPrice(order.cost)}</Typography>
      </CardActionArea>
    </Card>
  );
};
