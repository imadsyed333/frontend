import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "inherit",
    },
    h4: {
      fontWeight: 200,
    },
    h5: {
      fontWeight: 200,
    },
    body1: {
      fontSize: "16px",
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
