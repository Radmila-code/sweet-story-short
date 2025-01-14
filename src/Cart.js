import React from 'react';
import './Cart.css'; // Подключаем стили для Cart

function Cart({ cartItems, onRemove, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item, e.target.value)}
                  min="1"
                />
                <button onClick={() => onRemove(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default Cart;
