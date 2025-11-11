import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./ui/pages/HomePage";
import { NavBar } from "./ui/components/nav/NavBar";
import { Route, Routes, useLocation } from "react-router";
import { Menu } from "./ui/pages/MenuPage";
import { ProductPage } from "./ui/pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./ui/pages/CartPage";
import { Login } from "./ui/pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { Register } from "./ui/pages/RegisterPage";
import { Profile } from "./ui/pages/ProfilePage";
import { Fade, ThemeProvider } from "@mui/material";
import { theme } from "./themes";
import { CheckoutSuccessPage } from "./ui/pages/CheckoutSuccessPage";
import { CheckoutCancelPage } from "./ui/pages/CheckoutCancelPage";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <CartProvider>
            <NavBar />
            <Fade
              in={transitionStage === "fadeIn"}
              timeout={300}
              onExited={() => {
                setDisplayLocation(location);
                setTransitionStage("fadeIn");
              }}
            >
              <div>
                <Routes location={displayLocation}>
                  <Route index element={<Home />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="menu/:id" element={<ProductPage />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="profile" element={<Profile />} />
                  <Route
                    path="/checkout/success"
                    element={<CheckoutSuccessPage />}
                  />
                  <Route
                    path="/checkout/cancel"
                    element={<CheckoutCancelPage />}
                  />
                </Routes>
              </div>
            </Fade>
          </CartProvider>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
