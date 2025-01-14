import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductDetail from './ProductDetail';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили AOS
import './Products.css'; // Подключаем стили для Products

const products = [
  { id: 1, name: 'Nut Cookies with Caramel Filling', category: 'Cookies', description: 'Delicious nut cookies filled with caramel.', price: 10, image: `${process.env.PUBLIC_URL}/images/product1.jpg` },
  { id: 2, name: 'Nut Cookies with Chocolate Filling', category: 'Cookies', description: 'Delicious nut cookies filled with chocolate.', price: 12, image: `${process.env.PUBLIC_URL}/images/product2.jpg` },
  { id: 3, name: 'Berries in Dark Chocolate', category: 'Berries', description: 'Fresh berries dipped in dark chocolate.', price: 15, image: `${process.env.PUBLIC_URL}/images/product3.jpg` },
  { id: 4, name: 'Berries in White Chocolate', category: 'Berries', description: 'Fresh berries dipped in white chocolate.', price: 15, image: `${process.env.PUBLIC_URL}/images/image9.jpg` },
  { id: 5, name: 'Gift sets for any occasion', category: 'Sets', description: 'Gift sets for any occasion.', price: 20, image: `${process.env.PUBLIC_URL}/images/image11.jpg` },
  { id: 6, name: 'Gift sets for any occasion', category: 'Sets', description: 'Gift sets for any occasion.', price: 20, image: `${process.env.PUBLIC_URL}/images/image12.jpg` },
  { id: 7, name: 'Gift sets for any occasion', category: 'Sets', description: 'Gift sets for any occasion.', price: 20, image: `${process.env.PUBLIC_URL}/images/image13.jpg` },
  { id: 8, name: 'Gift sets for any occasion', category: 'Sets', description: 'Gift sets for any occasion.', price: 20, image: `${process.env.PUBLIC_URL}/images/image14.jpg` },
  { id: 9, name: 'Gift sets for any occasion', category: 'Sets', description: 'Gift sets for any occasion.', price: 20, image: `${process.env.PUBLIC_URL}/images/image15.jpg` },
  { id: 10, name: 'Dubai chocolate', category: 'Chocolate', description: 'Dubai chocolate.', price: 15, image: `${process.env.PUBLIC_URL}/images/image18.jpg` },
];

function Products() {
  const [category, setCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container">
      <h1 data-aos="fade-up">Our Products</h1>
      <div data-aos="fade-up" data-aos-delay="200">
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('Cookies')}>Cookies</button>
        <button onClick={() => setCategory('Berries')}>Berries</button>
        <button onClick={() => setCategory('Sets')}>Sets</button>
        <button onClick={() => setCategory('Chocolate')}>Dubai chocolate</button>
      </div>
      <ul className="product-list" data-aos="fade-up" data-aos-delay="400">
        {filteredProducts.map(product => (
          <li key={product.id} onClick={() => handleProductClick(product)} className="product-item">
            <img src={product.image} alt={product.name} className="product-thumbnail" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
      {selectedProduct && 
        <ProductDetail 
          product={selectedProduct} 
          onClose={handleCloseDetail} 
          onAddToCart={handleAddToCart} 
        />}
    </div>
  );
}

export default Products;
