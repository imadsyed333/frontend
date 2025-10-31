import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './ui/pages/Home';
import { NavBar } from './ui/components/NavBar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
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
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut")
  }, [location, displayLocation])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <StoreProvider>
            <NavBar />
            <div className={`page-transition ${transitionStage}`}
              onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                  setTransitionStage("fadeIn");
                  setDisplayLocation(location);
                }
              }}>
              <Routes location={displayLocation}>
                <Route index element={<Home />} />
                <Route path='menu' element={<Menu />} />
                <Route path='menu/:id' element={<ProductPage />} />
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='profile' element={<Profile />} />
              </Routes>
            </div>
          </StoreProvider>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
