import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; // Подключаем стили для Cart

function Cart() {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleUpdateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <input
                  type="number"
                  className="quantity-input"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item, e.target.value)}
                  min="1"
                />
                <button onClick={() => handleRemove(item)}>Remove</button>
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
