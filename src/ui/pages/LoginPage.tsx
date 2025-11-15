import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext, useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router";
import { ErrorBox } from "../components/ErrorBox";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login, fieldErrors, loading } = useAuth();

  const handleInput = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
          gap: 2,
          height: "50%",
          width: "20%",
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={(e) => handleInput(e)}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={form.password}
          onChange={(e) => handleInput(e)}
        />
        <ErrorBox errors={fieldErrors.error ? [fieldErrors.error] : []} />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f89259" }}
          onClick={() => login(form.email, form.password)}
          size="large"
        >
          {loading ? <CircularProgress /> : "Login"}
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ mr: 1 }}>New here?</Typography>
          <NavLink to={"/register"}>Sign up</NavLink>
        </Box>
      </Card>
    </Box>
  );
};
