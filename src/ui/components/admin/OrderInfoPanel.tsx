import { Box } from "@mui/material";
import React, { useContext } from "react";
import { OrderInfoCard } from "../order/OrderInfoCard";
import { CustomerInfoCard } from "./CustomerInfoCard";
import { OrderContext } from "../../../context/OrderContext";

export const OrderInfoPanel = () => {
  const { selectedOrder } = useContext(OrderContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ml: 2,
      }}
    >
      {selectedOrder && (
        <>
          <OrderInfoCard />
          <CustomerInfoCard />
        </>
      )}
    </Box>
  );
};
