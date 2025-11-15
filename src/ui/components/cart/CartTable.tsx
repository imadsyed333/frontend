import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { IncrementalButton } from "../IncrementalButton";
import { Delete } from "@mui/icons-material";
import { formatPrice } from "../../../utils";
import { useCartActions } from "../../../hooks/useCartActions";
import { useCartQuery } from "../../../hooks/useCartQuery";

export const CartTable = () => {
  const { updateQuantity, deleteItem } = useCartActions();
  const { cart } = useCartQuery();

  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#F89259",
          }}
        >
          <TableRow>
            <TableCell align="left" padding="none" size="small"></TableCell>
            <TableCell align="left">
              <Typography variant="h6" color="white">
                Product
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" color="white">
                Price
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="white">
                Count
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6" color="white">
                Total
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, key) => (
            <TableRow key={key}>
              <TableCell align="left" padding="none" size="small">
                <Button
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                  sx={{
                    py: 1,
                  }}
                >
                  <Delete
                    sx={{
                      color: "#D81159",
                    }}
                  />
                </Button>
              </TableCell>
              <TableCell align="left">{item.product.name}</TableCell>
              <TableCell align="left">
                ${formatPrice(item.product.price)}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  px: 1,
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                  }}
                >
                  <IncrementalButton
                    count={item.quantity}
                    setCount={(value: number) => {
                      updateQuantity(item.id, value);
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell align="right">
                ${formatPrice(item.product.price * item.quantity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
