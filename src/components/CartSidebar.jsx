import React from "react";
import "../styles/CartSidebar.css";

export default function CartSidebar({ cartItems, isOpen }) {
  console.log("Sidebar open:", isOpen);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="cart-item">
            <img src={item.image} className="cart-item--image"></img>
            <div className="cart-item--amount">{item.amount}x</div>
            <div className="cart-item--name">{item.title}</div>
            <div className="cart-item--price">
              $ {(item.price * item.amount).toFixed(2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
