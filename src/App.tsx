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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <StoreProvider>
            <NavBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path='menu' element={<Menu />} />
              <Route path='/menu/:id' element={<ProductPage />} />
              <Route path='cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </StoreProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
