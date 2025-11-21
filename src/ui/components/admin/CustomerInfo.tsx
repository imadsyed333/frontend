import { Box, Button, Card, MenuItem, Select, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../context/OrderContext";
import { OrderStatus } from "../../../types";
import { colors } from "../../../themes";
import { useOrderActions } from "./useOrderActions";
import { useOrderQuery } from "./useOrderQuery";
import { Circle } from "@mui/icons-material";

export const CustomerInfo = () => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          ml: 2,
        }}
      >
        <Typography variant="h5">
          Name: <b>{user?.name}</b>
        </Typography>
        <Typography variant="h5">
          Email: <b>{user.email}</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mr: 2,
        }}
      >
        <Select
          defaultValue={status}
          value={orderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
        >
          {Object.values(OrderStatus).map((value, key) => (
            <MenuItem
              key={key}
              value={value}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Circle
                sx={{
                  fontSize: 15,
                  color: colors.status[value],
                  mr: 1,
                }}
              />
              <Typography>{value}</Typography>
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.button.primary,
            ml: 1,
          }}
          onClick={() => updateStatus(id, orderStatus)}
        >
          Update Status
        </Button>
      </Box>
    </Box>
  );
};
