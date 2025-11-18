import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "inherit",
      fontWeight: 200,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "inherit",
          fontSize: 20,
          fontWeight: 300,
        },
      },
    },
  },
});

export const colors = {
  primary: "#FFFFFF",
  secondary: "#00072D",
  tertiary: "#001C55",
  button: {
    primary: "#001C55",
    delete: "#E71D36",
  },
  status: {
    placed: "#d8cc34",
    ready: "#23C768",
    recieved: "#1b9aaa",
  },
  error: "#E71D36",
};
