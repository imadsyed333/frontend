import React from 'react';
import './App.css';
import { Home } from './ui/pages/Home';
import { NavBar } from './ui/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Menu } from './ui/pages/Menu';
import { ProductPage } from './ui/pages/ProductPage';
import { StoreProvider } from './StoreContext';
import { Cart } from './ui/pages/Cart';
import { Login } from './ui/pages/Login';
import { AuthProvider } from './AuthContext';
import { Register } from './ui/pages/Register';
import { Profile } from './ui/pages/Profile';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <StoreProvider>
              <NavBar />
              <Routes>
                <Route index element={<Home />} />
                <Route path='menu' element={<Menu />} />
                <Route path='menu/:id' element={<ProductPage />} />
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='profile' element={<Profile />} />
              </Routes>
            </StoreProvider>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
