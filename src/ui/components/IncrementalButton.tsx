import { Box, Button, InputBase, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import z from "zod";
import { colors } from "../../themes";

export const IncrementalButton = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Function;
}) => {
  const handleInput = (e: any) => {
    const input = Number(e.target.value);
    if (!isNaN(input)) {
      setCount(input);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
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
        value={count}
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
