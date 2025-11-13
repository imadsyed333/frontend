import React, { useContext } from "react";
import { Box, Card } from "@mui/material";
import { ProfileCard } from "../components/account/ProfileCard";
import { AuthContext } from "../../context/AuthContext";
import { OrdersCard } from "../components/order/OrdersCard";
import { OrderInfoCard } from "../components/order/OrderInfoCard";
import { OrderProvider } from "../../context/OrderContext";

export const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "89vh",
        width: "100%",
        mt: "85px",
      }}
    >
      <ProfileCard name={user?.name || ""} email={user?.email || ""} />
      <OrderProvider>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            mx: 2,
          }}
        >
          <OrdersCard />
        </Card>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <OrderInfoCard />
        </Box>
      </OrderProvider>
    </Box>
  );
};
