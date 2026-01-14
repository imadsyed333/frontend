import React, { useContext } from "react";
import {
  Box,
  Card,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { OrderProvider } from "../../context/OrderContext";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../api/orderClient";
import { OrderList } from "../components/order/OrderList";
import { OrderItemList } from "../components/order/OrderItemList";
import { OrderInfo } from "../components/order/OrderInfo";

export const Profile = () => {
  const {
    isSuccess,
    isError,
    isPending,
    data: orders = [],
    error,
  } = useQuery({
    queryKey: ["user_orders"],
    queryFn: getUserOrders,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: 0,
        my: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isError && (
        <Typography variant="h3">Error fetching your orders</Typography>
      )}
      {isPending && <CircularProgress />}
      {isSuccess && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OrderProvider>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Typography variant="h3">My Orders</Typography>
              <OrderList orders={orders} />
            </Card>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
              }}
            >
              <OrderInfo orders={orders} />
            </Card>
          </OrderProvider>
        </Box>
      )}
    </Box>
  );
};
