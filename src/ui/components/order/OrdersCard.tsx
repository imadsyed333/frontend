import { Box, List, Typography } from "@mui/material";
import { OrderList } from "./OrderList";
export const OrdersCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          ml: 2,
        }}
      >
        My Orders
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <OrderList />
      </List>
    </Box>
  );
};
