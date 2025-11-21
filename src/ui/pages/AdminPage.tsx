import {
  Box,
  Card,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../themes";
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../api/orderClient";
import { OrderProvider, useSelectedOrder } from "../../context/OrderContext";
import { useOrderQuery } from "../components/admin/useOrderQuery";
import { OrderList } from "../components/order/OrderList";
import { OrderInfo } from "../components/order/OrderInfo";
import { AdminOrderInfo } from "../components/admin/AdminOrderInfo";

export const AdminPage = () => {
  const { isSuccess, isPending, isError, orders } = useOrderQuery();
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: 0,
        justifyContent: "center",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
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
    </Box>
  );
};
