import React from "react";
import "./App.css";
import { NavBar } from "./ui/components/nav/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
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
            <NavBar />
            <div>
              <PageContent />
            </div>
          </AuthProvider>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
