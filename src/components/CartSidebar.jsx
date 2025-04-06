import React from "react";
import "../styles/CartSidebar.css";

export default function CartSidebar({ cartItems, isOpen, onClose }) {
  console.log("Sidebar open:", isOpen);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="cart-item">
            {item.title}*{item.amount}
          </div>
        ))
      )}
    </div>
  );
}
