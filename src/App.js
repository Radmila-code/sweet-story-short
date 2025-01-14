import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Gallery from './Gallery';
import Cart from './Cart';
import './styles.css';
import './Gallery.css';
import './Home.css';
import './Contact.css';
import './Products.css';
import './Cart.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleUpdateQuantity = (product, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/images/image16.png`} alt="Sweet Story Short" className="navbar-logo"/>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <Link className="nav-link cart-link" to="/cart">
              Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
