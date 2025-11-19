import { Box, Card, List, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatOrderId, formatPrice } from "../../../utils";
import { OrderItemList } from "./OrderItemList";
import { OrderContext } from "../../../context/OrderContext";

export const OrderInfoCard = () => {
  const { selectedOrder } = useContext(OrderContext);
  const OrderItems = () => {
    return !selectedOrder ? (
      <div>Select an order to view its info</div>
    ) : (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          height: "100%",
          width: "100%",
          m: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mx: 1.5,
          }}
        >
          Order #{formatOrderId(selectedOrder.id)}
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <OrderItemList orderItems={selectedOrder.orderItems} />
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            mb: 1,
            borderTop: 1,
            borderColor: "gray",
          }}
        >
          <Typography
            sx={{
              mx: 1.5,
            }}
            variant="h4"
          >
            Total:
          </Typography>
          <Typography
            sx={{
              mx: 1.5,
            }}
            variant="h4"
          >
            ${formatPrice(selectedOrder.cost)}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        mx: 2,
      }}
    >
      <OrderItems />
    </Card>
  );
};
