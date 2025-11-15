import { Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/HomePage";
import { Menu } from "../pages/MenuPage";
import { ProductPage } from "../pages/ProductPage";
import { Cart } from "../pages/CartPage";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegisterPage";
import { Profile } from "../pages/ProfilePage";
import { CheckoutSuccessPage } from "../pages/CheckoutSuccessPage";
import { CheckoutCancelPage } from "../pages/CheckoutCancelPage";

export const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
        <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
      </Routes>
    </div>
  );
};
