import React from "react";
import "../styles/ShoppingCart.css";

export default function ShoppingCart({ itemCount, onCartClick }) {
  return (
    <div>
      <div
        className="shopping-cart-icon-wrapper"
        onClick={() => {
          console.log("🛒 Cart icon clicked!");
          onCartClick();
        }}
      >
        {" "}
        {itemCount > 0 && <span className="cart-amount-icon">{itemCount}</span>}
        <div className="cart-icon">🛒</div>
      </div>
    </div>
  );
}
