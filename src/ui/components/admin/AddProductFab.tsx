import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";
import { useSelectedProduct } from "../../../context/SelectProductContext";

const AddProductFab = () => {
  const { setSelectedProduct, setOpen } = useSelectedProduct();

  const handleClick = () => {
    setSelectedProduct(null);
    setOpen(true);
  };
  return (
    <Fab
      sx={{
        position: "absolute",
        bottom: 30,
        right: 30,
      }}
      onClick={handleClick}
    >
      <Add
        sx={{
          color: "white",
        }}
      />
    </Fab>
  );
};

export default AddProductFab;
