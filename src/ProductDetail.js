import React from 'react';
import './ProductDetail.css'; 

function ProductDetail({ product, onClose, onAddToCart }) {
  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button 
          className="add-to-cart-button" 
          onClick={() => {
            onAddToCart(product);
            onClose(); 
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
