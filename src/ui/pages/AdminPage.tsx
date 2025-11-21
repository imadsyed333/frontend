import {
  Box,
  Card,
  CircularProgress,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { colors } from "../../themes";
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../api/orderClient";
import { OrderProvider, useSelectedOrder } from "../../context/OrderContext";
import { useOrderQuery } from "../components/admin/useOrderQuery";
import { OrderList } from "../components/order/OrderList";
import { OrderInfo } from "../components/order/OrderInfo";
import { AdminOrderInfo } from "../components/admin/AdminOrderInfo";
import { AdminOrderView } from "../components/admin/AdminOrderView";

export const AdminPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: 0,
        justifyContent: "center",
        alignItems: "center",
        mt: 1,
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Orders" />
            <Tab label="Products" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            minHeight: 0,
            width: "100%",
          }}
        >
          {tabValue === 0 && <AdminOrderView />}
        </Box>
      </Box>
    </Box>
  );
};
