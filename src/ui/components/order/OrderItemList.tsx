import React from "react";
import { Order, OrderItem } from "../../../types";
import { FadeWrapper } from "../FadeWrapper";
import { OrderCard } from "./OrderCard";
import { ListItem } from "@mui/material";
import { OrderItemCard } from "./OrderItemCard";

export const OrderItemList = ({ orderItems }: { orderItems: OrderItem[] }) => {
  return (
    <FadeWrapper>
      <div>
        {orderItems.map((orderItem, key) => (
          <ListItem key={key}>
            <OrderItemCard orderItem={orderItem} />
          </ListItem>
        ))}
      </div>
    </FadeWrapper>
  );
};
