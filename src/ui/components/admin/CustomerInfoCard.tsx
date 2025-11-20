import { Button, Card, MenuItem, Select, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../context/OrderContext";
import { OrderStatus } from "../../../types";
import { colors } from "../../../themes";
import { useOrderActions } from "./useOrderActions";
import { useOrderQuery } from "./useOrderQuery";

export const CustomerInfoCard = () => {
  const { selectedOrderId } = useContext(OrderContext);
  const { orders } = useOrderQuery();
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);
  const { id, user, status } = selectedOrder!;
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(status);

  const { updateStatus } = useOrderActions();

  useEffect(() => {
    setOrderStatus(status);
  }, [selectedOrder?.id]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography>{user?.name}</Typography>
      <Typography>{user?.email}</Typography>
      <Select
        defaultValue={status}
        value={orderStatus}
        onChange={(e) => setOrderStatus(e.target.value)}
      >
        {Object.values(OrderStatus).map((value, key) => (
          <MenuItem key={key} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.button.primary,
        }}
        onClick={() => updateStatus(id, orderStatus)}
      >
        Set Order Status
      </Button>
    </Card>
  );
};
