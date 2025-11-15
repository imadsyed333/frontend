import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./ui/pages/HomePage";
import { NavBar } from "./ui/components/nav/NavBar";
import { Route, Routes, useLocation } from "react-router";
import { Menu } from "./ui/pages/MenuPage";
import { ProductPage } from "./ui/pages/ProductPage";
import { Cart } from "./ui/pages/CartPage";
import { Login } from "./ui/pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { Register } from "./ui/pages/RegisterPage";
import { Profile } from "./ui/pages/ProfilePage";
import { Fade, ThemeProvider } from "@mui/material";
import { theme } from "./themes";
import { CheckoutSuccessPage } from "./ui/pages/CheckoutSuccessPage";
import { CheckoutCancelPage } from "./ui/pages/CheckoutCancelPage";
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
