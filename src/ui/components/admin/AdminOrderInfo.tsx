import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelectedOrder } from "../../../context/OrderContext";
import { OrderInfo } from "../order/OrderInfo";
import { useOrderQuery } from "./useOrderQuery";
import { CustomerInfo } from "./CustomerInfo";

export const AdminOrderInfo = () => {
  const { selectedOrderId } = useSelectedOrder();
  const { orders } = useOrderQuery();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: !selectedOrderId ? "center" : "",
        alignItems: !selectedOrderId ? "center" : "",
        width: "100%",
        height: "100%",
      }}
    >
      {!selectedOrderId && (
        <Typography variant="h5">
          Select an order for more information
        </Typography>
      )}
      {selectedOrderId && (
        <>
          <OrderInfo orders={orders} />
          <CustomerInfo />
        </>
      )}
    </Box>
  );
};
