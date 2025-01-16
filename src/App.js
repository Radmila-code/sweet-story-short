import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Подключаем новый компонент Navbar
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Gallery from './Gallery';
import Cart from './Cart';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Используем компонент Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
