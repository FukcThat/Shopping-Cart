import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/ShopPage.css";

export default function ShopPage() {
  const { searchTerm, cartItems, setCartItems } = useOutletContext();
  const [products, setProducts] = useState([]);

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
            <div className="item-image-wrapper">
              <img src={item.image} alt={item.title} className="item-image" />
            </div>{" "}
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">{item.price} $</p>
            <button
              onClick={() => setCartItems({ ...cartItems, item })}
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
