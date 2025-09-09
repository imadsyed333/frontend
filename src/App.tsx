import React from 'react';
import './App.css';
import { Home } from './ui/pages/Home';
import { NavBar } from './ui/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Menu } from './ui/pages/Menu';
import { ProductPage } from './ui/pages/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='/menu/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
