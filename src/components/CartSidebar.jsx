import React from "react";
import "../styles/CartSidebar.css";

export default function CartSidebar({ cartItems, isOpen, setCartItems }) {
  const changeItemAmount = (itemId, isIncrementing) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId)
        return {
          ...item,
          amount: isIncrementing
            ? item.amount + 1
            : item.amount < 2
            ? 1
            : item.amount - 1,
        };
      return item;
    });
    setCartItems(newCartItems);
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * (item.amount ?? 1);
  }, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="cart-item">
            <img src={item.image} className="cart-item--image"></img>
            <div className="cart-item--amount-group">
              <button
                className="amount-group--more-btn"
                onClick={() => changeItemAmount(item.id, true)}
              >
                ▲
              </button>
              <div className="cart-item--amount">{item.amount}x</div>
              <button
                className="amount-group--less-btn"
                onClick={() => changeItemAmount(item.id, false)}
              >
                ▼
              </button>
            </div>
            <div className="cart-item--name">{item.title}</div>
            <div className="cart-item--price">
              $ {(item.price * item.amount).toFixed(2)}
            </div>
          </div>
        ))
      )}
      <div className="checkout-group">
        <button className="checkout-group--buy-btn">Buy Now</button>
        <div className="checkout-group--total-price">${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
