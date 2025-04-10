import React, { useMemo } from "react";
import "../styles/CartSidebar.css";

export default function CartSidebar({
  cartItems,
  isOpen,
  setCartItems,
  onClose,
  setShowToast,
}) {
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

  const deleteCartItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id !== itemId;
    });
    console.log(newCartItems, itemId);
    setCartItems(newCartItems);
  };

  const checkout = () => {
    setCartItems([]);
    setShowToast(true);
    onClose();
  };

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.amount;
    }, 0);
  }, [cartItems]);

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
              {item.amount === 1 ? (
                <button
                  className="amount-group--less-btn"
                  onClick={() => deleteCartItem(item.id)}
                >
                  🗑️
                </button>
              ) : (
                <button
                  className="amount-group--less-btn"
                  onClick={() => changeItemAmount(item.id, false)}
                >
                  ▼
                </button>
              )}
            </div>
            <div className="cart-item--name">{item.title}</div>
            <div className="cart-item--price">
              $ {(item.price * item.amount).toFixed(2)}
            </div>
          </div>
        ))
      )}
      <div className="checkout-group">
        <button className="checkout-group--buy-btn" onClick={checkout}>
          Buy Now
        </button>
        <div className="checkout-group--total-price">${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
