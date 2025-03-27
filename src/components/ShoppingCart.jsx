import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart({ itemCount }) {
  return (
    <div>
      <Link to="/cart" className="shopping-cart-icon-wrapper">
        <div className="cart-icon">🛒</div>

        {itemCount > 0 && <span className="cart-amount-icon">{itemCount}</span>}
      </Link>
    </div>
  );
}
