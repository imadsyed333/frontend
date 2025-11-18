import React from "react";
import "./App.css";
import { NavBar } from "./ui/components/nav/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { Box, ThemeProvider, Toolbar } from "@mui/material";
import { theme } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContent } from "./ui/components/PageContent";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AuthProvider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                overflowX: "hidden",
              }}
            >
              <NavBar />
              <Toolbar />
              <Box
                component={"main"}
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  // minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
                  flexDirection: "column",
                  overflow: "auto",
                  overflowX: "hidden",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <PageContent />
              </Box>
            </Box>
          </AuthProvider>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
