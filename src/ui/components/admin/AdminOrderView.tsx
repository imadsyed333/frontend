import React from "react";
import { useOrderQuery } from "./useOrderQuery";
import { Box, Card, Typography } from "@mui/material";
import { OrderProvider } from "../../../context/OrderContext";
import { OrderList } from "../order/OrderList";
import { AdminOrderInfo } from "./AdminOrderInfo";

export const AdminOrderView = () => {
  const { isSuccess, isPending, isError, orders } = useOrderQuery();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
      }}
    >
      <OrderProvider>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            height: "100%",
            mr: 2,
          }}
          variant="outlined"
        >
          <Typography variant="h3">Orders</Typography>
          <OrderList orders={orders} />
        </Card>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <AdminOrderInfo />
        </Card>
      </OrderProvider>
    </Box>
  );
};
