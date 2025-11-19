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
import { OrderCard } from "../components/order/OrderCard";
import { OrderProvider } from "../../context/OrderContext";
import { OrderInfoCard } from "../components/order/OrderInfoCard";

export const AdminPage = () => {
  const { isSuccess, isPending, isError, data, error } = useQuery({
    queryKey: ["all_orders"],
    queryFn: getAllOrders,
  });
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
      <OrderProvider>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            width: "30%",
            height: "100%",
          }}
          variant="outlined"
        >
          <Typography variant="h3">Orders</Typography>
          {isPending && <CircularProgress />}
          {isError && <Typography>Could not fetch orders</Typography>}
          {isSuccess && (
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                overflowY: "scroll",
              }}
            >
              {data.orders.map((order) => (
                <ListItem key={order.id}>
                  <OrderCard order={order} />
                </ListItem>
              ))}
            </List>
          )}
        </Card>
        <OrderInfoCard />
      </OrderProvider>
    </Box>
  );
};
