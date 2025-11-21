import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import { formatOrderId, formatPrice } from "../../../utils";
import { useSelectedOrder } from "../../../context/OrderContext";
import { Order } from "../../../types";
import { Circle } from "@mui/icons-material";
import { colors } from "../../../themes";

export const OrderCard = ({ order }: { order: Order }) => {
  const newDate: Date = new Date(order.createdAt.toString());
  const { setSelectedOrderId } = useSelectedOrder();

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
          setSelectedOrderId(order.id);
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              Order #{formatOrderId(order.id)}
            </Typography>
            <Circle
              sx={{
                color: colors.status[order.status],
                fontSize: 15,
                mx: 1,
              }}
            />
          </Box>
          <Typography variant="h6">{newDate.toDateString()}</Typography>
        </Box>
        <Typography variant="h6">${formatPrice(order.cost)}</Typography>
      </CardActionArea>
    </Card>
  );
};
