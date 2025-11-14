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
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { IncrementalButton } from "../IncrementalButton";
import { Delete } from "@mui/icons-material";
import { formatPrice } from "../../../utils";

export const CartTable = () => {
  const { cart, setCountAt, deleteItemAt } = useContext(CartContext);

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
                    deleteItemAt(key, item.id);
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
                      setCountAt(key, item.id, value);
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
