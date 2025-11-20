import React from "react";
import { FadeWrapper } from "../FadeWrapper";
import { OrderCard } from "./OrderCard";
import { CircularProgress, ListItem, Typography } from "@mui/material";
import { Order } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../../api/orderClient";

export const OrderList = () => {
  const {
    isSuccess,
    isPending,
    isError,
    data: orders = [],
    error,
  } = useQuery({
    queryKey: ["user_orders"],
    queryFn: getUserOrders,
  });
  return (
    <FadeWrapper>
      <div>
        {isPending && <CircularProgress />}
        {isError && <Typography>{error.message}</Typography>}
        {isSuccess &&
          orders.map((order) => (
            <ListItem key={order.id}>
              <OrderCard order={order} />
            </ListItem>
          ))}
      </div>
    </FadeWrapper>
  );
};
