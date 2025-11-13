import { Box, Button, Card, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorBox } from "../components/ErrorBox";

export const Register = () => {
  const { register, fieldErrors } = useContext(AuthContext);

  const [passwordMatch, setPasswordMatch] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const submitForm = () => {
    setPasswordMatch(form.password === form.retypePassword);
    register(form.email, form.password, form.name);
  };

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
          height: "fit-content",
          width: "20%",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={(e) => handleInput(e)}
          error={fieldErrors?.name?.length !== 0}
        />

        <ErrorBox errors={fieldErrors?.name || []} />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={(e) => handleInput(e)}
          error={fieldErrors?.email?.length !== 0}
        />

        <ErrorBox errors={fieldErrors?.email || []} />

        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={form.password}
          onChange={(e) => handleInput(e)}
          error={fieldErrors?.password?.length !== 0}
        />

        <ErrorBox errors={fieldErrors?.password || []} />

        <TextField
          label="Re-type Password"
          type="password"
          name="retypePassword"
          variant="outlined"
          value={form.retypePassword}
          onChange={(e) => handleInput(e)}
        />

        {passwordMatch ? (
          <></>
        ) : (
          <ErrorBox errors={["Passwords do not match"]} />
        )}

        <Button
          variant="contained"
          sx={{ backgroundColor: "#f89259" }}
          onClick={() => submitForm()}
        >
          Sign up
        </Button>
      </Card>
    </Box>
  );
};
