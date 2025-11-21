import { Box, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { OrderItemList } from "./OrderItemList";
import { Order } from "../../../types";
import { useSelectedOrder } from "../../../context/OrderContext";
import { formatOrderId, formatPrice } from "../../../utils";
import { colors } from "../../../themes";

export const OrderInfo = ({ orders }: { orders: Order[] }) => {
  const { selectedOrderId } = useSelectedOrder();
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: !selectedOrderId ? "center" : "",
        alignItems: !selectedOrderId ? "center" : "",
      }}
    >
      {!selectedOrderId && (
        <Typography variant="h5">
          Select an order for more information
        </Typography>
      )}
      {selectedOrder && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              mb: 2,
            }}
          >
            <Typography variant="h3">
              Order #{formatOrderId(selectedOrder.id)}
            </Typography>
            <OrderItemList orderItems={selectedOrder?.orderItems || []} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "end",
              mb: 1,
              minHeight: 0,
            }}
          >
            <Divider
              variant="middle"
              sx={{
                color: colors.secondary,
                opacity: 1,
              }}
            ></Divider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mx: 2,
                mt: 1,
              }}
            >
              <Typography variant="h5">Total:</Typography>
              <Typography variant="h5">
                ${formatPrice(selectedOrder.cost)}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
