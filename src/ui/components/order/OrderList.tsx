import React from "react";
import { FadeWrapper } from "../FadeWrapper";
import { CircularProgress, List, ListItem, Typography } from "@mui/material";
import { Order } from "../../../types";
import { OrderCard } from "./OrderCard";

export const OrderList = ({ orders }: { orders: Order[] }) => {
  return (
    <FadeWrapper>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {orders.map((order, key) => (
          <ListItem key={key}>
            <OrderCard order={order} />
          </ListItem>
        ))}
      </List>
    </FadeWrapper>
  );
};
