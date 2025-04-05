import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "../styles/ItemPage.css";
import { AddItemToCart } from "../lib/utils";

export default function ItemPage() {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const { cartItems, setCartItems } = useOutletContext();

  const IncrementAmount = () => {
    setAmount(amount + 1);
  };

  const DecrementAmount = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };

  const HandleAddToCart = () => {
    AddItemToCart(itemData, amount, cartItems, setCartItems);
    setAmount(1);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => setItemData(data))
      .catch((error) => {
        console.error(error);
        setItemData(-1);
      });
  }, []);

  return itemData === null ? (
    <div>Loading...</div>
  ) : itemData === -1 ? (
    <div>Sorry about that.</div>
  ) : (
    <div className="item-page">
      <div className="item-page--image-wrapper">
        <img
          src={itemData.image}
          alt={itemData.title}
          className="item-page-image"
        />
      </div>
      <div className="item-page--text-wrapper">
        <div className="item-page-title">{itemData.title}</div>
        <div className="item-page-description">{itemData.description}</div>
        <div className="item-page--price-group">
          <div className="add-input-group">
            <button onClick={DecrementAmount} className="less-btn">
              -
            </button>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              defaultValue={0}
            ></input>
            <button onClick={IncrementAmount} className="more-btn">
              +
            </button>
          </div>
          <div className="item-page-price">
            $ {(itemData.price * amount).toFixed(2)}
          </div>
          <button onClick={HandleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div>I luv you</div>
    </div>
  );
}
