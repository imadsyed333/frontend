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
