import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../styles/ShopPage.css";
import { AddItemToCart } from "../lib/utils";

export default function ShopPage() {
  const { searchTerm, cartItems, setCartItems } = useOutletContext();
  const [products, setProducts] = useState([]);

  const HandleAddToCart = (item) => {
    AddItemToCart(item, 1, cartItems, setCartItems);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Shop</h2>
      <ul className="shop-list">
        {filteredProducts.map((item) => (
          <li key={item.id} className="shop-list--item">
            <Link to={`/item/${item.id}`} className="item-image-wrapper">
              <img src={item.image} alt={item.title} className="item-image" />
            </Link>{" "}
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">{item.price} $</p>
            <button
              onClick={() => HandleAddToCart(item)}
              className="item-add-btn"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
