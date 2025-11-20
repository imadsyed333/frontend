import { Box, Button, InputBase, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";
import z from "zod";
import { colors } from "../../themes";

export const IncrementalButton = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (qty: number) => void;
}) => {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    setQuantity(value);
  }, [value]);
  const handleInput = (e: any) => {
    const input = Number(e.target.value);
    if (!isNaN(input)) {
      setQuantity(input);
      onChange(input);
    }
  };

  const incrementCount = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const decrementCount = () => {
    if (quantity > 1) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.primary,
        border: 1,
        borderRadius: 1,
        borderColor: "lightgray",
      }}
    >
      <Button
        onClick={decrementCount}
        sx={{
          m: 1,
          color: colors.secondary,
        }}
      >
        <RemoveIcon />
      </Button>
      <TextField
        value={quantity}
        onChange={(e) => handleInput(e)}
        sx={{
          input: {
            textAlign: "center",
          },
          width: "60%",
        }}
        variant="outlined"
      />
      <Button
        onClick={incrementCount}
        sx={{
          m: 1,
          color: colors.secondary,
        }}
      >
        <AddIcon />
      </Button>
    </Box>
  );
};
