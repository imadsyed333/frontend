import React from "react";
import "./App.css";
import { NavBar } from "./ui/components/nav/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { Box, ThemeProvider, Toolbar } from "@mui/material";
import { theme } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContent } from "./ui/components/PageContent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
              }}
            >
              <Toolbar>
                <NavBar />
              </Toolbar>
              <Box
                component={"main"}
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  flexDirection: "column",
                  overflowY: "auto",
                }}
              >
                <PageContent />
              </Box>
            </Box>
          </AuthProvider>
        </div>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
